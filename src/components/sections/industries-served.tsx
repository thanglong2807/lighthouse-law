import { useTranslations } from "next-intl";
import { Container } from "@/components/layout";
import { Section, SectionHeader } from "@/components/layout/section";

const industryKeys = [
  "technology",
  "manufacturing",
  "construction",
  "realEstate",
  "banking",
  "retail",
  "hospitality",
  "logistics",
  "healthcare",
  "education",
] as const;

export function IndustriesServed() {
  const t = useTranslations("industries");

  return (
    <Section variant="light" spacing="md">
      <Container>
        <div className="text-center mb-12">
          <SectionHeader
            label={t("sectionLabel")}
            title={t("heading")}
            description={t("description")}
            align="center"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {industryKeys.map((key) => (
            <span
              key={key}
              className="inline-flex items-center px-5 py-2.5 rounded-[var(--radius-full)] border border-border text-sm text-text-secondary hover:border-gold/40 hover:text-gold-dark transition-colors duration-200"
            >
              {t(`list.${key}`)}
            </span>
          ))}
        </div>
      </Container>
    </Section>
  );
}
