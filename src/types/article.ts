import type { Locale, SEOData } from "./common";
import type { Lawyer } from "./lawyer";

export type ArticleContentType =
  | "article"
  | "legal-update"
  | "guide"
  | "checklist"
  | "publication"
  | "case-commentary";

export interface ArticleAuthor {
  id: Lawyer["id"];
  slug: Lawyer["slug"];
  fullName: Lawyer["fullName"];
  position: Lawyer["position"];
  portrait: Lawyer["portrait"];
}

export interface Article {
  id: string;
  slug: string;
  locale: Locale;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  contentType: ArticleContentType;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  author: ArticleAuthor;
  featuredImage: string;
  tags: string[];
  practiceAreas: string[];
  relatedServiceSlugs: string[];
  seo: SEOData;
  status?: "draft" | "published";
}
