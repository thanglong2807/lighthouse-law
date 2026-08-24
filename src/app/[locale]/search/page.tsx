import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/common/page-hero";
import { Search, ArrowRight } from "lucide-react";
import { getAllArticles } from "@/lib/articles-data";
import { articles as staticArticles } from "@/content/articles";
import { lawyers } from "@/content/lawyers";
import { services } from "@/content/services";

interface SearchPageProps {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ q?: string }>;
}

export async function generateMetadata({
  params,
}: SearchPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "vi" ? "Tìm kiếm" : "Search",
    robots: { index: false, follow: true },
  };
}

export default async function SearchPage({ params, searchParams }: SearchPageProps) {
  const { locale } = await params;
  const query = (searchParams ? (await searchParams).q : "")?.trim() ?? "";
  setRequestLocale(locale);

  return <SearchPageContent locale={locale as "vi" | "en"} query={query} />;
}

async function SearchPageContent({
  locale,
  query,
}: {
  locale: "vi" | "en";
  query: string;
}) {
  const dbArticles = await getAllArticles();
  const allArticles = [...staticArticles, ...dbArticles].filter(
    (article, index, self) => self.findIndex((a) => a.slug === article.slug) === index
  );

  const articleMatches = !query
    ? allArticles
    : allArticles.filter((article) => {
        const haystack = [article.title[locale], article.excerpt[locale], article.category, article.author]
          .join(" ")
          .toLowerCase();
        return haystack.includes(query.toLowerCase());
      });

  const lawyerMatches = !query
    ? lawyers
    : lawyers.filter((lawyer) => {
        const haystack = [
          lawyer.name[locale],
          lawyer.position[locale],
          lawyer.practiceAreas[locale].join(" "),
          lawyer.biography[locale],
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(query.toLowerCase());
      });

  const serviceMatches = !query
    ? services
    : services.filter((service) => {
        const haystack = [
          service.title[locale],
          service.eyebrow[locale],
          service.heroDescription[locale],
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(query.toLowerCase());
      });

  return (
    <>
      <PageHero
        eyebrow={locale === "vi" ? "Tìm kiếm" : "Search"}
        title={locale === "vi" ? "Tìm kiếm trên trang web" : "Search Our Website"}
        description={
          locale === "vi"
            ? "Tìm bài viết, dịch vụ và thành viên đội ngũ nhanh hơn."
            : "Find articles, services, and team members faster."
        }
      />

      <Section variant="light" spacing="lg">
        <Container>
          <div className="max-w-4xl mx-auto space-y-10">
            <form className="rounded-2xl border border-border bg-surface p-4 shadow-sm">
              <label className="flex items-center gap-3">
                <Search className="h-5 w-5 text-gold" />
                <input
                  name="q"
                  defaultValue={query}
                  placeholder={locale === "vi" ? "Nhập từ khóa..." : "Type a keyword..."}
                  className="w-full bg-transparent text-text-primary outline-none placeholder:text-text-tertiary"
                />
              </label>
            </form>

            <ResultBlock
              title={locale === "vi" ? "Bài viết" : "Articles"}
              items={articleMatches.map((item) => ({
                href: `/insights/${item.slug}`,
                title: item.title[locale],
                description: item.excerpt[locale],
              }))}
              emptyLabel={locale === "vi" ? "Không có bài viết phù hợp." : "No matching articles."}
            />

            <ResultBlock
              title={locale === "vi" ? "Dịch vụ" : "Services"}
              items={serviceMatches.map((item) => ({
                href: `/services/${item.slug}`,
                title: item.title[locale],
                description: item.heroDescription[locale],
              }))}
              emptyLabel={locale === "vi" ? "Không có dịch vụ phù hợp." : "No matching services."}
            />

            <ResultBlock
              title={locale === "vi" ? "Đội ngũ" : "Team"}
              items={lawyerMatches.map((item) => ({
                href: `/team/${item.slug}`,
                title: item.name[locale],
                description: item.position[locale],
              }))}
              emptyLabel={locale === "vi" ? "Không có thành viên phù hợp." : "No matching team members."}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}

function ResultBlock({
  title,
  items,
  emptyLabel,
}: {
  title: string;
  items: { href: string; title: string; description: string }[];
  emptyLabel: string;
}) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="heading-3 text-text-primary">{title}</h2>
      </div>
      <div className="space-y-3">
        {items.length ? (
          items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-gold/30 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="heading-4 text-text-primary group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 body-sm text-text-secondary">{item.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-gold opacity-60 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-border p-6 text-sm text-text-secondary">
            {emptyLabel}
          </div>
        )}
      </div>
    </section>
  );
}
