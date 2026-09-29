import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/common/page-hero";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { CTASection } from "@/components/sections";
import { getAllArticles } from "@/lib/articles-data";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { applyPageSeo } from "@/lib/page-seo-store";

interface InsightsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: InsightsPageProps): Promise<Metadata> {
  const { locale } = await params;
  return applyPageSeo("/insights", locale as "vi" | "en", {
    title: locale === "vi" ? "Bài viết & Tin tức" : "Insights & News",
    description:
      locale === "vi"
        ? "Cập nhật tin tức pháp luật và phân tích chuyên sâu từ đội ngũ luật sư Lighthouse Law."
        : "Legal news updates and in-depth analysis from the Lighthouse Law team.",
    alternates: {
      canonical: `/${locale}/insights`,
      languages: { vi: "/vi/insights", en: "/en/insights" },
    },
  });
}

export default async function InsightsPage({ params }: InsightsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <InsightsPageContent locale={locale as "vi" | "en"} />
      <CTASection />
    </>
  );
}

async function InsightsPageContent({ locale }: { locale: "vi" | "en" }) {
  const articles = await getAllArticles();

  const breadcrumbItems = [
    { label: locale === "vi" ? "Trang chủ" : "Home", href: "/" },
    { label: locale === "vi" ? "Bài viết" : "Insights" },
  ];

  const categoryLabels: Record<string, { vi: string; en: string }> = {
    corporate: { vi: "Luật doanh nghiệp", en: "Corporate Law" },
    ip: { vi: "Sở hữu trí tuệ", en: "Intellectual Property" },
    dispute: { vi: "Tranh chấp", en: "Dispute Resolution" },
    investment: { vi: "Đầu tư", en: "Investment" },
    tax: { vi: "Thuế", en: "Tax" },
    labor: { vi: "Lao động", en: "Labor" },
    realestate: { vi: "Bất động sản", en: "Real Estate" },
  };

  return (
    <>
      <PageHero
        eyebrow={locale === "vi" ? "Bài viết" : "Insights"}
        title={locale === "vi" ? "Bài viết & Tin tức" : "Insights & News"}
        description={
          locale === "vi"
            ? "Cập nhật tin tức pháp luật và phân tích chuyên sâu từ đội ngũ luật sư của chúng tôi."
            : "Legal news updates and expert analysis from our legal team."
        }
      >
        <div className="mt-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </PageHero>

      <Section variant="light" spacing="lg">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/insights/${article.slug}`}
                className="group block bg-surface rounded-[var(--radius-md)] border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                <div className="aspect-[16/9] bg-charcoal relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <span className="inline-block text-xs font-medium text-gold bg-gold/10 px-2.5 py-0.5 rounded-full mb-3">
                    {categoryLabels[article.category]?.[locale] ??
                      article.category}
                  </span>

                  <h2 className="heading-4 text-text-primary group-hover:text-gold transition-colors mb-3 line-clamp-2">
                    {article.title[locale]}
                  </h2>

                  <p className="body-sm text-text-secondary mb-4 line-clamp-3">
                    {article.excerpt[locale]}
                  </p>

                  <div className="flex items-center justify-between text-xs text-text-secondary">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(article.publishedAt).toLocaleDateString(
                          locale === "vi" ? "vi-VN" : "en-US",
                          { year: "numeric", month: "short", day: "numeric" }
                        )}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readingTime} {locale === "vi" ? "phút đọc" : "min read"}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
