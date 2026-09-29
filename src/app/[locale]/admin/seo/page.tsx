import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { savePageSeoAction } from "@/actions/page-seo";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { getCurrentAdmin } from "@/lib/admin-auth";
import { getDefaultPageSeo, getPageSeo, listPageSeo } from "@/lib/page-seo-store";
import { SeoImageUpload } from "@/components/admin/seo-image-upload";

export const metadata: Metadata = { title: "SEO các trang | Quản trị", robots: { index: false, follow: false } };
const commonPages = ["/", "/company", "/services", "/team", "/offices", "/insights", "/for-clients", "/careers", "/contact", "/consultation", "/faq", "/privacy-policy", "/terms-of-use", "/search", "/services/[slug]", "/team/[slug]"];

export default async function AdminSeoPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ route?: string; locale?: string; saved?: string; error?: string }> }) {
  const { locale } = await params;
  const query = await searchParams;
  setRequestLocale(locale);
  const admin = await getCurrentAdmin();
  if (!admin) redirect(`/${locale}/admin/login`);
  const selectedLocale = query.locale === "en" ? "en" : "vi";
  const selectedRoute = query.route && query.route.startsWith("/") ? query.route : "/";
  const current = getPageSeo(selectedRoute, selectedLocale) ?? getDefaultPageSeo(selectedRoute, selectedLocale);
  const saved = listPageSeo();
  return <Section variant="light" spacing="lg"><Container size="lg"><Link href={`/${locale}/admin`} className="text-sm text-gold">← Quay lại quản trị</Link><h1 className="mt-3 heading-1 text-text-primary">SEO các trang website</h1><p className="mt-3 body-lg text-text-secondary">Chỉnh metadata cho trang chủ, trang dịch vụ, liên hệ và các trang thông thường.</p>{query.saved && <p className="mt-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">Đã lưu cấu hình SEO.</p>}{query.error && <p className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">Vui lòng nhập đủ title, mô tả tối thiểu 20 ký tự và canonical URL.</p>}
    <form method="get" className="mt-8 grid gap-4 rounded-2xl border border-border bg-surface p-5 md:grid-cols-[1fr_120px_auto]"><select name="route" defaultValue={selectedRoute} className="form-input">{commonPages.map((page) => <option key={page} value={page}>{page}</option>)}</select><select name="locale" defaultValue={selectedLocale} className="form-input"><option value="vi">Tiếng Việt</option><option value="en">English</option></select><button className="rounded-full bg-charcoal px-5 py-2 text-sm font-semibold text-white" type="submit">Mở cấu hình</button></form>
    <form action={savePageSeoAction} className="mt-5 space-y-5 rounded-2xl border border-border bg-surface p-6"><input type="hidden" name="route" value={selectedRoute} /><input type="hidden" name="locale" value={selectedLocale} /><div className="grid gap-4 md:grid-cols-2"><Field label="Meta title" name="title" defaultValue={current?.title ?? ""} /><Field label="Canonical URL" name="canonical" defaultValue={current?.canonical ?? `/${selectedLocale}${selectedRoute === "/" ? "" : selectedRoute}`} /></div><Field label="Meta description" name="description" textarea defaultValue={current?.description ?? ""} /><div className="grid gap-4 md:grid-cols-2"><Field label="Từ khóa chính" name="primaryKeyword" defaultValue={current?.primaryKeyword ?? ""} /><Field label="Từ khóa phụ (cách nhau bằng dấu phẩy)" name="secondaryKeywords" defaultValue={current?.secondaryKeywords?.join(", ") ?? ""} /></div><div className="grid gap-4 md:grid-cols-2"><Field label="OG title" name="ogTitle" defaultValue={current?.ogTitle ?? ""} /><label className="block"><span className="mb-1.5 block text-sm font-medium text-text-primary">OG image</span><SeoImageUpload defaultValue={current?.ogImage ?? ""} /></label></div><Field label="OG description" name="ogDescription" textarea defaultValue={current?.ogDescription ?? ""} /><label className="block"><span className="mb-1.5 block text-sm font-medium text-text-primary">Robots</span><select name="robots" defaultValue={current?.robots ?? "index,follow"} className="form-input"><option value="index,follow">index, follow</option><option value="noindex,follow">noindex, follow</option><option value="index,nofollow">index, nofollow</option><option value="noindex,nofollow">noindex, nofollow</option></select></label><button className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-charcoal" type="submit">Lưu SEO trang này</button></form>
    <div className="mt-8 rounded-2xl border border-border bg-surface p-6"><h2 className="text-lg font-semibold text-text-primary">Các cấu hình đã lưu</h2><div className="mt-4 space-y-2 text-sm text-text-secondary">{saved.length === 0 ? <p>Chưa có cấu hình ghi đè.</p> : saved.map((item) => <p key={`${item.locale}:${item.route}`}><span className="font-semibold text-text-primary">{item.locale}</span> · {item.route} · {item.title}</p>)}</div></div>
  </Container></Section>;
}

function Field({ label, name, defaultValue, textarea = false }: { label: string; name: string; defaultValue: string; textarea?: boolean }) { return <label className="block"><span className="mb-1.5 block text-sm font-medium text-text-primary">{label}</span>{textarea ? <textarea name={name} defaultValue={defaultValue} className="form-input min-h-28" required={name === "description"} /> : <input name={name} defaultValue={defaultValue} className="form-input" required={name === "title" || name === "canonical"} />}</label>; }
