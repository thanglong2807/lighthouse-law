import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections";
import { articles, getArticleBySlug } from "@/content/articles";
import { siteConfig } from "@/config/site";
import { getAllArticles } from "@/lib/articles-data";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

interface ArticlePageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const allArticles = await getAllArticles();
  return allArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = (await getAllArticles()).find((a) => a.slug === slug);

  if (!article) return {};

  const loc = locale as "vi" | "en";
  return {
    title: article.title[loc],
    description: article.excerpt[loc],
    alternates: {
      canonical: `/${locale}/insights/${slug}`,
      languages: {
        vi: `/vi/insights/${slug}`,
        en: `/en/insights/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: article.title[loc],
      description: article.excerpt[loc],
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = (await getAllArticles()).find((a) => a.slug === slug);
  if (!article && !getArticleBySlug(slug)) notFound();

  return (
    <>
      <ArticlePageContent slug={slug} locale={locale as "vi" | "en"} />
      <CTASection />
    </>
  );
}

async function ArticlePageContent({ slug, locale }: { slug: string; locale: "vi" | "en" }) {
  const article = (await getAllArticles()).find((a) => a.slug === slug) || getArticleBySlug(slug);
  if (!article) return null;

  const breadcrumbItems = [
    { label: locale === "vi" ? "Trang chủ" : "Home", href: "/" },
    { label: locale === "vi" ? "Bài viết" : "Insights", href: "/insights" },
    { label: article.title[locale] },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title[locale],
    description: article.excerpt[locale],
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author,
      url: `${siteConfig.domain}/${locale}/team/${article.authorSlug}`,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    mainEntityOfPage: `${siteConfig.domain}/${locale}/insights/${slug}`,
    inLanguage: locale,
  };

  return (
    <>
      <section className="bg-charcoal pt-32 pb-16 md:pt-36 md:pb-20">
        <Container>
          <Breadcrumb items={breadcrumbItems} className="mb-8" />

          <div className="max-w-3xl">
            <h1 className="display-lg text-[#F0EDE6] mb-6">
              {article.title[locale]}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <Link
                  href={`/team/${article.authorSlug}`}
                  className="hover:text-gold transition-colors"
                >
                  {article.author}
                </Link>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(article.publishedAt).toLocaleDateString(
                  locale === "vi" ? "vi-VN" : "en-US",
                  { year: "numeric", month: "long", day: "numeric" }
                )}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readingTime} {locale === "vi" ? "phút đọc" : "min read"}
              </span>
            </div>
          </div>
        </Container>
      </section>

      <Section variant="light" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="relative aspect-[16/9] rounded-[var(--radius-lg)] overflow-hidden mb-10 -mt-10">
              <Image
                src={article.image}
                alt={article.title[locale]}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="body-lg text-text-secondary leading-relaxed">
                {article.excerpt[locale]}
              </p>
              <div
                className="article-content mt-8"
                dangerouslySetInnerHTML={{
                  __html: article.content ? article.content[locale] : "",
                }}
              />
              <div className="mt-8 p-6 bg-surface-alt rounded-[var(--radius-md)] border border-border">
                <p className="body-sm text-text-secondary italic">
                  {locale === "vi"
                    ? "Nội dung đầy đủ của bài viết sẽ được cập nhật sớm. Vui lòng quay lại sau hoặc liên hệ với chúng tôi để được tư vấn trực tiếp."
                    : "Full article content will be updated soon. Please check back later or contact us for direct consultation."}
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <Button variant="outline" size="md" asChild>
                <Link href="/insights">
                  <ArrowLeft className="w-4 h-4" />
                  {locale === "vi" ? "Quay lại bài viết" : "Back to Insights"}
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
