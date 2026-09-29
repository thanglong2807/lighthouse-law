import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { lawyers } from "@/content/lawyers";
import { getAllArticles } from "@/lib/articles-data";

const baseUrl = siteConfig.domain;

const servicesSlugs = [
  "tu-van-phap-ly",
  "so-huu-tri-tue",
  "dau-tu-kinh-doanh",
  "luat-doanh-nghiep",
  "luat-bat-dong-san",
  "luat-dan-su",
  "luat-hinh-su",
  "luat-hon-nhan-gia-dinh",
  "luat-lao-dong",
  "luat-thue",
  "soan-thao-hop-dong",
  "giai-quyet-tranh-chap",
];

const lawyerSlugs = lawyers.map((lawyer) => lawyer.slug);

const staticPages = [
  "",
  "/company",
  "/services",
  "/team",
  "/offices",
  "/insights",
  "/contact",
  "/consultation",
  "/faq",
  "/careers",
  "/for-clients",
  "/privacy-policy",
  "/terms-of-use",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of staticPages) {
    entries.push({
      url: `${baseUrl}/vi${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1.0 : page === "/services" ? 0.9 : 0.7,
      alternates: {
        languages: {
          vi: `${baseUrl}/vi${page}`,
          en: `${baseUrl}/en${page}`,
          "x-default": `${baseUrl}/vi${page}`,
        },
      },
    });
  }

  for (const slug of servicesSlugs) {
    entries.push({
      url: `${baseUrl}/vi/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          vi: `${baseUrl}/vi/services/${slug}`,
          en: `${baseUrl}/en/services/${slug}`,
          "x-default": `${baseUrl}/vi/services/${slug}`,
        },
      },
    });
  }

  for (const slug of lawyerSlugs) {
    entries.push({
      url: `${baseUrl}/vi/team/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          vi: `${baseUrl}/vi/team/${slug}`,
          en: `${baseUrl}/en/team/${slug}`,
          "x-default": `${baseUrl}/vi/team/${slug}`,
        },
      },
    });
  }

  const allArticles = await getAllArticles();
  for (const article of allArticles) {
    entries.push({
      url: `${baseUrl}/vi/insights/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          vi: `${baseUrl}/vi/insights/${article.slug}`,
          en: `${baseUrl}/en/insights/${article.slug}`,
          "x-default": `${baseUrl}/vi/insights/${article.slug}`,
        },
      },
    });
  }

  return entries;
}
