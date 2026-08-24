import { z } from "zod";

export const articleFormSchema = z.object({
  id: z.string().min(1),
  slug: z
    .string()
    .min(3)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug chỉ được chứa chữ thường, số và dấu gạch ngang"),
  locale: z.enum(["vi", "en"]),
  title: z.string().min(5),
  excerpt: z.string().min(20),
  content: z.string().min(1),
  category: z.string().min(1),
  contentType: z.enum([
    "article",
    "legal-update",
    "guide",
    "checklist",
    "publication",
    "case-commentary",
  ]),
  publishedAt: z.string().min(1),
  readingTime: z.coerce.number().int().positive(),
  authorName: z.string().min(2),
  authorSlug: z.string().min(1),
  featuredImage: z.string().min(1),
  tags: z.array(z.string()).default([]),
  practiceAreas: z.array(z.string()).default([]),
  relatedServiceSlugs: z.array(z.string()).default([]),
  seoTitle: z.string().min(5),
  seoDescription: z.string().min(20),
  seoKeywords: z.string().optional().default(""),
  canonical: z.string().min(1),
  ogImage: z.string().optional().default(""),
  status: z.enum(["draft", "published"]).default("published"),
});

export type ArticleFormValues = z.infer<typeof articleFormSchema>;
