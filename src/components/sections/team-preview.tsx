import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout";
import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { lawyers } from "@/content/lawyers";
import { ArrowRight } from "lucide-react";

export function TeamPreview() {
  const t = useTranslations("team");

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
            <Link href="/team">
              {t("viewAll")}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lawyers.map((lawyer) => (
            <div
              key={lawyer.slug}
              className="group bg-surface rounded-[var(--radius-md)] border border-border overflow-hidden hover:shadow-[var(--shadow-md)] transition-shadow duration-300"
            >
              <div className="aspect-[3/4] bg-charcoal relative overflow-hidden">
                <Image
                  src={lawyer.image}
                  alt={t(`members.${lawyer.slug}.name`)}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="heading-4 text-text-primary mb-1">
                  {t(`members.${lawyer.slug}.name`)}
                </h3>
                <p className="text-sm font-medium text-gold-dark mb-2">
                  {t(`members.${lawyer.slug}.role`)}
                </p>
                <p className="text-xs text-text-tertiary">
                  {t(`members.${lawyer.slug}.areas`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
