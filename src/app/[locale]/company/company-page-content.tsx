"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Container } from "@/components/layout";
import { Section, SectionHeader, Reveal } from "@/components/layout/section";
import { CTASection } from "@/components/sections/cta-section";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import {
  Shield,
  Award,
  Handshake,
  Lightbulb,
  Lock,
  Users,
  Search,
  AlertTriangle,
  FileText,
  Zap,
  HeadphonesIcon,
} from "lucide-react";

const i18n = {
  pageHero: {
    en: {
      description:
        "A trusted Vietnamese law firm dedicated to protecting your rights and building your future through strategic legal counsel.",
    },
    vi: {
      description:
        "Công ty luật Việt Nam uy tín, tận tâm bảo vệ quyền lợi và xây dựng tương lai của bạn thông qua tư vấn pháp lý chiến lược.",
    },
  },
  mission: {
    en: {
      label: "Our Purpose",
      missionTitle: "Our Mission",
      missionText:
        "To deliver high-quality, accessible legal services that protect and empower every individual and business we serve. We combine deep expertise with a genuine commitment to our clients' success.",
      visionTitle: "Our Vision",
      visionText:
        "To be recognized as a leading Vietnamese law firm known for integrity, innovation, and unwavering dedication to client outcomes across all areas of legal practice.",
    },
    vi: {
      label: "Mục tiêu của chúng tôi",
      missionTitle: "Sứ mệnh",
      missionText:
        "Cung cấp dịch vụ pháp lý chất lượng cao, dễ tiếp cận nhằm bảo vệ và hỗ trợ mọi cá nhân và doanh nghiệp mà chúng tôi phục vụ. Chúng tôi kết hợp chuyên môn sâu rộng với cam kết chân thành đối với thành công của khách hàng.",
      visionTitle: "Tầm nhìn",
      visionText:
        "Trở thành công ty luật Việt Nam hàng đầu được công nhận về sự chính trực, đổi mới và sự tận tâm không ngừng đối với kết quả của khách hàng trong mọi lĩnh vực hành nghề pháp lý.",
    },
  },
  values: {
    en: {
      label: "Core Values",
      title: "The Principles That Guide Us",
      description: "Our core values define how we serve our clients and conduct our practice.",
      items: [
        { title: "Integrity", description: "We uphold honesty, transparency, and ethical standards in every engagement and interaction." },
        { title: "Excellence", description: "We pursue the highest quality of legal service, continuously improving our knowledge and capabilities." },
        { title: "Commitment", description: "We are fully dedicated to achieving the best possible outcomes for every client we represent." },
        { title: "Innovation", description: "We apply modern methods and creative thinking to navigate complex legal challenges effectively." },
        { title: "Confidentiality", description: "We protect client information with absolute discretion and the highest standards of data security." },
        { title: "Partnership", description: "We build long-term relationships founded on mutual trust, open communication, and shared goals." },
      ],
    },
    vi: {
      label: "Giá trị cốt lõi",
      title: "Nguyên tắc dẫn dắt chúng tôi",
      description: "Các giá trị cốt lõi định hình cách chúng tôi phục vụ khách hàng và thực hành nghề.",
      items: [
        { title: "Chính trực", description: "Chúng tôi đề cao sự trung thực, minh bạch và chuẩn mực đạo đức trong mọi hoạt động và tương tác." },
        { title: "Xuất sắc", description: "Chúng tôi theo đuổi chất lượng dịch vụ pháp lý cao nhất, không ngừng nâng cao kiến thức và năng lực." },
        { title: "Cam kết", description: "Chúng tôi hoàn toàn tận tâm đạt được kết quả tốt nhất có thể cho mỗi khách hàng mà chúng tôi đại diện." },
        { title: "Đổi mới", description: "Chúng tôi áp dụng phương pháp hiện đại và tư duy sáng tạo để giải quyết hiệu quả các thách thức pháp lý phức tạp." },
        { title: "Bảo mật", description: "Chúng tôi bảo vệ thông tin khách hàng với sự kín đáo tuyệt đối và tiêu chuẩn an toàn dữ liệu cao nhất." },
        { title: "Đối tác", description: "Chúng tôi xây dựng mối quan hệ lâu dài dựa trên sự tin tưởng, giao tiếp cởi mở và mục tiêu chung." },
      ],
    },
  },
  process: {
    en: {
      label: "How We Work",
      title: "Our Working Process",
      description: "A structured, client-centered approach that ensures clarity and results at every stage.",
      steps: [
        { title: "Understand the Client", description: "We begin by listening carefully to your situation, goals, and concerns to fully understand your legal needs." },
        { title: "Assess Legal Risks", description: "Our team conducts a thorough analysis of the legal landscape, identifying potential risks and opportunities." },
        { title: "Develop a Strategy", description: "We craft a tailored legal strategy that aligns with your objectives and provides a clear path forward." },
        { title: "Execute the Solution", description: "We implement the strategy with precision, keeping you informed and involved throughout the process." },
        { title: "Provide Ongoing Support", description: "Our relationship continues beyond the immediate matter, offering continued counsel and proactive guidance." },
      ],
    },
    vi: {
      label: "Cách chúng tôi làm việc",
      title: "Quy trình làm việc",
      description: "Phương pháp tiếp cận có cấu trúc, lấy khách hàng làm trung tâm, đảm bảo sự rõ ràng và kết quả ở mọi giai đoạn.",
      steps: [
        { title: "Thấu hiểu khách hàng", description: "Chúng tôi bắt đầu bằng việc lắng nghe kỹ lưỡng tình huống, mục tiêu và mối quan tâm của bạn để hiểu đầy đủ nhu cầu pháp lý." },
        { title: "Đánh giá rủi ro pháp lý", description: "Đội ngũ của chúng tôi tiến hành phân tích toàn diện về bối cảnh pháp lý, xác định các rủi ro và cơ hội tiềm ẩn." },
        { title: "Xây dựng chiến lược", description: "Chúng tôi xây dựng chiến lược pháp lý phù hợp với mục tiêu của bạn và cung cấp lộ trình rõ ràng." },
        { title: "Thực hiện giải pháp", description: "Chúng tôi triển khai chiến lược một cách chính xác, giữ cho bạn được thông tin và tham gia trong suốt quá trình." },
        { title: "Hỗ trợ liên tục", description: "Mối quan hệ của chúng tôi tiếp tục vượt ra ngoài vấn đề trước mắt, cung cấp tư vấn và hướng dẫn chủ động." },
      ],
    },
  },
  stats: {
    en: {
      label: "Why Clients Choose Us",
      title: "What We Stand For",
      items: [
        { value: "18+", label: "Years of Experience" },
        { value: "240+", label: "Clients Served" },
        { value: "12+", label: "Practice Areas" },
        { value: "96%", label: "Success Rate" },
      ],
    },
    vi: {
      label: "Vì sao khách hàng chọn chúng tôi",
      title: "Những giá trị chúng tôi mang lại",
      items: [
        { value: "18+", label: "NĂM KINH NGHIỆM" },
        { value: "240+", label: "KHÁCH HÀNG PHỤC VỤ" },
        { value: "12+", label: "LĨNH VỰC HÀNH NGHỀ" },
        { value: "96%", label: "TỈ LỆ THÀNH CÔNG" },
      ],
    },
  },
};

