import type { Metadata } from "next";

import { siteConfig } from "./site";

// TODO: Replace with actual verification codes when available
const GOOGLE_VERIFICATION = "";
const BING_VERIFICATION = "";

export const defaultSEO: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `${siteConfig.name} - Hãng Luật Uy Tín Tại Việt Nam`,
  },
  description:
    "Lighthouse Law cung cấp dịch vụ pháp lý chuyên nghiệp trong lĩnh vực doanh nghiệp, đầu tư, bất động sản, sở hữu trí tuệ và giải quyết tranh chấp tại Việt Nam.",
  metadataBase: new URL(siteConfig.domain),
  alternates: {
    canonical: "/",
    languages: {
      vi: "/vi",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: "en_US",
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Hãng Luật Uy Tín Tại Việt Nam`,
    description:
      "Lighthouse Law cung cấp dịch vụ pháp lý chuyên nghiệp trong lĩnh vực doanh nghiệp, đầu tư, bất động sản, sở hữu trí tuệ và giải quyết tranh chấp tại Việt Nam.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lighthouse Law - Hãng Luật Uy Tín",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Hãng Luật Uy Tín Tại Việt Nam`,
    description:
      "Lighthouse Law cung cấp dịch vụ pháp lý chuyên nghiệp trong lĩnh vực doanh nghiệp, đầu tư, bất động sản, sở hữu trí tuệ và giải quyết tranh chấp tại Việt Nam.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: GOOGLE_VERIFICATION,
    other: {
      "msvalidate.01": BING_VERIFICATION,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "theme-color": "#00112D",
    "color-scheme": "light",
    "format-detection": "telephone=no",
  },
};
