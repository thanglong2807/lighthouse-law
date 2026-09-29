import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

interface ThankYouPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ThankYouPageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === "vi" ? "Yêu cầu đã được gửi" : "Request received",
    description:
      locale === "vi"
        ? "Chúng tôi đã nhận được yêu cầu tư vấn của bạn và sẽ phản hồi trong vòng 24 giờ làm việc."
        : "We have received your consultation request and will respond within 24 business hours.",
    robots: { index: false, follow: false },
  };
}

export default async function ThankYouPage({
  params,
}: ThankYouPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ThankYouPageContent />;
}

function ThankYouPageContent() {
  const t = useTranslations("consultation");
  const locale = useLocale();

  return (
    <Section variant="light" spacing="lg">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="overline text-gold mb-4">
            {locale === "vi" ? "ĐÃ GỬI THÀNH CÔNG" : "SUBMITTED"}
          </p>
          <h1 className="display-lg text-text-primary mb-5">
            {locale === "vi" ? "Cảm ơn bạn đã liên hệ" : "Thank you for reaching out"}
          </h1>
          <p className="body-lg text-text-secondary mb-8">
            {locale === "vi"
              ? "Yêu cầu của bạn đã được chuyển tới đội ngũ luật sư. Chúng tôi sẽ xem xét và phản hồi trong vòng 24 giờ làm việc."
              : "Your request has been sent to our legal team. We will review it and respond within 24 business hours."}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary" size="lg" asChild>
              <Link href="/consultation">
                {locale === "vi" ? "Gửi yêu cầu khác" : "Send another request"}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                <Phone className="w-4 h-4" />
                {locale === "vi" ? "Liên hệ ngay" : "Contact us"}
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 text-left">
            <div className="rounded-[var(--radius-md)] border border-border bg-surface p-5">
              <p className="text-sm font-semibold text-text-primary mb-2">
                {locale === "vi" ? "Phản hồi nhanh" : "Fast response"}
              </p>
              <p className="text-sm text-text-secondary">
                {locale === "vi"
                  ? "Chúng tôi thường phản hồi trong vòng 24 giờ làm việc."
                  : "We usually respond within 24 business hours."}
              </p>
            </div>
            <div className="rounded-[var(--radius-md)] border border-border bg-surface p-5">
              <p className="text-sm font-semibold text-text-primary mb-2">
                {locale === "vi" ? "Kênh hỗ trợ" : "Support channels"}
              </p>
              <p className="text-sm text-text-secondary mb-3">
                {siteConfig.contact.phone}
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-gold"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
