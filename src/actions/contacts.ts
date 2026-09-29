"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getCurrentAdmin, isAdminLoggedIn } from "@/lib/admin-auth";
import { updateContactStatus, type ContactRecord } from "@/lib/contacts-store";
import { writeAudit } from "@/lib/security-store";

export async function changeContactStatus(formData: FormData) {
  if (!(await isAdminLoggedIn())) redirect("/vi/admin/login");
  const id = Number(formData.get("id"));
  const status = String(formData.get("status"));
  if (!Number.isInteger(id) || !["new", "contacted", "closed"].includes(status)) return;
  updateContactStatus(id, status as ContactRecord["status"]);
  const admin = await getCurrentAdmin();
  if (admin) writeAudit({ adminId: admin.id, adminEmail: admin.email, action: "contact_status_changed", entityType: "contact", entityId: String(id), metadata: { status } });
  revalidatePath("/vi/admin/contacts");
  revalidatePath("/en/admin/contacts");
}
