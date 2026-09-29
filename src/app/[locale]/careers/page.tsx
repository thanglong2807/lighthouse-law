import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/common/page-hero";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { CTASection } from "@/components/sections";
import { Briefcase, Heart, TrendingUp, Users } from "lucide-react";
import { applyPageSeo } from "@/lib/page-seo-store";

interface CareersPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: CareersPageProps): Promise<Metadata> {
  const { locale } = await params;
  return applyPageSeo("/careers", locale as "vi" | "en", {
    title:
      locale === "vi"
        ? "Tuyển dụng"
        : "Careers",
    description:
      locale === "vi"
        ? "Tham gia đội ngũ Lighthouse Law. Khám phá cơ hội nghề nghiệp trong lĩnh vực pháp lý."
        : "Join the Lighthouse Law team. Explore career opportunities in the legal field.",
    alternates: {
      canonical: `/${locale}/careers`,
      languages: { vi: "/vi/careers", en: "/en/careers" },
    },
  });
}

export default async function CareersPage({ params }: CareersPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <CareersPageContent />
      <CTASection />
    </>
  );
}

function CareersPageContent() {
  const t = useTranslations("careers");
  const locale = useLocale() as "vi" | "en";

  const breadcrumbItems = [
    { label: locale === "vi" ? "Trang chủ" : "Home", href: "/" },
    { label: locale === "vi" ? "Tuyển dụng" : "Careers" },
  ];

  const perks = [
    {
      icon: TrendingUp,
      title: locale === "vi" ? "Phát triển sự nghiệp" : "Career Growth",
      description:
        locale === "vi"
          ? "Cơ hội thăng tiến rõ ràng và đào tạo chuyên sâu liên tục"
          : "Clear advancement paths and continuous professional development",
    },
    {
      icon: Users,
      title: locale === "vi" ? "Đội ngũ xuất sắc" : "Outstanding Team",
      description:
        locale === "vi"
          ? "Làm việc cùng các luật sư hàng đầu trong nhiều lĩnh vực"
          : "Work alongside top attorneys across diverse practice areas",
    },
    {
      icon: Heart,
      title: locale === "vi" ? "Cân bằng cuộc sống" : "Work-Life Balance",
      description:
        locale === "vi"
          ? "Chế độ phúc lợi hấp dẫn và môi trường làm việc linh hoạt"
          : "Competitive benefits and flexible working environment",
    },
    {
      icon: Briefcase,
      title: locale === "vi" ? "Vụ việc đa dạng" : "Diverse Cases",
      description:
        locale === "vi"
          ? "Tiếp xúc với nhiều loại vụ việc pháp lý khác nhau"
          : "Exposure to a wide variety of legal matters and clients",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("sectionLabel")}
        title={t("heading")}
        description={t("description")}
      >
        <div className="mt-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </PageHero>

      <Section variant="light" spacing="lg">
        <Container size="lg">
          <h2 className="heading-2 text-text-primary mb-3 text-center">
            {locale === "vi"
              ? "Tại sao gia nhập Lighthouse Law?"
              : "Why Join Lighthouse Law?"}
          </h2>
          <p className="body-lg text-text-secondary text-center max-w-2xl mx-auto mb-12">
            {locale === "vi"
              ? "Chúng tôi tin rằng đội ngũ xuất sắc là nền tảng của dịch vụ pháp lý hàng đầu."
              : "We believe an outstanding team is the foundation of premier legal services."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {perks.map((perk, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-[var(--radius-md)] bg-surface-alt border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <perk.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="heading-4 text-text-primary mb-2">
                    {perk.title}
                  </h3>
                  <p className="body-sm text-text-secondary">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center p-12 bg-charcoal rounded-[var(--radius-md)]">
            <h2 className="heading-3 text-[#F0EDE6] mb-4">
              {locale === "vi"
                ? "Vị trí đang tuyển"
                : "Open Positions"}
            </h2>
            <p className="body-md text-white/50 mb-6">
              {locale === "vi"
                ? "Hiện tại chúng tôi chưa có vị trí tuyển dụng mới. Vui lòng gửi hồ sơ ứng tuyển đến email của chúng tôi để được xem xét cho các vị trí trong tương lai."
                : "We don't have open positions at this time. Please send your resume to our email for consideration for future opportunities."}
            </p>
            <a
              href="mailto:careers@lighthouselaw.vn"
              className="inline-flex items-center gap-2 text-gold hover:underline font-medium"
            >
              careers@lighthouselaw.vn
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
