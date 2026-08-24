import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { articles } from "@/content/articles";
import { ArrowRight, Clock, User } from "lucide-react";

const articleKeys = ["1", "2", "3"] as const;

export function LatestInsights() {
  const t = useTranslations("insights");

  return (
    <Section variant="muted" spacing="lg">
      <Container>
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
          <SectionHeader
            label={t("sectionLabel")}
            title={t("heading")}
            description={t("description")}
          />
          <Button variant="outlineDark" size="md" asChild className="flex-shrink-0">
            <Link href="/insights">
              {t("viewAll")}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articleKeys.map((key, index) => (
            <article
              key={key}
              className="group bg-surface rounded-[var(--radius-md)] border border-border overflow-hidden hover:shadow-[var(--shadow-md)] transition-shadow duration-300"
            >
              <div className="aspect-[16/9] bg-charcoal relative overflow-hidden">
                <Image
                  src={articles[index]?.image ?? ""}
                  alt={t(`items.${key}.title`)}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-gold/90 text-charcoal text-[10px] font-semibold uppercase tracking-wider rounded-[var(--radius-sm)] z-10">
                  {t(`items.${key}.category`)}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-3 text-xs text-text-tertiary">
                  <span>{t(`items.${key}.date`)}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {t(`items.${key}.readTime`)} {t("minRead")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="heading-4 text-text-primary mb-2 group-hover:text-gold-dark transition-colors line-clamp-2">
                  {t(`items.${key}.title`)}
                </h3>

                {/* Excerpt */}
                <p className="body-sm text-text-secondary line-clamp-2 mb-4">
                  {t(`items.${key}.excerpt`)}
                </p>

                {/* Author + Read more */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="flex items-center gap-1.5 text-xs text-text-tertiary">
                    <User className="w-3 h-3" />
                    {t(`items.${key}.author`)}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-gold-dark group-hover:text-gold transition-colors">
                    {t("readMore")}
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
