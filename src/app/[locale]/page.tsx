import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/hero";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { CompanyIntro } from "@/components/sections/company-intro";
import { PracticeAreas } from "@/components/sections/practice-areas";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { IndustriesServed } from "@/components/sections/industries-served";
import { TeamPreview } from "@/components/sections/team-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { LatestInsights } from "@/components/sections/latest-insights";
import { CTASection } from "@/components/sections/cta-section";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/schema";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "vi"
        ? "Lighthouse Law | Tư vấn Pháp lý - Sở hữu Trí tuệ - Đầu tư Kinh doanh"
        : "Lighthouse Law | Legal Consulting - Intellectual Property - Investment",
    description:
      locale === "vi"
        ? "Lighthouse Law cung cấp dịch vụ tư vấn pháp lý, sở hữu trí tuệ và tư vấn đầu tư kinh doanh chuyên nghiệp tại Việt Nam."
        : "Lighthouse Law provides professional legal consulting, intellectual property and investment advisory services in Vietnam.",
    alternates: {
      canonical: `/${locale}`,
      languages: { vi: "/vi", en: "/en" },
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <CompanyIntro />
      <PracticeAreas />
      <WhyChooseUs />
      <IndustriesServed />
      <TeamPreview />
      <Testimonials />
      <LatestInsights />
      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getOrganizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getWebSiteSchema()),
        }}
      />
    </>
  );
}
