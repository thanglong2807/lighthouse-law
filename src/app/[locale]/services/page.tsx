import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";
import { ArrowRight, MessageCircle } from "lucide-react";
import { services as serviceContent } from "@/content/services";
import { SERVICE_SLUGS, URL_TO_CONTENT_SLUG } from "@/content/service-slugs";
import { ServiceFilterGrid } from "./_components/service-filter-grid";
import { applyPageSeo } from "@/lib/page-seo-store";

/* ──────────────────────────────────────────────
   Prepare service entries for the client filter grid
   ────────────────────────────────────────────── */

const serviceEntries = SERVICE_SLUGS.map((urlSlug, index) => {
  const contentSlug = URL_TO_CONTENT_SLUG[urlSlug];
  const contentService = serviceContent.find((s) => s.slug === contentSlug);
  return {
    urlSlug,
    contentSlug,
    audiences: contentService?.audiences ?? [],
    index,
  };
});

/* ──────────────────────────────────────────────
   Metadata
   ────────────────────────────────────────────── */

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services" });
  const meta = await getTranslations({ locale, namespace: "metadata" });

  return applyPageSeo("/services", locale as "vi" | "en", {
    title: meta("pageTitles.services"),
    description: t("sectionDescription"),
    alternates: {
      canonical: `/${locale}/services`,
      languages: { vi: "/vi/services", en: "/en/services" },
    },
  });
}

/* ──────────────────────────────────────────────
   Page component (Server Component)
   ────────────────────────────────────────────── */

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      {/* Hero */}
      <ServicesHero />

      {/* Service grid with filters */}
      <Section variant="muted" spacing="lg">
        <Container>
          <ServiceFilterGrid services={serviceEntries} />
        </Container>
      </Section>

      {/* Not sure CTA */}
      <NotSureCTA />

      {/* Final CTA */}
      <CTASection />
    </>
  );
}

/* ──────────────────────────────────────────────
   Hero section (Server Component)
   ────────────────────────────────────────────── */

function ServicesHero() {
  const t = useTranslations("services");

  return (
    <section className="relative bg-charcoal py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(212,175,55,0.06) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="overline text-gold mb-4">{t("sectionLabel")}</p>

          <h1 className="display-lg text-[#F0EDE6] mb-6">
            {t("sectionTitle")}
          </h1>

          <p className="body-lg text-white/50 max-w-2xl mx-auto">
            {t("sectionDescription")}
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ──────────────────────────────────────────────
   "Not sure" CTA (Server Component)
   ────────────────────────────────────────────── */

function NotSureCTA() {
  const t = useTranslations("services");

  return (
    <Section variant="light" spacing="md">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10 bg-surface-alt rounded-[var(--radius-md)] border border-border">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-gold" />
            </div>
            <p className="heading-4 text-text-primary">
              {t("notSure")}
            </p>
          </div>

          <Button variant="primary" size="lg" asChild>
            <Link href="/consultation">
              {t("speakWithLawyer")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
