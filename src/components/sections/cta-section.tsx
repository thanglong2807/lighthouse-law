import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CTASection() {
  const t = useTranslations("cta");

  return (
    <section className="relative bg-charcoal py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="overline text-gold mb-4">{t("label")}</p>

          <h2 className="display-lg text-[#F0EDE6] mb-6">
            {t("heading")}
          </h2>

          <p className="body-lg text-white/50 mb-10 max-w-lg mx-auto">
            {t("description")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="lg" asChild>
              <Link href="/consultation">
                {t("primaryCta")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                <Phone className="w-4 h-4" />
                {t("secondaryCta")}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
