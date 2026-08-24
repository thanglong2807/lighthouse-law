"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addDraftArticle } from "@/lib/articles-store";
import { isAdminLoggedIn } from "@/lib/admin-auth";
import { articleFormSchema, type ArticleFormValues } from "@/lib/article-form-schema";

export async function createArticle(formData: FormData) {
  if (!isAdminLoggedIn()) {
    redirect("/vi/admin/login");
  }

  const values = Object.fromEntries(formData.entries());
  const parsed = articleFormSchema.safeParse({
    ...values,
    tags: String(values.tags ?? "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean),
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

  await addDraftArticle({
    ...parsed.data,
    seo: {
      title: parsed.data.seoTitle,
      description: parsed.data.seoDescription,
      keywords: String(parsed.data.seoKeywords)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      canonical: parsed.data.canonical,
      ogImage: parsed.data.ogImage || undefined,
    },
  });
  revalidatePath("/vi/insights");
  revalidatePath("/en/insights");
  revalidatePath("/vi/insights/[slug]");
  revalidatePath("/en/insights/[slug]");
  return { success: true };
}
