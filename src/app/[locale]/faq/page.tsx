import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/common/page-hero";
import { Accordion } from "@/components/common/accordion";
import { CTASection } from "@/components/sections";
import { faqs, faqCategories, type FAQCategory } from "@/content/faqs";

interface FAQPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: FAQPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "vi"
        ? "Câu hỏi thường gặp"
        : "FAQ",
    description:
      locale === "vi"
        ? "Tìm câu trả lời cho những thắc mắc phổ biến về dịch vụ pháp lý của Lighthouse Law."
        : "Find answers to common questions about Lighthouse Law's legal services.",
  };
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <FAQPageContent />
      <CTASection />
    </>
  );
}

function FAQPageContent() {
  const t = useTranslations("faq");
  const locale = useLocale() as "vi" | "en";

  return (
    <>
      <PageHero
        eyebrow={locale === "vi" ? "Hỗ trợ" : "Support"}
        title={t("heading")}
        description={t("description")}
      />

      <Section variant="light" spacing="lg">
        <Container size="lg">
          {faqCategories.map((category) => {
            const categoryFaqs = faqs.filter((f) => f.category === category);
            if (categoryFaqs.length === 0) return null;

            return (
              <div key={category} className="mb-12 last:mb-0">
                <h2 className="heading-3 text-text-primary mb-2">
                  {t(`categories.${category}`)}
                </h2>
                <div className="w-12 h-px bg-gold/40 mb-6" />
                <Accordion
                  items={categoryFaqs.map((faq) => ({
                    question: faq.question[locale],
                    answer: faq.answer[locale],
                  }))}
                />
              </div>
            );
          })}
        </Container>
      </Section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question[locale],
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer[locale],
              },
            })),
          }),
        }}
      />
    </>
  );
}
