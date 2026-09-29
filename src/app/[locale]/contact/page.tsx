import type { Metadata } from "next";
import { useTranslations, useLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/common/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { CTASection } from "@/components/sections";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { applyPageSeo } from "@/lib/page-seo-store";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  return applyPageSeo("/contact", locale as "vi" | "en", {
    title:
      locale === "vi"
        ? "Liên hệ"
        : "Contact",
    description:
      locale === "vi"
        ? "Liên hệ với Lighthouse Law để được tư vấn pháp lý chuyên nghiệp."
        : "Contact Lighthouse Law for professional legal consultation.",
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { vi: "/vi/contact", en: "/en/contact" },
    },
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ContactPageContent />
      <CTASection />
    </>
  );
}

function ContactPageContent() {
  const t = useTranslations("contact");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  return (
    <>
      <PageHero
        eyebrow={locale === "vi" ? "Liên hệ" : "Contact"}
        title={t("heading")}
        description={t("description")}
      />

      <Section variant="light" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <ContactInfoItem
                  icon={<Phone className="w-5 h-5" />}
                  label={tCommon("labels.phone")}
                  value={siteConfig.contact.phone}
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                />
                <ContactInfoItem
                  icon={<Mail className="w-5 h-5" />}
                  label={tCommon("labels.email")}
                  value={siteConfig.contact.email}
                  href={`mailto:${siteConfig.contact.email}`}
                />
                <ContactInfoItem
                  icon={<MapPin className="w-5 h-5" />}
                  label={tCommon("labels.address")}
                  value={siteConfig.contact.address}
                />
                <ContactInfoItem
                  icon={<Clock className="w-5 h-5" />}
                  label={tCommon("labels.workingHours")}
                  value={`${tCommon("labels.weekdays")}: ${siteConfig.workingHours.weekdays}\n${tCommon("labels.saturday")}: ${siteConfig.workingHours.saturday}`}
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="relative">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ContactInfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-[var(--radius-md)] bg-surface-alt text-gold">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-1">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="body-sm text-text-primary hover:text-gold-dark transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="body-sm text-text-primary whitespace-pre-line">{value}</p>
        )}
      </div>
    </div>
  );
}
