import "server-only";

import Database from "better-sqlite3";
import { mkdirSync, existsSync } from "fs";
import path from "path";
import { z } from "zod";
import { articles as staticArticles } from "@/content/articles";
import { siteConfig } from "@/config/site";

const draftArticleSchema = z.object({
  id: z.string(),
  slug: z.string(),
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
  publishedAt: z.string(),
  readingTime: z.number().int().positive(),
  authorName: z.string().min(2),
  authorSlug: z.string().min(1),
  featuredImage: z.string().min(1),
  tags: z.array(z.string()).default([]),
  practiceAreas: z.array(z.string()).default([]),
  relatedServiceSlugs: z.array(z.string()).default([]),
  seo: z.object({
    title: z.string().min(5),
    description: z.string().min(20),
    primaryKeyword: z.string().default(""),
    secondaryKeywords: z.array(z.string()).default([]),
    keywords: z.array(z.string()).default([]),
    canonical: z.string().min(1),
    ogTitle: z.string().optional(),
    ogDescription: z.string().optional(),
    ogImage: z.string().optional(),
    robots: z.string().default("index,follow"),
    schemaJson: z.string().optional(),
  }),
  status: z.enum(["draft", "published"]).default("published"),
});

export type DraftArticleInput = z.infer<typeof draftArticleSchema>;

const dbDir = path.join(process.cwd(), "data");
const dbFile = path.join(dbDir, "articles.sqlite");
const seedFlag = path.join(dbDir, ".articles-seeded");

function getDb() {
  mkdirSync(dbDir, { recursive: true });
  const db = new Database(dbFile);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS articles (
      id TEXT PRIMARY KEY,
      slug TEXT NOT NULL UNIQUE,
      locale TEXT NOT NULL,
      title TEXT NOT NULL,
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      category TEXT NOT NULL,
      contentType TEXT NOT NULL,
      publishedAt TEXT NOT NULL,
      readingTime INTEGER NOT NULL,
      authorName TEXT NOT NULL,
      authorSlug TEXT NOT NULL,
      featuredImage TEXT NOT NULL,
      tags TEXT NOT NULL,
      practiceAreas TEXT NOT NULL,
      relatedServiceSlugs TEXT NOT NULL,
      seoTitle TEXT NOT NULL,
      seoDescription TEXT NOT NULL,
      seoKeywords TEXT NOT NULL,
      canonical TEXT NOT NULL,
      ogImage TEXT,
      primaryKeyword TEXT NOT NULL DEFAULT '',
      secondaryKeywords TEXT NOT NULL DEFAULT '[]',
      ogTitle TEXT,
      ogDescription TEXT,
      robots TEXT NOT NULL DEFAULT 'index,follow',
      schemaJson TEXT,
      status TEXT NOT NULL,
      createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);
  const columns = db.prepare("PRAGMA table_info(articles)").all() as { name: string }[];
  const existing = new Set(columns.map((column) => column.name));
  const migrations: [string, string][] = [
    ["primaryKeyword", "TEXT NOT NULL DEFAULT ''"],
    ["secondaryKeywords", "TEXT NOT NULL DEFAULT '[]'"],
    ["ogTitle", "TEXT"],
    ["ogDescription", "TEXT"],
    ["robots", "TEXT NOT NULL DEFAULT 'index,follow'"],
    ["schemaJson", "TEXT"],
  ];
  for (const [name, definition] of migrations) {
    if (!existing.has(name)) db.exec(`ALTER TABLE articles ADD COLUMN ${name} ${definition}`);
  }
  return db;
}

function mapRow(row: any): DraftArticleInput {
  return draftArticleSchema.parse({
    id: row.id,
    slug: row.slug,
    locale: row.locale,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content,
    category: row.category,
    contentType: row.contentType,
    publishedAt: row.publishedAt,
    readingTime: Number(row.readingTime),
    authorName: row.authorName,
    authorSlug: row.authorSlug,
    featuredImage: row.featuredImage,
    tags: JSON.parse(row.tags || "[]"),
    practiceAreas: JSON.parse(row.practiceAreas || "[]"),
    relatedServiceSlugs: JSON.parse(row.relatedServiceSlugs || "[]"),
    seo: {
      title: row.seoTitle,
      description: row.seoDescription,
      primaryKeyword: row.primaryKeyword || "",
      secondaryKeywords: JSON.parse(row.secondaryKeywords || "[]"),
      keywords: JSON.parse(row.seoKeywords || "[]"),
      canonical: row.canonical,
      ogTitle: row.ogTitle || undefined,
      ogDescription: row.ogDescription || undefined,
      ogImage: row.ogImage || undefined,
      robots: row.robots || "index,follow",
      schemaJson: row.schemaJson || undefined,
    },
    status: row.status,
  });
}

