"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/lib/admin-auth";
import { applyPageSeo, savePageSeo } from "@/lib/page-seo-store";
import { sanitizeHtml } from "@/lib/security-crypto";
import { writeAudit } from "@/lib/security-store";

export async function savePageSeoAction(formData: FormData) {
  const admin = await getCurrentAdmin();
  if (!admin) redirect("/vi/admin/login");
  const route = String(formData.get("route") ?? "/").trim();
  const locale = String(formData.get("locale") ?? "vi") === "en" ? "en" : "vi";
  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const primaryKeyword = String(formData.get("primaryKeyword") ?? "").trim();
  const secondaryKeywords = String(formData.get("secondaryKeywords") ?? "").split(",").map((item) => item.trim()).filter(Boolean);
  const canonical = String(formData.get("canonical") ?? "").trim();
  const ogTitle = String(formData.get("ogTitle") ?? "").trim();
  const ogDescription = String(formData.get("ogDescription") ?? "").trim();
  const ogImage = String(formData.get("ogImage") ?? "").trim();
  const robots = String(formData.get("robots") ?? "index,follow");
  if (!route.startsWith("/") || title.length < 5 || description.length < 20 || !canonical) redirect("/vi/admin/seo?error=invalid");
  savePageSeo({ route, locale, title: sanitizeHtml(title), description: sanitizeHtml(description), primaryKeyword, secondaryKeywords, canonical, ogTitle: sanitizeHtml(ogTitle), ogDescription: sanitizeHtml(ogDescription), ogImage, robots });
  writeAudit({ adminId: admin.id, adminEmail: admin.email, action: "page_seo_saved", entityType: "page_seo", entityId: `${locale}:${route}` });
  revalidatePath(`/${locale}${route === "/" ? "" : route}`);
  redirect(`/vi/admin/seo?saved=1&route=${encodeURIComponent(route)}&locale=${locale}`);
}
