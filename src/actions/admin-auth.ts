"use server";

import { redirect } from "next/navigation";
import { clearAdminSession, createAdminSession, setAdminSession, verifyAdminPassword } from "@/lib/admin-auth";

export async function loginAdmin(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  if (!verifyAdminPassword(password)) {
    return { success: false, error: "Mật khẩu không đúng." };
  }

  await setAdminSession(createAdminSession());
  return { success: true };
}

export async function logoutAdmin() {
  await clearAdminSession();
  redirect("/");
}