const valueIcons = [Shield, Award, Handshake, Lightbulb, Lock, Users];
const processIcons = [Search, AlertTriangle, FileText, Zap, HeadphonesIcon];

export function CompanyPageContent() {
  const t = useTranslations("about");
  const locale = useLocale() as "en" | "vi";

  return (
    <>
      <section className="relative bg-charcoal py-24 md:py-32 lg:py-40 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(212,175,55,0.07) 0%, transparent 70%)",
          }}
        />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <p className="overline text-gold mb-4">{t("sectionLabel")}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="display-lg text-[#F0EDE6] mb-6">{t("heading")}</h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="body-lg text-white/60 max-w-2xl">
                {i18n.pageHero[locale].description}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <Section variant="light" spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Reveal>
                <p className="overline text-gold mb-3">{t("sectionLabel")}</p>
                <h2 className="heading-1 text-text-primary mb-5">{t("heading")}</h2>
                <div className="gold-divider mb-6" />
              </Reveal>
              <Reveal delay={0.1}>
                <p className="body-lg text-text-secondary mb-4">{t("description")}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="body-lg text-text-secondary">{t("description2")}</p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/3] bg-charcoal rounded-[var(--radius-lg)] overflow-hidden">
                <Image
                  src="/images/office/team-meeting.jpg"
                  alt={locale === "vi" ? "Đội ngũ Lighthouse Law" : "Lighthouse Law Team"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="lg">
        <Container>
          <Reveal>
            <div className="text-center mb-14">
              <SectionHeader
                label={i18n.mission[locale].label}
                title={locale === "vi" ? "Sứ mệnh & Tầm nhìn" : "Mission & Vision"}
                align="center"
              />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.05}>
              <div className="h-full p-8 md:p-10 bg-surface rounded-[var(--radius-lg)] border border-border">
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-gold/10 flex items-center justify-center mb-6">
                  <Shield className="w-5 h-5 text-gold" />
                </div>
                <h3 className="heading-3 text-text-primary mb-4">{i18n.mission[locale].missionTitle}</h3>
                <p className="body-md text-text-secondary leading-relaxed">{i18n.mission[locale].missionText}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full p-8 md:p-10 bg-surface rounded-[var(--radius-lg)] border border-border">
                <div className="w-10 h-10 rounded-[var(--radius-md)] bg-gold/10 flex items-center justify-center mb-6">
                  <Lightbulb className="w-5 h-5 text-gold" />
                </div>
                <h3 className="heading-3 text-text-primary mb-4">{i18n.mission[locale].visionTitle}</h3>
                <p className="body-md text-text-secondary leading-relaxed">{i18n.mission[locale].visionText}</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section variant="light" spacing="lg">
        <Container>
          <Reveal>
            <div className="text-center mb-14">
              <SectionHeader
                label={i18n.values[locale].label}
                title={i18n.values[locale].title}
                description={i18n.values[locale].description}
                align="center"
              />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {i18n.values[locale].items.map((item, index) => {
              const Icon = valueIcons[index];
              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="group h-full p-6 rounded-[var(--radius-md)] border border-border bg-surface hover:border-gold/30 hover:shadow-sm transition-all duration-300">
                    <div className="w-10 h-10 rounded-[var(--radius-md)] bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <h3 className="heading-4 text-text-primary mb-2">{item.title}</h3>
                    <p className="body-sm text-text-secondary leading-relaxed">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section variant="muted" spacing="lg">
        <Container>
          <Reveal>
            <div className="text-center mb-14">
              <SectionHeader
                label={i18n.process[locale].label}
                title={i18n.process[locale].title}
                description={i18n.process[locale].description}
                align="center"
              />
            </div>
          </Reveal>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-[23px] top-4 bottom-4 w-px bg-border md:left-[27px]" />
              <div className="space-y-8">
                {i18n.process[locale].steps.map((step, index) => {
                  const Icon = processIcons[index];
                  return (
                    <Reveal key={step.title} delay={index * 0.08}>
                      <div className="relative flex gap-6 md:gap-8">
                        <div className="relative z-10 flex-shrink-0">
                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-gold/40 bg-surface flex items-center justify-center">
                            <span className="text-sm font-semibold text-gold">{String(index + 1).padStart(2, "0")}</span>
                          </div>
                        </div>
                        <div className="pt-2 pb-2">
                          <div className="flex items-center gap-3 mb-2">
                            <Icon className="w-4 h-4 text-gold/70" />
                            <h3 className="heading-4 text-text-primary">{step.title}</h3>
                          </div>
                          <p className="body-sm text-text-secondary leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <section className="relative bg-charcoal py-20 md:py-24 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)",
          }}
        />
        <Container className="relative z-10">
          <Reveal>
            <div className="text-center mb-14">
              <SectionHeader label={i18n.stats[locale].label} title={i18n.stats[locale].title} align="center" dark />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {i18n.stats[locale].items.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08}>
                <div className="text-center">
                  <p className="display-lg text-gold-metallic mb-2">{stat.value}</p>
                  <p className="body-sm text-white/50 uppercase tracking-wider">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <WhyChooseUs />
      <CTASection />
    </>
  );
}
