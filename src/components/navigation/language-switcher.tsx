"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/types/common";

const localeLabels: Record<Locale, string> = {
  vi: "VI",
  en: "EN",
};

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const otherLocale: Locale = locale === "vi" ? "en" : "vi";

  function switchLocale() {
    router.replace(pathname, { locale: otherLocale });
  }

  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-1.5 text-[12px] font-semibold tracking-wide text-white/60 hover:text-gold-light transition-colors"
      aria-label={`Switch to ${otherLocale === "vi" ? "Vietnamese" : "English"}`}
    >
      <span className="text-gold-light">{localeLabels[locale]}</span>
      <span className="text-white/30">/</span>
      <span>{localeLabels[otherLocale]}</span>
    </button>
  );
}
