import { z } from "zod";

/**
 * Regex for Vietnamese phone numbers: 0xx or +84xx, 9-11 digits.
 * Also accepts common international formats with country code prefix.
 */
const vietnamesePhoneRegex = /^(\+84|0)(3|5|7|8|9)\d{8}$/;
const internationalPhoneRegex = /^\+[1-9]\d{6,14}$/;

function isValidPhone(value: string): boolean {
  const cleaned = value.replace(/[\s\-().]/g, "");
  return vietnamesePhoneRegex.test(cleaned) || internationalPhoneRegex.test(cleaned);
}

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Ho ten phai co it nhat 2 ky tu")
    .max(100, "Ho ten khong duoc vuot qua 100 ky tu"),
  phone: z
    .string()
    .min(1, "Vui long nhap so dien thoai")
    .refine(isValidPhone, "So dien thoai khong hop le"),
  email: z
    .string()
    .min(1, "Vui long nhap email")
    .email("Dia chi email khong hop le"),
  company: z
    .string()
    .max(200, "Ten cong ty khong duoc vuot qua 200 ky tu")
    .optional(),
  service: z
    .string()
    .min(1, "Vui long chon linh vuc phap ly"),
  consultationMethod: z.enum(["in-person", "phone", "video", "email"], {
    required_error: "Vui long chon hinh thuc tu van",
  }),
  preferredDate: z
    .string()
    .min(1, "Vui long chon ngay hen")
    .refine(
      (val) => {
        const selected = new Date(val);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selected >= today;
      },
      "Ngay hen khong duoc trong qua khu"
    ),
  preferredTime: z
    .string()
    .min(1, "Vui long chon gio hen"),
  message: z
    .string()
    .min(20, "Noi dung tin nhan phai co it nhat 20 ky tu")
    .max(5000, "Noi dung tin nhan khong duoc vuot qua 5000 ky tu"),
  privacyConsent: z
    .literal(true, {
      errorMap: () => ({
        message: "Ban can dong y voi chinh sach bao mat de tiep tuc",
      }),
    }),
  /** Honeypot field -- must remain empty. */
  website: z
    .string()
    .max(0, "Invalid submission")
    .optional()
    .default(""),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const consultationFormSchema = contactFormSchema.extend({
  fileAttachment: z
    .string()
    .url("URL tap tin khong hop le")
    .optional(),
});

export type ConsultationFormValues = z.infer<typeof consultationFormSchema>;

export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Vui long nhap email")
    .email("Dia chi email khong hop le"),
});

export type NewsletterFormValues = z.infer<typeof newsletterSchema>;
