import type { ContactInfo, Locale, SocialLink, WorkingHours } from "@/types/common";

export interface SiteConfig {
  name: string;
  shortName: string;
  defaultLocale: Locale;
  locales: readonly Locale[];
  domain: string;
  contact: ContactInfo;
  social: SocialLink[];
  workingHours: WorkingHours;
}

export const siteConfig: SiteConfig = {
  name: "Lighthouse Law",
  shortName: "LHL",
  defaultLocale: "vi",
  locales: ["vi", "en"] as const,
  // TODO: Replace with production domain
  domain: "https://lighthouselaw.vn",
  contact: {
    phone: "+84 28 1234 5678",
    email: "contact@lighthouselaw.vn",
    address: "Tang 12, Toa nha ABC, 123 Nguyen Hue, Quan 1, TP.HCM",
    mapUrl: "https://maps.google.com/?q=10.7769,106.7009",
  },
  social: [
    {
      platform: "linkedin",
      url: "https://linkedin.com/company/lighthouse-law",
      label: "LinkedIn",
    },
    {
      platform: "facebook",
      url: "https://facebook.com/lighthouselaw.vn",
      label: "Facebook",
    },
  ],
  workingHours: {
    weekdays: "08:00 - 17:30",
    saturday: "08:00 - 12:00",
    sunday: "Closed",
    note: "Appointments available outside regular hours upon request",
  },
};
