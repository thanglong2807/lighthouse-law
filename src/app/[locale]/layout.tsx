import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { defaultSEO } from "@/config/seo";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingContactWidget } from "@/components/common/floating-contact";
import { StickyMobileCTA } from "@/components/common/sticky-mobile-cta";
import "@/app/globals.css";

export const metadata: Metadata = defaultSEO;

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <NextIntlClientProvider messages={messages}>
          {/* Skip to content */}
          <a href="#main-content" className="skip-to-content">
            {locale === "vi" ? "Chuyển đến nội dung chính" : "Skip to main content"}
          </a>

          <Header />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer />
          <FloatingContactWidget />
          <StickyMobileCTA />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
