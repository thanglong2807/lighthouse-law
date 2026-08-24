"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/layout";
import { Section, SectionHeader, Reveal } from "@/components/layout/section";

const whyChooseItems = [
  "strategicThinking",
  "experiencedProfessionals",
  "clearCommunication",
  "confidentiality",
  "clientFocused",
  "longTermSupport",
] as const;

export function WhyChooseUs() {
  const t = useTranslations("whyChoose");

  return (
    <Section variant="dark" spacing="lg">
      <Container>
        <Reveal>
          <div className="text-center mb-14">
            <SectionHeader
              label={t("sectionLabel")}
              title={t("heading")}
              description={t("description")}
              align="center"
              dark
            />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseItems.map((key, index) => (
            <Reveal key={key} delay={index * 0.05}>
              <div className="group p-6 rounded-[var(--radius-md)] border border-white/[0.06] bg-white/[0.02] hover:border-gold/20 hover:bg-white/[0.04] transition-all duration-300">
                {/* Number */}
                <span className="text-xs font-mono text-gold/60 mb-4 block">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="heading-4 text-[#F0EDE6] mb-3">
                  {t(`items.${key}.title`)}
                </h3>

                <p className="body-sm text-white/50 leading-relaxed">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
