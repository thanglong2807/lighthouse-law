import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { getCurrentAdmin } from "@/lib/admin-auth";
import { writeAudit } from "@/lib/security-store";

const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const allowedTypes = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
  ["image/avif", "avif"],
]);

export async function POST(request: Request) {
  const admin = await getCurrentAdmin();
  if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await request.formData();
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "Vui lòng chọn một ảnh." }, { status: 400 });
  }
  if (file.size > MAX_IMAGE_BYTES) {
    return NextResponse.json({ error: "Ảnh phải nhỏ hơn hoặc bằng 5 MB." }, { status: 400 });
  }
  const extension = allowedTypes.get(file.type);
  if (!extension) {
    return NextResponse.json({ error: "Chỉ hỗ trợ JPG, PNG, WebP hoặc AVIF." }, { status: 400 });
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  const hasValidSignature =
    (file.type === "image/jpeg" && bytes.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]))) ||
    (file.type === "image/png" && bytes.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) ||
    (file.type === "image/webp" && bytes.subarray(0, 4).toString("ascii") === "RIFF" && bytes.subarray(8, 12).toString("ascii") === "WEBP") ||
    (file.type === "image/avif" && bytes.subarray(4, 12).toString("ascii").includes("ftyp"));
  if (!hasValidSignature) {
    return NextResponse.json({ error: "Nội dung file không phải ảnh hợp lệ." }, { status: 400 });
  }

  const uploadDir = path.join(process.cwd(), "public", "uploads", "seo");
  await mkdir(uploadDir, { recursive: true });
  const filename = `${crypto.randomUUID()}.${extension}`;
  await writeFile(path.join(uploadDir, filename), bytes, { mode: 0o644 });
  const url = `/uploads/seo/${filename}`;
  writeAudit({ adminId: admin.id, adminEmail: admin.email, action: "seo_image_uploaded", entityType: "page_seo_image", entityId: url });
  return NextResponse.json({ url });
}
