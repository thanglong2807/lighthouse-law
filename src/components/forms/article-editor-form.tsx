"use client";

import { useEffect, useMemo, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Save, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { articleFormSchema, type ArticleFormValues } from "@/lib/article-form-schema";

type Props = {
  onSubmit: (formData: FormData) => Promise<{ success: boolean; errors?: Record<string, string[]> }>;
};

export function ArticleEditorForm({ onSubmit }: Props) {
  const [html, setHtml] = useState("<p>Nhap noi dung bai viet tai day...</p>");
  const [editorClass, setEditorClass] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    import("@ckeditor/ckeditor5-build-classic").then((mod) => {
      if (mounted) setEditorClass(() => mod.default);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const { register, handleSubmit, setValue, watch } = useForm<any>({
    resolver: zodResolver(articleFormSchema),
    defaultValues: {
      id: crypto.randomUUID(),
      locale: "vi",
      status: "published",
      contentType: "article",
      category: "corporate",
      publishedAt: new Date().toISOString().slice(0, 10),
      readingTime: 5,
      authorSlug: "nguyen-van-a",
      featuredImage: "/og-image.jpg",
      seoKeywords: "",
      canonical: "/vi/insights/",
      ogImage: "",
      tags: [],
      practiceAreas: [],
      relatedServiceSlugs: [],
      content: "<p>Nhap noi dung bai viet tai day...</p>",
      title: "",
      excerpt: "",
      slug: "",
      seoTitle: "",
      seoDescription: "",
      authorName: "",
    },
  });

  const seoPreview = useMemo(() => {
    const title = watch("seoTitle") || watch("title");
    const description = watch("seoDescription") || watch("excerpt");
    return { title, description };
  }, [watch]);

  async function submit(values: ArticleFormValues) {
    setSaving(true);
    setResult(null);
    const fd = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        fd.set(key, value.join(","));
      } else {
        fd.set(key, String(value ?? ""));
      }
    });
    fd.set("content", html);
    const res = await onSubmit(fd);
    setSaving(false);
    setResult(res.success ? "Bai viet da duoc luu." : "Co loi khi luu bai viet.");
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(submit)}>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Tieu de bai viet" {...register("title")} />
        <Field label="Slug" {...register("slug")} />
        <Field label="Tac gia" {...register("authorName")} />
        <Field label="Slug tac gia" {...register("authorSlug")} />
        <Field label="Anh dai dien" {...register("featuredImage")} />
        <Field label="Danh muc" {...register("category")} />
        <Field label="SEO Title" {...register("seoTitle")} />
        <Field label="Canonical" {...register("canonical")} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Excerpt" textarea {...register("excerpt")} />
        <Field label="SEO Description" textarea {...register("seoDescription")} />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Field
          label="Keywords (phan tach bang dau phay)"
          {...register("seoKeywords")}
        />
        <Field
          label="Tags (phan tach bang dau phay)"
          {...register("tags", {
            setValueAs: (v) =>
              String(v)
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean),
          })}
        />
        <Field label="Ngay dang" type="date" {...register("publishedAt")} />
      </div>

      <div className="rounded-2xl border border-border bg-surface p-4">
        <div className="mb-3 flex items-center gap-2 text-sm font-medium text-text-primary">
          <Sparkles className="h-4 w-4 text-gold" />
          Noi dung bai viet
        </div>
        <div className="ckeditor-shell">
          {editorClass ? (
            <CKEditor
              editor={editorClass}
              data={html}
              onChange={(_, editor: any) => {
                const data = editor.getData();
                setHtml(data);
                setValue("content", data, { shouldValidate: true });
              }}
            />
          ) : (
            <div className="rounded-xl border border-dashed border-border p-6 text-sm text-text-secondary">
              Dang tai CKEditor...
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-4">
          <p className="text-sm font-medium text-text-primary mb-2">Preview SEO</p>
          <p className="text-base font-semibold text-gold">
            {seoPreview.title || "SEO title preview"}
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            {seoPreview.description || "SEO description preview"}
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-4">
          <p className="text-sm font-medium text-text-primary mb-2">Trang thai xuat ban</p>
          <label className="block text-sm text-text-secondary">
            Trang thai
            <select className="form-input mt-2" {...register("status")}>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </label>
        </div>
      </div>

      <Button type="submit" disabled={saving}>
        {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
        Luu bai viet
      </Button>

      {result && <p className="text-sm text-text-secondary">{result}</p>}
    </form>
  );
}

function Field(props: any) {
  const { label, textarea, ...rest } = props;
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-text-primary">
        {label}
      </span>
      {textarea ? (
        <textarea {...rest} className="form-input min-h-28" />
      ) : (
        <input {...rest} className="form-input" />
      )}
    </label>
  );
}
