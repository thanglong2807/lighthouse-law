"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addDraftArticle } from "@/lib/articles-store";
import { getCurrentAdmin, isAdminLoggedIn } from "@/lib/admin-auth";
import { articleFormSchema, type ArticleFormValues } from "@/lib/article-form-schema";
import { sanitizeHtml, sanitizeSchemaJson } from "@/lib/security-crypto";
import { writeAudit } from "@/lib/security-store";

export async function createArticle(formData: FormData) {
  if (!(await isAdminLoggedIn())) {
    redirect("/vi/admin/login");
  }

  const values = Object.fromEntries(formData.entries());
  const parsed = articleFormSchema.safeParse({
    ...values,
    tags: String(values.tags ?? "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
    seoKeywords: String(values.seoKeywords ?? "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
      .join(","),
    practiceAreas: String(values.practiceAreas ?? "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
    relatedServiceSlugs: String(values.relatedServiceSlugs ?? "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
  });

  if (!parsed.success) {
    return { success: false, errors: parsed.error.flatten().fieldErrors };
  }

  let schemaJson = "";
  try {
    schemaJson = sanitizeSchemaJson(parsed.data.schemaJson);
  } catch {
    return { success: false, errors: { schemaJson: ["Schema JSON-LD không hợp lệ."] } };
  }

  await addDraftArticle({
    ...parsed.data,
    content: sanitizeHtml(parsed.data.content),
    seo: {
      title: parsed.data.seoTitle,
      description: parsed.data.seoDescription,
      primaryKeyword: parsed.data.primaryKeyword,
      secondaryKeywords: String(parsed.data.secondaryKeywords)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      keywords: [parsed.data.primaryKeyword, ...String(parsed.data.secondaryKeywords)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean), ...String(parsed.data.seoKeywords)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)].filter((item, index, list) => list.indexOf(item) === index),
      canonical: parsed.data.canonical,
      ogTitle: parsed.data.ogTitle || parsed.data.seoTitle,
      ogDescription: parsed.data.ogDescription || parsed.data.seoDescription,
      ogImage: parsed.data.ogImage || undefined,
      robots: parsed.data.robots,
      schemaJson: schemaJson || undefined,
    },
  });
  const admin = await getCurrentAdmin();
  if (admin) writeAudit({ adminId: admin.id, adminEmail: admin.email, action: "article_saved", entityType: "article", entityId: parsed.data.slug, metadata: { status: parsed.data.status } });
  revalidatePath("/vi/insights");
  revalidatePath("/en/insights");
  revalidatePath("/vi/insights/[slug]");
  revalidatePath("/en/insights/[slug]");
  return { success: true };
}
