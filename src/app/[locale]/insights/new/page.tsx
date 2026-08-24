import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { ArticleEditorForm } from "@/components/forms/article-editor-form";
import { createArticle } from "@/actions/articles";
import { isAdminLoggedIn } from "@/lib/admin-auth";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tạo bài viết SEO",
    description: "Tạo bài viết chuẩn SEO với CKEditor.",
    robots: { index: false, follow: false },
  };
}

export default async function NewInsightPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  if (!(await isAdminLoggedIn())) {
    redirect(`/${locale}/admin/login`);
  }

  return (
    <Section variant="light" spacing="lg">
      <Container size="lg">
        <div className="mb-8">
          <h1 className="display-md text-text-primary">Tạo bài viết SEO</h1>
          <p className="body-lg text-text-secondary mt-3">Soạn nội dung bằng CKEditor và lưu trực tiếp vào file dữ liệu của dự án.</p>
        </div>
        <ArticleEditorForm onSubmit={createArticle} />
      </Container>
    </Section>
  );
}
