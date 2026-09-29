import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { logoutAdmin } from "@/actions/admin-auth";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { getAdminArticleOverview, getAdminSummary } from "@/lib/admin-data";
import { isAdminLoggedIn } from "@/lib/admin-auth";

export const metadata: Metadata = { title: "Quản trị | Lighthouse Law", robots: { index: false, follow: false } };

export default async function AdminDashboard({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (!(await isAdminLoggedIn())) redirect(`/${locale}/admin/login`);
  const summary = await getAdminSummary();
  const articleOverview = await getAdminArticleOverview();

  return (
    <Section variant="light" spacing="lg">
      <Container size="lg">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="overline mb-3 text-gold">Lighthouse Law</p>
            <h1 className="heading-1 text-text-primary">Trang quản trị</h1>
            <p className="mt-3 body-lg text-text-secondary">Quản lý nội dung website và thông tin khách hàng.</p>
          </div>
          <form action={logoutAdmin}>
            <button className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-text-primary hover:bg-surface-alt" type="submit">
              Đăng xuất
            </button>
          </form>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Tổng bài viết" value={summary.articles} />
          <Stat label="Đã xuất bản" value={summary.publishedArticles} />
          <Stat label="Bản nháp" value={summary.drafts} />
          <Stat label="Liên hệ mới" value={summary.contacts} />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <AdminLink href={`/${locale}/insights/new`} title="Tạo bài viết" description="Soạn và xuất bản bài viết SEO." />
          <AdminLink href={`/${locale}/admin/contacts`} title="Thông tin liên hệ" description="Xem các yêu cầu tư vấn từ website." />
          <AdminLink href={`/${locale}/admin/users`} title="Tài khoản quản trị" description="Tạo tài khoản riêng và khóa tài khoản nhân sự." />
          <AdminLink href={`/${locale}/admin/audit`} title="Audit log" description="Theo dõi đăng nhập và thao tác quản trị." />
          <AdminLink href={`/${locale}/admin/seo`} title="SEO các trang" description="Chỉnh meta title, description, OG và robots cho mọi trang." />
          <AdminLink href={`/${locale}/insights`} title="Xem website" description="Mở trang bài viết công khai." />
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-text-primary">Tổng quan bài viết</h2>
              <p className="mt-1 text-sm text-text-secondary">Kiểm tra nhanh bài nào đang thiếu nội dung hoặc thông tin SEO.</p>
            </div>
            <Link href={`/${locale}/insights/new`} className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-charcoal">Tạo bài viết mới</Link>
          </div>
          <div className="mt-5 space-y-3">
            {articleOverview.length === 0 ? <p className="text-sm text-text-secondary">Chưa có bài viết nào.</p> : articleOverview.map((article) => (
              <div key={article.id} className="rounded-xl border border-border p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-text-primary">{article.title}</p>
                    <p className="mt-1 text-xs text-text-secondary">/{article.slug} · {article.contentLength.toLocaleString("vi-VN")} ký tự nội dung</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${article.status === "published" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>{article.status === "published" ? "Đã xuất bản" : "Bản nháp"}</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {article.missing.length === 0 ? <span className="text-sm text-green-700">Đã đủ các trường kiểm tra nhanh</span> : article.missing.map((item) => <span key={item} className="rounded-full bg-red-50 px-2.5 py-1 text-xs text-red-700">Thiếu: {item}</span>)}
                </div>
                <Link href={`/${locale}/insights/${article.slug}`} className="mt-3 inline-block text-sm font-semibold text-gold">Xem bài viết →</Link>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return <div className="rounded-2xl border border-border bg-surface p-5"><p className="text-sm text-text-secondary">{label}</p><p className="mt-2 text-3xl font-semibold text-text-primary">{value}</p></div>;
}

function AdminLink({ href, title, description }: { href: string; title: string; description: string }) {
  return <Link href={href} className="rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:border-gold"><h2 className="text-lg font-semibold text-text-primary">{title}</h2><p className="mt-2 text-sm leading-6 text-text-secondary">{description}</p></Link>;
}
