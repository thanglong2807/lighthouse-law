"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/layout";
import { Section, SectionHeader, Reveal } from "@/components/layout/section";
import { Quote } from "lucide-react";

const testimonialKeys = ["1", "2", "3"] as const;

const testimonialAvatars: Record<string, string> = {
  "1": "/images/team/pham-minh-d.jpg",
  "2": "/images/team/hoang-thi-e.jpg",
  "3": "/images/team/vo-van-f.jpg",
};

export function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <Section variant="light" spacing="lg">
      <Container>
        <Reveal>
          <div className="text-center mb-14">
            <SectionHeader
              label={t("sectionLabel")}
              title={t("heading")}
              description={t("description")}
              align="center"
            />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialKeys.map((key, index) => (
            <Reveal key={key} delay={index * 0.1}>
              <div className="relative p-6 bg-surface-alt rounded-[var(--radius-md)] border border-border h-full flex flex-col">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-gold/20 mb-4 flex-shrink-0" />

                {/* Quote text */}
                <p className="body-sm text-text-secondary leading-relaxed mb-6 flex-1">
                  {t(`items.${key}.quote`)}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-[var(--radius-full)] bg-charcoal relative overflow-hidden flex-shrink-0">
                    <Image
                      src={testimonialAvatars[key]}
                      alt={t(`items.${key}.author`)}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">
                      {t(`items.${key}.author`)}
                    </p>
                    <p className="text-xs text-text-tertiary">
                      {t(`items.${key}.role`)}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
