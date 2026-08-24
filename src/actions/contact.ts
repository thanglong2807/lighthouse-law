"use server";

import fs from "fs/promises";
import path from "path";

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
    const csvDir = path.join(process.cwd(), "data");
    const csvPath = path.join(csvDir, "contacts.csv");

    // Create dir if not exists
    try {
      await fs.access(csvDir);
    } catch {
      await fs.mkdir(csvDir, { recursive: true });
    }

    // Check if file exists to write header
    let isNewFile = false;
    try {
      await fs.access(csvPath);
    } catch {
      isNewFile = true;
    }

    const date = new Date().toISOString();

    // Escape CSV fields
    const escapeCsv = (val: string | undefined | null) => {
      if (val === undefined || val === null) return '""';
      const str = String(val).replace(/"/g, '""');
      return `"${str}"`;
    };

    const headers = [
      "Date",
      "FullName",
      "Phone",
      "Email",
      "Company",
      "Service",
      "Method",
      "Message",
    ];
    
    const row = [
      date,
      data.fullName,
      data.phone,
      data.email,
      data.company || "",
      data.service,
      data.method,
      data.message,
    ]
      .map(escapeCsv)
      .join(",");

    const content = (isNewFile ? headers.join(",") + "\n" : "") + row + "\n";

    await fs.appendFile(csvPath, content, "utf8");

    return { success: true };
  } catch (error) {
    console.error("Error saving contact form:", error);
    return { success: false, error: "Failed to save data" };
  }
}