function seedStaticArticles(db: any) {
  if (existsSync(seedFlag)) return;

  const insert = db.prepare(`
    INSERT OR IGNORE INTO articles (
      id, slug, locale, title, excerpt, content, category, contentType, publishedAt, readingTime,
      authorName, authorSlug, featuredImage, tags, practiceAreas, relatedServiceSlugs,
      seoTitle, seoDescription, seoKeywords, canonical, ogImage, status
    ) VALUES (
      @id, @slug, @locale, @title, @excerpt, @content, @category, @contentType, @publishedAt, @readingTime,
      @authorName, @authorSlug, @featuredImage, @tags, @practiceAreas, @relatedServiceSlugs,
      @seoTitle, @seoDescription, @seoKeywords, @canonical, @ogImage, @status
    );
  `);

  const seedRows: DraftArticleInput[] = staticArticles.map((article) => ({
    id: article.id,
    slug: article.slug,
    locale: "vi",
    title: article.title.vi,
    excerpt: article.excerpt.vi,
    content: article.content?.vi ?? `<p>${article.excerpt.vi}</p>`,
    category: article.category,
    contentType: "article",
    publishedAt: article.publishedAt,
    readingTime: article.readingTime,
    authorName: article.author,
    authorSlug: article.authorSlug,
    featuredImage: article.image,
    tags: [],
    practiceAreas: [],
    relatedServiceSlugs: [],
    seo: {
      title: article.title.vi,
      description: article.excerpt.vi,
      primaryKeyword: article.seo?.keywords?.[0] ?? "",
      secondaryKeywords: article.seo?.keywords?.slice(1) ?? [],
      keywords: article.seo?.keywords ?? [],
      canonical: `${siteConfig.domain}/vi/insights/${article.slug}`,
      ogTitle: article.title.vi,
      ogDescription: article.excerpt.vi,
      robots: "index,follow",
      ogImage: undefined,
    },
    status: "published",
  }));

  const tx = db.transaction((rows: DraftArticleInput[]) => {
    for (const row of rows) {
      insert.run({
        ...row,
        tags: JSON.stringify(row.tags ?? []),
        practiceAreas: JSON.stringify(row.practiceAreas ?? []),
        relatedServiceSlugs: JSON.stringify(row.relatedServiceSlugs ?? []),
        seoTitle: row.seo.title,
        seoDescription: row.seo.description,
        seoKeywords: JSON.stringify(row.seo.keywords ?? []),
        canonical: row.seo.canonical,
        ogImage: row.seo.ogImage ?? null,
        primaryKeyword: row.seo.primaryKeyword ?? "",
        secondaryKeywords: JSON.stringify(row.seo.secondaryKeywords ?? []),
        ogTitle: row.seo.ogTitle ?? null,
        ogDescription: row.seo.ogDescription ?? null,
        robots: row.seo.robots ?? "index,follow",
        schemaJson: row.seo.schemaJson ?? null,
      });
    }
  });

  tx(seedRows);
  mkdirSync(path.dirname(seedFlag), { recursive: true });
  require("fs").writeFileSync(seedFlag, new Date().toISOString(), "utf8");
}

function ensureSeeded(db: any) {
  seedStaticArticles(db);
}

export async function getDraftArticles() {
  const db = getDb();
  ensureSeeded(db);
  const rows = db.prepare("SELECT * FROM articles ORDER BY publishedAt DESC").all();
  db.close();
  return rows.map(mapRow);
}

export async function addDraftArticle(input: DraftArticleInput) {
  const db = getDb();
  ensureSeeded(db);
  const existing = db.prepare("SELECT id FROM articles WHERE slug = ?").get(input.slug) as
    | { id: string }
    | undefined;
  const stmt = existing
    ? db.prepare(`
        UPDATE articles SET
          locale=@locale,
          title=@title,
          excerpt=@excerpt,
          content=@content,
          category=@category,
          contentType=@contentType,
          publishedAt=@publishedAt,
          readingTime=@readingTime,
          authorName=@authorName,
          authorSlug=@authorSlug,
          featuredImage=@featuredImage,
          tags=@tags,
          practiceAreas=@practiceAreas,
          relatedServiceSlugs=@relatedServiceSlugs,
          seoTitle=@seoTitle,
          seoDescription=@seoDescription,
          seoKeywords=@seoKeywords,
          canonical=@canonical,
          ogImage=@ogImage,
          primaryKeyword=@primaryKeyword,
          secondaryKeywords=@secondaryKeywords,
          ogTitle=@ogTitle,
          ogDescription=@ogDescription,
          robots=@robots,
          schemaJson=@schemaJson,
          status=@status,
          updatedAt=CURRENT_TIMESTAMP
        WHERE slug=@slug
      `)
    : db.prepare(`
        INSERT INTO articles (
          id, slug, locale, title, excerpt, content, category, contentType, publishedAt, readingTime,
          authorName, authorSlug, featuredImage, tags, practiceAreas, relatedServiceSlugs,
          seoTitle, seoDescription, seoKeywords, canonical, ogImage, status
          , primaryKeyword, secondaryKeywords, ogTitle, ogDescription, robots, schemaJson
        ) VALUES (
          @id, @slug, @locale, @title, @excerpt, @content, @category, @contentType, @publishedAt, @readingTime,
          @authorName, @authorSlug, @featuredImage, @tags, @practiceAreas, @relatedServiceSlugs,
          @seoTitle, @seoDescription, @seoKeywords, @canonical, @ogImage, @status,
          @primaryKeyword, @secondaryKeywords, @ogTitle, @ogDescription, @robots, @schemaJson
        )
      `);

  stmt.run({
    ...input,
    tags: JSON.stringify(input.tags ?? []),
    practiceAreas: JSON.stringify(input.practiceAreas ?? []),
    relatedServiceSlugs: JSON.stringify(input.relatedServiceSlugs ?? []),
    seoTitle: input.seo.title,
    seoDescription: input.seo.description,
    seoKeywords: JSON.stringify(input.seo.keywords ?? []),
    canonical: input.seo.canonical,
    ogImage: input.seo.ogImage ?? null,
    primaryKeyword: input.seo.primaryKeyword ?? "",
    secondaryKeywords: JSON.stringify(input.seo.secondaryKeywords ?? []),
    ogTitle: input.seo.ogTitle ?? null,
    ogDescription: input.seo.ogDescription ?? null,
    robots: input.seo.robots ?? "index,follow",
    schemaJson: input.seo.schemaJson ?? null,
  });
  db.close();
  return input;
}

export function clearArticleSeedFlagForTests() {
  if (existsSync(seedFlag)) {
    require("fs").unlinkSync(seedFlag);
  }
}
