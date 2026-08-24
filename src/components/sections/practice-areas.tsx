import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout";
import { Section, SectionHeader } from "@/components/layout/section";
import { ArrowRight } from "lucide-react";

const serviceSlugs = [
  "tu-van-phap-ly",
  "so-huu-tri-tue",
  "dau-tu-kinh-doanh",
  "luat-doanh-nghiep",
  "luat-bat-dong-san",
  "luat-dan-su",
  "luat-hinh-su",
  "luat-hon-nhan-gia-dinh",
  "luat-lao-dong",
  "luat-thue",
  "soan-thao-hop-dong",
  "giai-quyet-tranh-chap",
] as const;

export function PracticeAreas() {
  const t = useTranslations("services");

  return (
    <Section variant="muted" spacing="lg">
      <Container>
        <div className="text-center mb-14">
          <SectionHeader
            label={t("sectionLabel")}
            title={t("sectionTitle")}
            description={t("sectionDescription")}
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceSlugs.map((slug, index) => (
            <Link
              key={slug}
              href={`/services/${slug}`}
              className="group relative p-6 bg-surface rounded-[var(--radius-md)] border border-border hover:border-gold/30 transition-all duration-300 hover:shadow-[var(--shadow-md)]"
            >
              {/* Number */}
              <span className="text-xs font-mono text-text-tertiary mb-4 block">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="heading-4 text-text-primary mb-2 group-hover:text-gold-dark transition-colors">
                {t(`items.${slug}.title`)}
              </h3>

              {/* Short description */}
              <p className="body-sm text-text-secondary mb-4 line-clamp-2">
                {t(`items.${slug}.short`)}
              </p>

              {/* Arrow link */}
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gold-dark group-hover:text-gold transition-colors">
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
