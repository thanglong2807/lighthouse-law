import "server-only";

import { getContactCount } from "@/lib/contacts-store";
import { getDraftArticles, type DraftArticleInput } from "@/lib/articles-store";

export async function getAdminSummary() {
  const articles = await getDraftArticles();
  return {
    articles: articles.length,
    publishedArticles: articles.filter((article: { status: "published" | "draft" }) => article.status === "published").length,
    drafts: articles.filter((article: { status: "published" | "draft" }) => article.status === "draft").length,
    contacts: getContactCount(),
  };
}

export async function getAdminArticleOverview(): Promise<Array<{
  id: string;
  slug: string;
  title: string;
  status: "published" | "draft";
  publishedAt: string;
  contentLength: number;
  missing: string[];
}>> {
  const articles = await getDraftArticles();
  return articles.map((article: DraftArticleInput) => ({
    id: article.id,
    slug: article.slug,
    title: article.title,
    status: article.status,
    publishedAt: article.publishedAt,
    contentLength: article.content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().length,
    missing: [
      article.content.replace(/<[^>]*>/g, " ").trim().length < 300 ? "Nội dung ngắn" : "",
      !article.seo.primaryKeyword ? "Từ khóa chính" : "",
      !article.seo.secondaryKeywords?.length ? "Từ khóa phụ" : "",
      !article.seo.description || article.seo.description.length < 50 ? "Meta description" : "",
      !article.seo.ogImage ? "OG image" : "",
      !article.seo.schemaJson ? "Schema" : "",
    ].filter(Boolean),
  }));
}
