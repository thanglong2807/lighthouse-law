import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/common/page-hero";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { ContactForm } from "@/components/forms/contact-form";
import { Shield, Clock, Users, CheckCircle } from "lucide-react";

interface ConsultationPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ConsultationPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "vi"
        ? "Đặt lịch tư vấn"
        : "Book a Consultation",
    description:
      locale === "vi"
        ? "Đặt lịch tư vấn pháp lý miễn phí với đội ngũ luật sư giàu kinh nghiệm của Lighthouse Law."
        : "Schedule a free legal consultation with Lighthouse Law's experienced attorneys.",
    alternates: {
      canonical: `/${locale}/consultation`,
      languages: { vi: "/vi/consultation", en: "/en/consultation" },
    },
  };
}

export default async function ConsultationPage({
  params,
}: ConsultationPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ConsultationPageContent />;
}

function ConsultationPageContent() {
  const t = useTranslations("consultation");
  const locale = useLocale() as "vi" | "en";

  const breadcrumbItems = [
    { label: locale === "vi" ? "Trang chủ" : "Home", href: "/" },
    { label: locale === "vi" ? "Đặt lịch tư vấn" : "Book a Consultation" },
  ];

  const benefits = [
    {
      icon: Shield,
      title: locale === "vi" ? "Bảo mật tuyệt đối" : "Complete Confidentiality",
      description:
        locale === "vi"
          ? "Mọi thông tin được bảo mật theo quy định luật sư - khách hàng"
          : "All information protected under attorney-client privilege",
    },
    {
      icon: Clock,
      title: locale === "vi" ? "Phản hồi nhanh" : "Fast Response",
      description:
        locale === "vi"
          ? "Phản hồi trong vòng 24 giờ làm việc"
          : "Response within 24 business hours",
    },
    {
      icon: Users,
      title: locale === "vi" ? "Đội ngũ chuyên gia" : "Expert Team",
      description:
        locale === "vi"
          ? "Luật sư giàu kinh nghiệm trong lĩnh vực bạn cần"
          : "Experienced attorneys in your area of need",
    },
    {
      icon: CheckCircle,
      title:
        locale === "vi"
          ? "Đánh giá miễn phí"
          : "Free Initial Assessment",
      description:
        locale === "vi"
          ? "Đánh giá sơ bộ vấn đề pháp lý miễn phí"
          : "Complimentary preliminary legal assessment",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={locale === "vi" ? "Tư vấn" : "Consultation"}
        title={t("heading")}
        description={t("description")}
      >
        <div className="mt-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </PageHero>

      <Section variant="light" spacing="lg">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="heading-3 text-text-primary mb-6">
                {locale === "vi"
                  ? "Gửi yêu cầu tư vấn"
                  : "Submit Your Consultation Request"}
              </h2>
              <ContactForm />
            </div>

            <div className="lg:col-span-2">
              <h2 className="heading-3 text-text-primary mb-6">
                {locale === "vi" ? "Tại sao chọn chúng tôi" : "Why Choose Us"}
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-[var(--radius-md)] bg-surface-alt"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="body-md text-text-primary font-semibold mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-text-secondary">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
