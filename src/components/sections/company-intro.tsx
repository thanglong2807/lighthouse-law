"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout";
import { Section, Reveal } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Award, Heart, Lightbulb } from "lucide-react";

const values = [
  { key: "integrity", Icon: Scale },
  { key: "excellence", Icon: Award },
  { key: "empathy", Icon: Heart },
  { key: "innovation", Icon: Lightbulb },
] as const;

export function CompanyIntro() {
  const t = useTranslations("about");

  return (
    <Section variant="light" spacing="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Decorative visual */}
          <Reveal>
            <div className="relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden">
              <Image
                src="/images/office/law-office.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(26,26,26,0.3) 0%, transparent 50%)",
                }}
              />
            </div>
          </Reveal>

          {/* Right: Content */}
          <div>
            <Reveal>
              <p className="overline text-gold mb-3">{t("sectionLabel")}</p>
              <h2 className="heading-1 text-text-primary mb-5">
                {t("heading")}
              </h2>
              <div className="gold-divider mb-6" />
            </Reveal>

            <Reveal delay={0.1}>
              <p className="body-lg text-text-secondary mb-4">
                {t("description")}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="body-lg text-text-secondary mb-8">
                {t("description2")}
              </p>
            </Reveal>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map(({ key, Icon }, i) => (
                <Reveal key={key} delay={0.2 + i * 0.05}>
                  <div className="p-4 bg-surface-alt rounded-[var(--radius-md)] border border-border">
                    <Icon className="w-5 h-5 text-gold mb-3" />
                    <p className="text-sm font-medium text-text-primary mb-1">
                      {t(`values.${key}.title`)}
                    </p>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {t(`values.${key}.description`)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <Button variant="outlineDark" size="md" asChild>
                <Link href="/company">
                  {t("viewMore")}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

