import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/common/page-hero";
import { Breadcrumb } from "@/components/common/breadcrumb";

interface PrivacyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === "vi" ? "Chính sách bảo mật" : "Privacy Policy",
    description:
      locale === "vi"
        ? "Chính sách bảo mật của Lighthouse Law về việc thu thập, sử dụng, lưu trữ và bảo vệ thông tin cá nhân."
        : "Lighthouse Law's privacy policy describing how we collect, use, store, and protect personal information.",
    alternates: {
      canonical: `/${locale}/privacy-policy`,
      languages: { vi: "/vi/privacy-policy", en: "/en/privacy-policy" },
    },
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPolicyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PrivacyPolicyContent locale={locale as "vi" | "en"} />;
}

function PrivacyPolicyContent({ locale }: { locale: "vi" | "en" }) {
  const breadcrumbItems = [
    { label: locale === "vi" ? "Trang chủ" : "Home", href: "/" },
    { label: locale === "vi" ? "Chính sách bảo mật" : "Privacy Policy" },
  ];

  const sections =
    locale === "vi"
      ? [
          {
            title: "1. Phạm vi áp dụng",
            content:
              "Chính sách này áp dụng cho toàn bộ thông tin cá nhân mà Lighthouse Law thu thập thông qua website, biểu mẫu liên hệ, email, cuộc gọi, cuộc hẹn tư vấn và các kênh liên lạc hợp pháp khác.",
          },
          {
            title: "2. Thông tin chúng tôi thu thập",
            content:
              "Chúng tôi có thể thu thập họ tên, số điện thoại, email, tên công ty, nội dung yêu cầu tư vấn, tài liệu đính kèm, lịch hẹn và các thông tin khác bạn chủ động cung cấp khi sử dụng dịch vụ của chúng tôi.",
          },
          {
            title: "3. Mục đích sử dụng",
            content:
              "Thông tin được sử dụng để liên hệ với bạn, cung cấp dịch vụ pháp lý, soạn thảo và thực hiện tư vấn, quản lý hồ sơ khách hàng, cải thiện chất lượng dịch vụ và tuân thủ nghĩa vụ pháp lý theo quy định.",
          },
          {
            title: "4. Bảo mật và lưu trữ",
            content:
              "Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức phù hợp để bảo vệ dữ liệu khỏi truy cập trái phép, mất mát, sửa đổi hoặc tiết lộ không được phép. Thông tin được lưu trữ trong thời gian cần thiết cho mục đích cung cấp dịch vụ hoặc theo yêu cầu pháp luật.",
          },
          {
            title: "5. Chia sẻ thông tin",
            content:
              "Chúng tôi không bán hoặc cho thuê thông tin cá nhân. Việc chia sẻ chỉ xảy ra khi có sự đồng ý của bạn, khi cần thiết để cung cấp dịch vụ pháp lý, hoặc khi pháp luật yêu cầu.",
          },
          {
            title: "6. Quyền của bạn",
            content:
              "Bạn có quyền yêu cầu truy cập, cập nhật, chỉnh sửa hoặc xóa thông tin cá nhân trong phạm vi pháp luật cho phép; đồng thời có thể phản đối hoặc hạn chế việc xử lý dữ liệu trong một số trường hợp nhất định.",
          },
          {
            title: "7. Cookie và dữ liệu kỹ thuật",
            content:
              "Website có thể sử dụng cookie và công cụ phân tích cơ bản để cải thiện trải nghiệm người dùng, đo lường hiệu suất và hỗ trợ bảo mật. Bạn có thể điều chỉnh trình duyệt để từ chối cookie nếu muốn.",
          },
          {
            title: "8. Liên hệ",
            content:
              "Nếu bạn có câu hỏi về chính sách bảo mật hoặc muốn thực hiện quyền của mình, vui lòng liên hệ qua email contact@lighthouselaw.vn hoặc số điện thoại +84 28 1234 5678.",
          },
        ]
      : [
          {
            title: "1. Scope",
            content:
              "This policy applies to all personal information collected by Lighthouse Law through the website, contact forms, email, phone calls, consultation appointments, and other lawful communication channels.",
          },
          {
            title: "2. Information We Collect",
            content:
              "We may collect your full name, phone number, email address, company name, consultation request details, attachments, appointment information, and other information you voluntarily provide when using our services.",
          },
          {
            title: "3. How We Use Information",
            content:
              "We use information to contact you, provide legal services, prepare and deliver advice, manage client matters, improve service quality, and comply with applicable legal obligations.",
          },
          {
            title: "4. Security and Storage",
            content:
              "We implement appropriate technical and organizational measures to protect data from unauthorized access, loss, alteration, or unlawful disclosure. Information is retained only as long as necessary for service delivery or as required by law.",
          },
          {
            title: "5. Sharing of Information",
            content:
              "We do not sell or rent personal information. Sharing occurs only with your consent, when necessary to deliver legal services, or when required by law.",
          },
          {
            title: "6. Your Rights",
            content:
              "You may request access to, update, correct, or delete your personal information to the extent permitted by law. You may also object to or restrict processing in certain circumstances.",
          },
          {
            title: "7. Cookies and Technical Data",
            content:
              "The website may use cookies and basic analytics tools to improve user experience, measure performance, and support security. You can adjust your browser settings to refuse cookies if you prefer.",
          },
          {
            title: "8. Contact",
            content:
              "If you have questions about this privacy policy or wish to exercise your rights, please contact us at contact@lighthouselaw.vn or +84 28 1234 5678.",
          },
        ];

  return (
    <>
      <PageHero
        eyebrow={locale === "vi" ? "Pháp lý" : "Legal"}
        title={locale === "vi" ? "Chính sách bảo mật" : "Privacy Policy"}
        description={
          locale === "vi"
            ? "Cam kết minh bạch về cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn."
            : "A clear overview of how we collect, use, and protect your information."
        }
      >
        <div className="mt-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </PageHero>

      <Section variant="light" spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="heading-3 text-text-primary mb-4">{section.title}</h2>
                <p className="body-md text-text-secondary leading-relaxed">{section.content}</p>
              </div>
            ))}

            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="text-sm text-text-secondary leading-relaxed">
                {locale === "vi"
                  ? "Cập nhật lần cuối: 13/08/2026"
                  : "Last updated: August 13, 2026"}
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
