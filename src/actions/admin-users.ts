"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getCurrentAdmin, isAdminLoggedIn } from "@/lib/admin-auth";
import { createAdminAccount, setAdminActive, writeAudit } from "@/lib/security-store";

export async function createAdminUser(formData: FormData) {
  const current = await getCurrentAdmin();
  if (!(await isAdminLoggedIn()) || current?.role !== "owner") redirect("/vi/admin/login");
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const displayName = String(formData.get("displayName") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const role = String(formData.get("role") ?? "editor") === "owner" ? "owner" : "editor";
  if (!email || !displayName || password.length < 12) redirect("/vi/admin/users?error=invalid");
  try {
    createAdminAccount(email, displayName, password, role);
  } catch {
    redirect("/vi/admin/users?error=duplicate");
  }
  writeAudit({ adminId: current.id, adminEmail: current.email, action: "admin_created", entityType: "admin", metadata: { email, role } });
  revalidatePath("/vi/admin/users");
  revalidatePath("/en/admin/users");
}

export async function toggleAdminUser(formData: FormData) {
  const current = await getCurrentAdmin();
  if (!(await isAdminLoggedIn()) || current?.role !== "owner") redirect("/vi/admin/login");
  const id = Number(formData.get("id"));
  const active = String(formData.get("active")) === "1";
  if (!Number.isInteger(id) || id === current.id) return;
  setAdminActive(id, active);
  writeAudit({ adminId: current.id, adminEmail: current.email, action: active ? "admin_activated" : "admin_deactivated", entityType: "admin", entityId: String(id) });
  revalidatePath("/vi/admin/users");
  revalidatePath("/en/admin/users");
}
