import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/common/page-hero";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { CTASection } from "@/components/sections";
import { lawyers } from "@/content/lawyers";
import { Mail, Phone, ArrowRight } from "lucide-react";

interface TeamPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: TeamPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "vi"
        ? "Đội ngũ luật sư"
        : "Our Legal Team",
    description:
      locale === "vi"
        ? "Gặp gỡ đội ngũ luật sư giàu kinh nghiệm và tận tâm của Lighthouse Law."
        : "Meet the experienced and dedicated legal team at Lighthouse Law.",
    alternates: {
      canonical: `/${locale}/team`,
      languages: { vi: "/vi/team", en: "/en/team" },
    },
  };
}

export default async function TeamPage({ params }: TeamPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <TeamPageContent />
      <CTASection />
    </>
  );
}

function TeamPageContent() {
  const t = useTranslations("team");
  const locale = useLocale() as "vi" | "en";

  const breadcrumbItems = [
    { label: locale === "vi" ? "Trang chủ" : "Home", href: "/" },
    { label: t("heading") },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("sectionLabel")}
        title={t("heading")}
        description={t("description")}
      >
        <div className="mt-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </PageHero>

      <Section variant="light" spacing="lg">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lawyers.map((lawyer) => (
              <Link
                key={lawyer.id}
                href={`/team/${lawyer.slug}`}
                className="group block bg-surface rounded-[var(--radius-md)] border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                <div className="aspect-[4/3] bg-charcoal relative overflow-hidden">
                  <Image
                    src={lawyer.image}
                    alt={lawyer.name[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h2 className="heading-3 text-text-primary group-hover:text-gold transition-colors mb-1">
                    {lawyer.name[locale]}
                  </h2>
                  <p className="text-sm text-gold font-medium mb-3">
                    {lawyer.position[locale]}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {lawyer.practiceAreas[locale].map((area) => (
                      <span
                        key={area}
                        className="text-xs px-2 py-0.5 rounded-full bg-gold/10 text-gold"
                      >
                        {area}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-1.5 text-xs text-text-secondary mb-4">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-gold/60" />
                      {lawyer.email}
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-gold/60" />
                      {lawyer.phone}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm text-gold font-medium group-hover:gap-2.5 transition-all">
                    {locale === "vi" ? "Xem hồ sơ" : "View Profile"}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
