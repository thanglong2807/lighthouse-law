import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { CompanyPageContent } from "./company-page-content";

interface CompanyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: CompanyPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "vi"
        ? "Giới thiệu"
        : "About",
    description:
      locale === "vi"
        ? "Tìm hiểu về Lighthouse Law - Công ty luật uy tín cung cấp dịch vụ tư vấn pháp lý chuyên nghiệp tại Việt Nam."
        : "Learn about Lighthouse Law - A trusted law firm providing professional legal advisory services in Vietnam.",
    alternates: {
      canonical: "/company",
      languages: { vi: "/vi/company", en: "/en/company" },
    },
  };
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CompanyPageContent />;
}
