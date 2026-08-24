"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { submitContactForm } from "@/actions/contact";

const contactSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().regex(/^(\+?84|0)\d{9,10}$|^\+?\d{7,15}$/),
  email: z.string().email(),
  company: z.string().optional(),
  service: z.string().min(1),
  method: z.string().min(1),
  message: z.string().min(20),
  privacy: z.literal(true),
  honeypot: z.string().max(0).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceSlugs = [
  "tu-van-phap-ly",
  "so-huu-tri-tue",
  "dau-tu-kinh-doanh",
  "luat-doanh-nghiep",
  "luat-bat-dong-san",
  "luat-dan-su",
  "luat-hinh-su",
  "luat-hon-nhan-gia-dinh",
  "luat-lao-dong",
  "luat-thue",
  "soan-thao-hop-dong",
  "giai-quyet-tranh-chap",
] as const;

export function ContactForm() {
  const t = useTranslations("contact");
  const tServices = useTranslations("services");
  const tErrors = useTranslations("errors");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { honeypot: "" },
  });

  async function onSubmit(data: ContactFormData) {
    if (data.honeypot) return;
    setStatus("loading");
    try {
      const result = await submitContactForm({
        fullName: data.fullName,
        phone: data.phone,
        email: data.email,
        company: data.company,
        service: data.service,
        method: data.method,
        message: data.message,
      });
      
      if (result.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
        <p className="heading-3 text-text-primary mb-2">{t("successMessage")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input type="text" tabIndex={-1} autoComplete="off" {...register("honeypot")} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField
          label={t("form.fullName")}
          error={errors.fullName && tErrors("required")}
          required
        >
          <input
            type="text"
            {...register("fullName")}
            className="form-input"
            autoComplete="name"
          />
        </FormField>

        <FormField
          label={t("form.phone")}
          error={errors.phone && tErrors("invalidPhone")}
          required
        >
          <input
            type="tel"
            {...register("phone")}
            className="form-input"
            autoComplete="tel"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField
          label={t("form.email")}
          error={errors.email && tErrors("invalidEmail")}
          required
        >
          <input
            type="email"
            {...register("email")}
            className="form-input"
            autoComplete="email"
          />
        </FormField>

        <FormField label={t("form.company")}>
          <input
            type="text"
            {...register("company")}
            className="form-input"
            autoComplete="organization"
          />
        </FormField>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <FormField
          label={t("form.service")}
          error={errors.service && tErrors("required")}
          required
        >
          <select {...register("service")} className="form-input">
            <option value="">—</option>
            {serviceSlugs.map((slug) => (
              <option key={slug} value={slug}>
                {tServices(`items.${slug}.title`)}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          label={t("form.method")}
          error={errors.method && tErrors("required")}
          required
        >
          <select {...register("method")} className="form-input">
            <option value="">—</option>
            <option value="office">{t("methods.office")}</option>
            <option value="video">{t("methods.video")}</option>
            <option value="phone">{t("methods.phone")}</option>
          </select>
        </FormField>
      </div>

      <FormField
        label={t("form.message")}
        error={errors.message && tErrors("messageTooShort")}
        required
      >
        <textarea
          {...register("message")}
          className="form-input min-h-[120px] resize-y"
          rows={5}
        />
      </FormField>

      <FormField error={errors.privacy && tErrors("consentRequired")}>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            {...register("privacy")}
            className="mt-0.5 w-5 h-5 min-w-[20px] accent-gold"
          />
          <span className="text-sm text-text-secondary leading-relaxed">{t("form.privacy")}</span>
        </label>
      </FormField>

      {status === "error" && (
        <div className="flex items-center gap-2 text-sm text-error">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {t("errorMessage")}
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" disabled={status === "loading"}>
        {status === "loading" ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        {t("form.submit")}
      </Button>
    </form>
  );
}

interface FormFieldProps {
  label?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function FormField({ label, error, required, children }: FormFieldProps) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-text-primary mb-1.5">
          {label}
          {required && <span className="text-error ml-0.5">*</span>}
        </label>
      )}
      {children}
      {error && <p className="text-xs text-error mt-1">{error}</p>}
    </div>
  );
}
