"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { clearAdminSession, createAdminSession, setAdminSession } from "@/lib/admin-auth";
import { authenticateAdmin, checkLoginRateLimit, clearLoginRateLimit, recordLoginFailure, writeAudit } from "@/lib/security-store";

export async function loginAdmin(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const locale = String(formData.get("locale") ?? "vi");
  const safeLocale = locale === "en" ? "en" : "vi";

  const requestHeaders = await headers();
  const ip = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() || requestHeaders.get("x-real-ip") || "unknown";
  const rateKey = `${email || "unknown"}:${ip}`;
  if (!checkLoginRateLimit(rateKey).allowed) redirect(`/${safeLocale}/admin/login?error=rate`);

  let admin;
  try {
    admin = authenticateAdmin(email, password);
  } catch {
    redirect(`/${safeLocale}/admin/login?error=config`);
  }
  if (!admin) {
    recordLoginFailure(rateKey);
    writeAudit({ adminEmail: email || "unknown", action: "login_failed", entityType: "session", metadata: { ip } });
    redirect(`/${safeLocale}/admin/login?error=invalid`);
  }

  clearLoginRateLimit(rateKey);
  writeAudit({ adminId: admin.id, adminEmail: admin.email, action: "login_success", entityType: "session", metadata: { ip } });

  await setAdminSession(createAdminSession(admin.id));
  redirect(`/${safeLocale}/admin`);
}

export async function logoutAdmin() {
  await clearAdminSession();
  redirect("/vi/admin/login");
}
