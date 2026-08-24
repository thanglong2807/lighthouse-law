export type Locale = "vi" | "en";

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  structuredData?: Record<string, unknown>;
}

export interface NavigationItem {
  label: string;
  href: string;
  locale?: Locale;
  isExternal?: boolean;
  icon?: string;
  description?: string;
  children?: NavigationItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface SocialLink {
  platform: "facebook" | "linkedin" | "youtube" | "twitter" | "zalo";
  url: string;
  label: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  mapUrl?: string;
}

export interface WorkingHours {
  weekdays: string;
  saturday: string;
  sunday: string;
  note?: string;
}
