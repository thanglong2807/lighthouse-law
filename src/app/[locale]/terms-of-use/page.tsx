import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/common/page-hero";
import { Breadcrumb } from "@/components/common/breadcrumb";

interface TermsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: TermsPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "vi"
        ? "Điều khoản sử dụng"
        : "Terms of Use",
    description:
      locale === "vi"
        ? "Điều khoản và điều kiện sử dụng trang web và dịch vụ của Lighthouse Law."
        : "Terms and conditions for using Lighthouse Law's website and services.",
    alternates: {
      canonical: `/${locale}/terms-of-use`,
      languages: { vi: "/vi/terms-of-use", en: "/en/terms-of-use" },
    },
  };
}

export default async function TermsOfUsePage({ params }: TermsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <TermsOfUseContent />;
}

function TermsOfUseContent() {
  const locale = useLocale() as "vi" | "en";

  const breadcrumbItems = [
    { label: locale === "vi" ? "Trang chủ" : "Home", href: "/" },
    {
      label:
        locale === "vi" ? "Điều khoản sử dụng" : "Terms of Use",
    },
  ];

  const sections =
    locale === "vi"
      ? [
          {
            title: "1. Chấp nhận điều khoản",
            content:
              "Bằng việc truy cập và sử dụng trang web lighthouselaw.vn, bạn đồng ý tuân thủ các điều khoản và điều kiện sử dụng được quy định tại đây.",
          },
          {
            title: "2. Nội dung trang web",
            content:
              "Nội dung trên trang web chỉ mang tính chất thông tin chung và không thể thay thế cho tư vấn pháp lý chuyên nghiệp. Lighthouse Law không chịu trách nhiệm về việc bạn sử dụng thông tin trên trang web mà không có sự tư vấn trực tiếp từ luật sư.",
          },
          {
            title: "3. Sở hữu trí tuệ",
            content:
              "Tất cả nội dung trên trang web bao gồm văn bản, hình ảnh, logo, thiết kế đều thuộc sở hữu trí tuệ của Lighthouse Law. Nghiêm cấm sao chép, phân phối hoặc sử dụng mà không có sự đồng ý bằng văn bản.",
          },
          {
            title: "4. Giới hạn trách nhiệm",
            content:
              "Lighthouse Law không bảo đảm tính chính xác tuyệt đối của thông tin trên trang web và không chịu trách nhiệm về bất kỳ thiệt hại nào phát sinh từ việc sử dụng trang web.",
          },
          {
            title: "5. Liên kết bên ngoài",
            content:
              "Trang web có thể chứa liên kết đến trang web của bên thứ ba. Lighthouse Law không chịu trách nhiệm về nội dung hoặc chính sách bảo mật của các trang web đó.",
          },
          {
            title: "6. Luật áp dụng",
            content:
              "Các điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Mọi tranh chấp phát sinh sẽ được giải quyết tại tòa án có thẩm quyền tại TP. Hồ Chí Minh.",
          },
        ]
      : [
          {
            title: "1. Acceptance of Terms",
            content:
              "By accessing and using the lighthouselaw.vn website, you agree to comply with the terms and conditions set forth herein.",
          },
          {
            title: "2. Website Content",
            content:
              "The content on this website is for general informational purposes only and cannot substitute professional legal advice. Lighthouse Law is not responsible for your use of information on this website without direct consultation from an attorney.",
          },
          {
            title: "3. Intellectual Property",
            content:
              "All content on this website including text, images, logos, and design are the intellectual property of Lighthouse Law. Reproduction, distribution, or use without written consent is strictly prohibited.",
          },
          {
            title: "4. Limitation of Liability",
            content:
              "Lighthouse Law does not guarantee the absolute accuracy of information on this website and is not liable for any damages arising from the use of this website.",
          },
          {
            title: "5. External Links",
            content:
              "This website may contain links to third-party websites. Lighthouse Law is not responsible for the content or privacy policies of those websites.",
          },
          {
            title: "6. Governing Law",
            content:
              "These terms are governed by the laws of Vietnam. Any disputes arising shall be resolved at the competent court in Ho Chi Minh City.",
          },
        ];

  return (
    <>
      <PageHero
        eyebrow={locale === "vi" ? "Pháp lý" : "Legal"}
        title={
          locale === "vi" ? "Điều khoản sử dụng" : "Terms of Use"
        }
        description={
          locale === "vi"
            ? "Điều khoản và điều kiện sử dụng trang web Lighthouse Law."
            : "Terms and conditions for using the Lighthouse Law website."
        }
      >
        <div className="mt-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </PageHero>

      <Section variant="light" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="heading-3 text-text-primary mb-4">
                  {section.title}
                </h2>
                <p className="body-md text-text-secondary leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            <p className="text-sm text-text-secondary italic pt-8 border-t border-border">
              {locale === "vi"
                ? "Cập nhật lần cuối: Tháng 8, 2026"
                : "Last updated: August 2026"}
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
