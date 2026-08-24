import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Phone } from "lucide-react";

export default function NotFoundPage() {
  const t = useTranslations("notFound");

  return (
    <section className="bg-charcoal min-h-[70vh] flex items-center">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          <p className="text-8xl font-heading text-gold/20 mb-6">404</p>
          <h1 className="heading-1 text-[#F0EDE6] mb-4">{t("heading")}</h1>
          <p className="body-lg text-white/50 mb-10">{t("description")}</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="primary" size="md" asChild>
              <Link href="/">
                <Home className="w-4 h-4" />
                {t("actions.goHome")}
              </Link>
            </Button>
            <Button variant="outline" size="md" asChild>
              <Link href="/services">{t("actions.goBack")}</Link>
            </Button>
            <Button variant="ghost" size="md" asChild>
              <Link href="/contact">
                <Phone className="w-4 h-4" />
                {t("actions.contactUs")}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
