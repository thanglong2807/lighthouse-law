import { useLocale, useTranslations } from "next-intl";
import { Container } from "@/components/layout";
import { Section, SectionHeader } from "@/components/layout/section";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    slug: "/consultation",
    titleVi: "Tư vấn đầu tư và thành lập doanh nghiệp",
    titleEn: "Investment and business formation advisory",
    descVi: "Hỗ trợ nhà đầu tư hoàn thiện hồ sơ, cấu trúc pháp lý và thủ tục triển khai tại Việt Nam.",
    descEn: "Supporting investors with filings, legal structure, and launch procedures in Vietnam.",
  },
  {
    slug: "/services/soan-thao-hop-dong",
    titleVi: "Rà soát và đàm phán hợp đồng",
    titleEn: "Contract review and negotiation",
    descVi: "Phân tích điều khoản rủi ro, đề xuất sửa đổi và đồng hành trong giai đoạn thương lượng.",
    descEn: "Reviewing risk clauses, proposing edits, and supporting negotiation.",
  },
  {
    slug: "/services/giai-quyet-tranh-chap",
    titleVi: "Xử lý tranh chấp thương mại",
    titleEn: "Commercial dispute resolution",
    descVi: "Đánh giá hồ sơ, lựa chọn chiến lược và bảo vệ quyền lợi trong quá trình giải quyết tranh chấp.",
    descEn: "Assessing records, choosing a strategy, and protecting interests during dispute resolution.",
  },
] as const;

export function CaseStudies() {
  const t = useTranslations("caseStudies");
  const locale = useLocale();

  return (
    <Section variant="muted" spacing="lg">
      <Container>
        <SectionHeader
          label={locale === "vi" ? "Vụ việc tiêu biểu" : "Case Studies"}
          title={locale === "vi" ? "Một số vụ việc tiêu biểu" : "Selected case studies"}
          description={
            locale === "vi"
              ? "Những tình huống thực tế giúp khách hàng hình dung cách chúng tôi xử lý vấn đề pháp lý."
              : "Real-world matters that show how we approach legal problems."
          }
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((item) => (
            <Link
              key={item.titleVi}
              href={item.slug}
              className="group p-6 rounded-[var(--radius-md)] border border-border bg-surface hover:border-gold/30 transition-all duration-300 hover:shadow-[var(--shadow-md)]"
            >
              <p className="text-xs font-mono text-text-tertiary mb-3 tracking-[0.12em]">
                {locale === "vi" ? "VỤ VIỆC TIÊU BIỂU" : "CASE STUDY"}
              </p>
              <h3 className="text-[1.05rem] font-semibold leading-snug text-text-primary mb-2 font-sans group-hover:text-gold-dark transition-colors">
                {locale === "vi" ? item.titleVi : item.titleEn}
              </h3>
              <p className="text-sm leading-6 text-text-secondary mb-4">
                {locale === "vi" ? item.descVi : item.descEn}
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gold-dark group-hover:text-gold transition-colors">
                {locale === "vi" ? "Xem chi tiết" : "View details"}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
