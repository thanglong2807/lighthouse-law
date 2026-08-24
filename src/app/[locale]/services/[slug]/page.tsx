import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";
import {
  ArrowRight,
  ChevronRight,
  Check,
  AlertTriangle,
  Star,
  Briefcase,
} from "lucide-react";
import {
  SERVICE_SLUGS,
  URL_TO_CONTENT_SLUG,
  CONTENT_TO_URL_SLUG,
  getServiceBySlug,
  getServiceIndex,
} from "@/content/service-slugs";
import { siteConfig } from "@/config/site";
import { ServiceFAQ } from "../_components/service-faq";

/* ──────────────────────────────────────────────
   Static params & metadata
   ────────────────────────────────────────────── */

interface ServiceDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const contentSlug = URL_TO_CONTENT_SLUG[slug];

  if (!contentSlug) {
    return { title: "Not Found" };
  }

  const service = getServiceBySlug(contentSlug);
  if (!service) {
    return { title: "Not Found" };
  }

  const lang = locale as "vi" | "en";
  const title = service.title[lang];
  const description = service.heroDescription[lang];

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${slug}`,
      languages: {
        vi: `/vi/services/${slug}`,
        en: `/en/services/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${siteConfig.domain}/${locale}/services/${slug}`,
    },
  };
}

/* ──────────────────────────────────────────────
   Page component
   ────────────────────────────────────────────── */

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const contentSlug = URL_TO_CONTENT_SLUG[slug];
  if (!contentSlug) notFound();

  const service = getServiceBySlug(contentSlug);
  if (!service) notFound();

  const lang = locale as "vi" | "en";
  const serviceIndex = getServiceIndex(contentSlug);
  const serviceNumber = String(serviceIndex + 1).padStart(2, "0");

  const title = service.title[lang];
  const eyebrow = service.eyebrow[lang];
  const heroDesc = service.heroDescription[lang];
  const overviewTitle = service.overviewTitle[lang];
  const overviewParagraphs = service.overviewParagraphs[lang];
  const situations = service.commonSituations[lang];
  const challenges = service.legalChallenges[lang];
  const scopeItems = service.scopeOfServices.map((item) => ({
    title: item.title[lang],
    description: item.description[lang],
  }));
  const benefits = service.benefits.map((b) => ({
    title: b.title[lang],
    description: b.description[lang],
  }));
  const processSteps = service.process.map((step) => ({
    step: step.step,
    title: step.title[lang],
    description: step.description[lang],
  }));
  const representativeMatters = service.representativeMatters[lang];
  const faqItems = service.faqs.map((faq) => ({
    question: faq.question[lang],
    answer: faq.answer[lang],
  }));

  const relatedServices = service.relatedServiceSlugs
    .map((relSlug) => {
      const relService = getServiceBySlug(relSlug);
      const relUrlSlug = CONTENT_TO_URL_SLUG[relSlug];
      if (!relService || !relUrlSlug) return null;
      return {
        urlSlug: relUrlSlug,
        title: relService.title[lang],
        description: relService.heroDescription[lang],
        index: getServiceIndex(relSlug),
      };
    })
    .filter(Boolean)
    .slice(0, 3);

  const baseUrl = siteConfig.domain;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: lang === "vi" ? "Trang chủ" : "Home",
        item: `${baseUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: lang === "vi" ? "Dịch vụ" : "Services",
        item: `${baseUrl}/${locale}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${baseUrl}/${locale}/services/${slug}`,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: title,
    description: heroDesc,
    url: `${baseUrl}/${locale}/services/${slug}`,
    provider: {
      "@type": "LegalService",
      name: siteConfig.name,
      url: baseUrl,
      telephone: siteConfig.contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.contact.address,
        addressLocality: "Ho Chi Minh City",
        addressCountry: "VN",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "Vietnam",
    },
    serviceType: title,
  };

  const faqJsonLd =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const processCols =
    processSteps.length <= 3
      ? "md:grid-cols-3"
      : processSteps.length === 4
        ? "md:grid-cols-4"
        : "md:grid-cols-5";

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbJsonLd,
            serviceJsonLd,
            ...(faqJsonLd ? [faqJsonLd] : []),
          ]),
        }}
      />

      {/* Breadcrumb */}
      <Breadcrumb serviceTitle={title} />

      {/* Hero */}
      <ServiceHero
        number={serviceNumber}
        eyebrow={eyebrow}
        title={title}
        description={heroDesc}
      />

      {/* Overview */}
      <Section variant="light" spacing="md">
        <Container>
          <div className="max-w-3xl">
            <SectionHeader title={overviewTitle} />
            <div className="mt-8 space-y-5">
              {overviewParagraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="body-lg text-text-secondary leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* When you need this */}
      <WhenYouNeedSection situations={situations} />

      {/* Legal challenges */}
      {challenges.length > 0 && (
        <LegalChallengesSection challenges={challenges} />
      )}

      {/* Scope of services */}
      <Section variant="light" spacing="md">
        <Container>
          <SectionHeadingI18n translationKey="scopeOfServices" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {scopeItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-mono font-semibold text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="heading-5 text-text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="body-sm text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why choose us (benefits) */}
      {benefits.length > 0 && <BenefitsSection benefits={benefits} />}

      {/* Our process */}
      <Section variant="muted" spacing="md">
        <Container>
          <SectionHeadingI18n translationKey="ourProcess" align="center" />
          <div className={`mt-12 grid grid-cols-1 ${processCols} gap-8`}>
            {processSteps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mb-4">
                  <span className="text-sm font-semibold text-gold">
                    {step.step}
                  </span>
                </div>
                <h3 className="heading-5 text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="body-sm text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Representative matters */}
      {representativeMatters.length > 0 && (
        <RepresentativeMattersSection matters={representativeMatters} />
      )}

      {/* FAQs */}
      <Section variant="light" spacing="md">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeadingI18n translationKey="faq" align="center" />
            <div className="mt-10">
              <ServiceFAQ items={faqItems} />
            </div>
          </div>
        </Container>
      </Section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <Section variant="muted" spacing="md">
          <Container>
            <SectionHeadingI18n translationKey="relatedServices" />
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((related) => {
                if (!related) return null;
                return (
                  <Link
                    key={related.urlSlug}
                    href={`/services/${related.urlSlug}`}
                    className="group p-6 bg-surface rounded-[var(--radius-md)] border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-[var(--shadow-md)]"
                  >
                    <span className="text-xs font-mono text-text-tertiary mb-3 block">
                      {String(related.index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="heading-4 text-text-primary mb-2 group-hover:text-gold-dark transition-colors">
                      {related.title}
                    </h3>
                    <p className="body-sm text-text-secondary mb-4 line-clamp-2">
                      {related.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gold-dark group-hover:text-gold transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <CTASection />
    </>
  );
}

/* ──────────────────────────────────────────────
   Reusable section heading using i18n
   ────────────────────────────────────────────── */

function SectionHeadingI18n({
  translationKey,
  align,
}: {
  translationKey: string;
  align?: "center" | "left";
}) {
  const t = useTranslations("serviceDetail");
  return <SectionHeader title={t(translationKey)} align={align} />;
}

/* ──────────────────────────────────────────────
   Breadcrumb
   ────────────────────────────────────────────── */

function Breadcrumb({ serviceTitle }: { serviceTitle: string }) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const homeLabel = locale === "vi" ? "Trang chủ" : "Home";

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-surface-alt border-b border-border"
    >
      <Container>
        <ol className="flex items-center gap-2 py-4 text-sm overflow-x-auto">
          <li>
            <Link
              href="/"
              className="text-text-secondary hover:text-gold-dark transition-colors"
            >
              {homeLabel}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-3.5 h-3.5 text-text-tertiary" />
          </li>
          <li>
            <Link
              href="/services"
              className="text-text-secondary hover:text-gold-dark transition-colors"
            >
              {t("services")}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-3.5 h-3.5 text-text-tertiary" />
          </li>
          <li>
            <span className="text-text-primary font-medium" aria-current="page">
              {serviceTitle}
            </span>
          </li>
        </ol>
      </Container>
    </nav>
  );
}

/* ──────────────────────────────────────────────
   Hero
   ────────────────────────────────────────────── */

function ServiceHero({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  const t = useTranslations("serviceDetail");

  return (
    <section className="relative bg-charcoal py-20 md:py-28 lg:py-36 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 60%, rgba(212,175,55,0.06) 0%, transparent 70%)",
        }}
      />
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <p className="overline text-gold mb-4">
            <span className="font-mono mr-2">{number}</span>
            {eyebrow}
          </p>
          <h1 className="display-lg text-[#F0EDE6] mb-6">{title}</h1>
          <p className="body-lg text-white/50 max-w-2xl">{description}</p>
          <div className="mt-8">
            <Button variant="primary" size="lg" asChild>
              <Link href="/consultation">
                {t("ctaButton")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ──────────────────────────────────────────────
   When You Need This
   ────────────────────────────────────────────── */

function WhenYouNeedSection({ situations }: { situations: string[] }) {
  const t = useTranslations("serviceDetail");

  return (
    <Section variant="muted" spacing="md">
      <Container>
        <SectionHeader title={t("whenYouNeed")} />
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {situations.map((situation, i) => (
            <li
              key={i}
              className="flex items-start gap-3 p-4 bg-surface rounded-[var(--radius-md)] border border-border"
            >
              <div className="flex-shrink-0 mt-0.5">
                <Check className="w-5 h-5 text-gold" />
              </div>
              <span className="body-base text-text-primary">{situation}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ──────────────────────────────────────────────
   Legal Challenges (NEW)
   ────────────────────────────────────────────── */

function LegalChallengesSection({ challenges }: { challenges: string[] }) {
  const t = useTranslations("serviceDetail");

  return (
    <Section variant="light" spacing="md">
      <Container>
        <SectionHeader title={t("legalChallenges")} />
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {challenges.map((challenge, i) => (
            <li
              key={i}
              className="flex items-start gap-3 p-4 bg-surface-alt rounded-[var(--radius-md)]"
            >
              <div className="flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-5 h-5 text-warning" />
              </div>
              <span className="body-base text-text-primary">{challenge}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

/* ──────────────────────────────────────────────
   Benefits / Why Choose Us (NEW)
   ────────────────────────────────────────────── */

function BenefitsSection({
  benefits,
}: {
  benefits: { title: string; description: string }[];
}) {
  const t = useTranslations("serviceDetail");

  return (
    <Section variant="muted" spacing="md">
      <Container>
        <SectionHeader title={t("whyChooseUs")} />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="p-5 bg-surface rounded-[var(--radius-md)] border border-border"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <Star className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="heading-5 text-text-primary mb-1">
                    {benefit.title}
                  </h3>
                  <p className="body-sm text-text-secondary">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ──────────────────────────────────────────────
   Representative Matters (NEW)
   ────────────────────────────────────────────── */

function RepresentativeMattersSection({ matters }: { matters: string[] }) {
  const t = useTranslations("serviceDetail");

  return (
    <Section variant="light" spacing="md">
      <Container>
        <SectionHeader title={t("representativeMatters")} />
        <p className="mt-2 body-sm text-text-tertiary italic">
          {t("representativeMattersNote")}
        </p>
        <ul className="mt-6 space-y-3">
          {matters.map((matter, i) => (
            <li
              key={i}
              className="flex items-start gap-3 p-4 bg-surface-alt rounded-[var(--radius-md)]"
            >
              <div className="flex-shrink-0 mt-0.5">
                <Briefcase className="w-5 h-5 text-gold" />
              </div>
              <span className="body-base text-text-primary">{matter}</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
