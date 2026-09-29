"use server";

import { createContact } from "@/lib/contacts-store";

export async function submitContactForm(data: {
  fullName: string;
  phone: string;
  email: string;
  company?: string;
  service: string;
  method: string;
  message: string;
}) {
  try {
    createContact({
      fullName: data.fullName,
      phone: data.phone,
      email: data.email,
      company: data.company || "",
      service: data.service,
      method: data.method,
      message: data.message,
    });

    return { success: true };
  } catch (error) {
    console.error("Error saving contact form:", error);
    return { success: false, error: "Failed to save data" };
  }
}
