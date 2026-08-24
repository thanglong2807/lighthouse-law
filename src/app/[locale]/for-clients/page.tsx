import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/common/page-hero";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections";
import {
  FileText,
  Shield,
  Phone,
  BookOpen,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

interface ForClientsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ForClientsPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      locale === "vi"
        ? "Dành cho khách hàng"
        : "For Clients",
    description:
      locale === "vi"
        ? "Tài liệu, hướng dẫn và nguồn lực hữu ích dành cho khách hàng của Lighthouse Law."
        : "Resources, guides, and useful materials for Lighthouse Law clients.",
    alternates: {
      canonical: `/${locale}/for-clients`,
      languages: { vi: "/vi/for-clients", en: "/en/for-clients" },
    },
  };
}

export default async function ForClientsPage({ params }: ForClientsPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ForClientsContent />
      <CTASection />
    </>
  );
}

function ForClientsContent() {
  const locale = useLocale() as "vi" | "en";

  const breadcrumbItems = [
    { label: locale === "vi" ? "Trang chủ" : "Home", href: "/" },
    {
      label: locale === "vi" ? "Dành cho khách hàng" : "For Clients",
    },
  ];

  const resources = [
    {
      icon: FileText,
      title: locale === "vi" ? "Tài liệu chuẩn bị" : "Preparation Documents",
      description:
        locale === "vi"
          ? "Danh sách tài liệu cần chuẩn bị cho buổi tư vấn đầu tiên"
          : "Checklist of documents to prepare for your first consultation",
      href: "/consultation",
    },
    {
      icon: Shield,
      title: locale === "vi" ? "Quyền của bạn" : "Your Rights",
      description:
        locale === "vi"
          ? "Tìm hiểu về quyền lợi của bạn trong mối quan hệ luật sư - khách hàng"
          : "Understand your rights in the attorney-client relationship",
      href: "/privacy-policy",
    },
    {
      icon: BookOpen,
      title: locale === "vi" ? "Bài viết pháp lý" : "Legal Insights",
      description:
        locale === "vi"
          ? "Các bài viết phân tích và cập nhật pháp luật mới nhất"
          : "Analysis articles and latest legal updates",
      href: "/insights",
    },
    {
      icon: HelpCircle,
      title: locale === "vi" ? "Câu hỏi thường gặp" : "FAQ",
      description:
        locale === "vi"
          ? "Giải đáp những thắc mắc phổ biến về dịch vụ của chúng tôi"
          : "Answers to common questions about our services",
      href: "/faq",
    },
    {
      icon: Phone,
      title: locale === "vi" ? "Liên hệ hỗ trợ" : "Contact Support",
      description:
        locale === "vi"
          ? "Liên hệ đội ngũ hỗ trợ khách hàng của Lighthouse Law"
          : "Reach out to the Lighthouse Law client support team",
      href: "/contact",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={locale === "vi" ? "Khách hàng" : "Clients"}
        title={
          locale === "vi"
            ? "Dành cho khách hàng"
            : "For Our Clients"
        }
        description={
          locale === "vi"
            ? "Tài liệu, hướng dẫn và nguồn lực hữu ích giúp bạn trong hành trình pháp lý."
            : "Resources, guides, and helpful materials for your legal journey."
        }
      >
        <div className="mt-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </PageHero>

      <Section variant="light" spacing="lg">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, i) => (
              <div
                key={i}
                className="bg-surface rounded-[var(--radius-md)] border border-border p-6 hover:border-gold/30 transition-all hover:shadow-md group"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                  <resource.icon className="w-6 h-6 text-gold" />
                </div>
                <h2 className="heading-4 text-text-primary mb-2">
                  {resource.title}
                </h2>
                <p className="body-sm text-text-secondary mb-4">
                  {resource.description}
                </p>
                <Button variant="link" size="sm" asChild>
                  <Link href={resource.href}>
                    {locale === "vi" ? "Tìm hiểu thêm" : "Learn More"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
