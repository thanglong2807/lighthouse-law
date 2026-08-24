import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "./container";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const footerServices = [
  { key: "legalConsultation", href: "/services/tu-van-phap-ly" },
  { key: "intellectualProperty", href: "/services/so-huu-tri-tue" },
  { key: "investmentBusiness", href: "/services/dau-tu-kinh-doanh" },
  { key: "corporateLaw", href: "/services/luat-doanh-nghiep" },
  { key: "contractDrafting", href: "/services/soan-thao-hop-dong" },
  { key: "disputeResolution", href: "/services/giai-quyet-tranh-chap" },
];

const footerCompany = [
  { key: "company", href: "/company" },
  { key: "team", href: "/team" },
  { key: "offices", href: "/offices" },
  { key: "careers", href: "/careers" },
  { key: "contact", href: "/contact" },
];

const footerResources = [
  { key: "insights", href: "/insights" },
  { key: "forClients", href: "/for-clients" },
  { key: "faq", href: "/faq" },
  { key: "consultation", href: "/consultation" },
];

const footerLegal = [
  { key: "privacyPolicy", href: "/privacy-policy" },
  { key: "termsOfUse", href: "/terms-of-use" },
];

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  return (
    <footer className="bg-charcoal text-white/50" role="contentinfo">
      {/* CTA Band */}
      <div className="border-b border-white/[0.06]">
        <Container>
          <div className="py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="overline text-gold mb-2">{t("ctaLabel")}</p>
              <p className="heading-2 text-[#F0EDE6]">{t("ctaTitle")}</p>
            </div>
            <Button variant="primary" size="lg" href="/consultation">
              {t("ctaButton")}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </div>

      {/* Main Footer */}
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-gold-metallic font-heading text-xl tracking-[0.04em] mb-4 inline-block">
              Lighthouse Law
            </span>
            <p className="text-sm leading-relaxed text-white/40 max-w-xs mb-6">
              {t("description")}
            </p>
            <div className="flex items-center gap-4">
              {siteConfig.social.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 rounded-full text-white/30 hover:text-gold-light hover:bg-white/5 transition-colors"
                  aria-label={social.label}
                >
                  {social.platform === "linkedin" ? (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M4.5 3A1.5 1.5 0 003 4.5 1.5 1.5 0 004.5 6 1.5 1.5 0 006 4.5 1.5 1.5 0 004.5 3zM3 8h3v9H3V8zm5.5 0H11v1.2h.04c.35-.66 1.2-1.35 2.46-1.35C16.15 7.85 17 9.27 17 11.5V17h-3v-4.85c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.88 1.27-1.88 2.57V17H8.5V8z" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 1.5a8.5 8.5 0 00-1.33 16.9v-5.97H6.67V10h2v-1.84c0-1.97 1.17-3.06 2.97-3.06.86 0 1.76.15 1.76.15v1.93h-1c-.97 0-1.28.6-1.28 1.22V10h2.18l-.35 2.43h-1.83v5.97A8.5 8.5 0 0010 1.5z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="overline text-gold-pale mb-5">{t("colServices")}</h4>
            <ul className="space-y-0">
              {footerServices.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="inline-block py-2 text-[13px] text-white/45 hover:text-gold-light transition-colors"
                  >
                    {t(`services.${item.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="overline text-gold-pale mb-5">{t("colCompany")}</h4>
            <ul className="space-y-0">
              {footerCompany.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="inline-block py-2 text-[13px] text-white/45 hover:text-gold-light transition-colors"
                  >
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="overline text-gold-pale mb-5">{t("colResources")}</h4>
            <ul className="space-y-0">
              {footerResources.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="inline-block py-2 text-[13px] text-white/45 hover:text-gold-light transition-colors"
                  >
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
              {footerLegal.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    className="inline-block py-2 text-[13px] text-white/45 hover:text-gold-light transition-colors"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px]">
          <span>{t("copyright", { year: new Date().getFullYear() })}</span>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="inline-block py-2 hover:text-gold-light transition-colors">
              {t("privacyPolicy")}
            </Link>
            <Link href="/terms-of-use" className="inline-block py-2 hover:text-gold-light transition-colors">
              {t("termsOfUse")}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
