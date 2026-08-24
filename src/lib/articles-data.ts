import "server-only";

import type { ArticleData } from "@/content/articles";
import { getDraftArticles } from "@/lib/articles-store";

export async function getAllArticles(): Promise<ArticleData[]> {
  const drafts = await getDraftArticles();
  const draftArticles: ArticleData[] = drafts.map((draft: (typeof drafts)[number]) => ({
    id: draft.id,
    slug: draft.slug,
    title: { vi: draft.title, en: draft.title },
    excerpt: { vi: draft.excerpt, en: draft.excerpt },
    image: draft.featuredImage,
    category: draft.category,
    author: draft.authorName,
    authorSlug: draft.authorSlug,
    publishedAt: draft.publishedAt,
    readingTime: draft.readingTime,
    content: { vi: draft.content, en: draft.content },
    seo: {
      title: { vi: draft.seo.title, en: draft.seo.title },
      description: { vi: draft.seo.description, en: draft.seo.description },
      keywords: draft.seo.keywords,
    },
  }));

  return draftArticles.sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)
  );
}
