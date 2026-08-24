import type { Locale, SEOData } from "./common";

export interface ServiceScopeItem {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  slug: string;
  locale: Locale;
  title: string;
  eyebrow: string;
  heroDescription: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  commonSituations: string[];
  legalChallenges: string[];
  scopeOfServices: ServiceScopeItem[];
  process: ServiceProcessStep[];
  benefits: string[];
  representativeMatters: string[];
  faqs: ServiceFAQ[];
  relatedServiceSlugs: string[];
  seo: SEOData;
  heroImage: string;
  icon: string;
  audiences: string[];
  keyTopics: string[];
}
