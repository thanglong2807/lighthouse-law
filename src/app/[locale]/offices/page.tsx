import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/common/page-hero";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { CTASection } from "@/components/sections";
import { offices } from "@/content/offices";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

interface OfficesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: OfficesPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "vi"
        ? "Văn phòng"
        : "Our Offices",
    description:
      locale === "vi"
        ? "Địa chỉ và thông tin liên hệ các văn phòng của Lighthouse Law tại Việt Nam."
        : "Locations and contact information for Lighthouse Law offices in Vietnam.",
    alternates: {
      canonical: `/${locale}/offices`,
      languages: { vi: "/vi/offices", en: "/en/offices" },
    },
  };
}

export default async function OfficesPage({ params }: OfficesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <OfficesPageContent />
      <CTASection />
    </>
  );
}

function OfficesPageContent() {
  const locale = useLocale() as "vi" | "en";

  const breadcrumbItems = [
    { label: locale === "vi" ? "Trang chủ" : "Home", href: "/" },
    { label: locale === "vi" ? "Văn phòng" : "Our Offices" },
  ];

  return (
    <>
      <PageHero
        eyebrow={locale === "vi" ? "Văn phòng" : "Our Offices"}
        title={
          locale === "vi"
            ? "Văn phòng của chúng tôi"
            : "Our Offices"
        }
        description={
          locale === "vi"
            ? "Ghé thăm văn phòng Lighthouse Law để được tư vấn trực tiếp."
            : "Visit our Lighthouse Law offices for in-person consultation."
        }
      >
        <div className="mt-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </PageHero>

      <Section variant="light" spacing="lg">
        <Container size="lg">
          <div className="relative aspect-[21/9] rounded-[var(--radius-lg)] overflow-hidden mb-12">
            <Image
              src="/images/office/hcm-office.jpg"
              alt={locale === "vi" ? "Văn phòng Lighthouse Law" : "Lighthouse Law Office"}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offices.map((office) => (
              <div
                key={office.id}
                className="bg-surface rounded-[var(--radius-md)] border border-border p-8"
              >
                {office.isHeadquarters && (
                  <span className="inline-block text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full mb-4">
                    {locale === "vi" ? "Trụ sở chính" : "Headquarters"}
                  </span>
                )}

                <h2 className="heading-3 text-text-primary mb-6">
                  {office.name[locale]}
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="body-sm text-text-secondary">
                        {office.address[locale]}
                      </p>
                      <a
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-gold hover:underline mt-1"
                      >
                        {locale === "vi" ? "Xem bản đồ" : "View on map"}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="body-sm text-text-secondary hover:text-gold transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                    <a
                      href={`mailto:${office.email}`}
                      className="body-sm text-text-secondary hover:text-gold transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-text-secondary space-y-1">
                      <p>
                        {locale === "vi" ? "Thứ Hai - Thứ Sáu" : "Monday - Friday"}
                        : {siteConfig.workingHours.weekdays}
                      </p>
                      <p>
                        {locale === "vi" ? "Thứ Bảy" : "Saturday"}
                        : {siteConfig.workingHours.saturday}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
