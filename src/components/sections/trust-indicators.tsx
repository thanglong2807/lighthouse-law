import { useTranslations } from "next-intl";
import { Container } from "@/components/layout";
import { Shield, Lock, Target, Handshake } from "lucide-react";

const trustItems = [
  { key: "professionalAdvice", Icon: Shield },
  { key: "confidentialService", Icon: Lock },
  { key: "practicalSolutions", Icon: Target },
  { key: "longTermPartnership", Icon: Handshake },
] as const;

export function TrustIndicators() {
  const t = useTranslations("trustIndicators");

  return (
    <section className="bg-charcoal-mid py-8 md:py-10 border-t border-white/[0.06] border-b border-b-white/[0.06]">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustItems.map(({ key, Icon }) => (
            <div
              key={key}
              className="flex items-start gap-4 py-3"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-[var(--radius-md)] bg-gold/10">
                <Icon className="w-[18px] h-[18px] text-gold" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#F0EDE6] mb-1">
                  {t(`items.${key}.title`)}
                </p>
                <p className="text-xs text-white/40 leading-relaxed">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
