import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { createAdminUser, toggleAdminUser } from "@/actions/admin-users";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { getCurrentAdmin } from "@/lib/admin-auth";
import { listAdmins } from "@/lib/security-store";

export const metadata: Metadata = { title: "Tài khoản quản trị", robots: { index: false, follow: false } };

export default async function AdminUsersPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ error?: string }> }) {
  const { locale } = await params;
  const { error } = await searchParams;
  setRequestLocale(locale);
  const current = await getCurrentAdmin();
  if (!current || current.role !== "owner") redirect(`/${locale}/admin/login`);
  const admins = listAdmins();
  return (
    <Section variant="light" spacing="lg"><Container size="lg">
      <Link href={`/${locale}/admin`} className="text-sm text-gold">← Quay lại quản trị</Link>
      <h1 className="mt-3 heading-1 text-text-primary">Tài khoản quản trị</h1>
      <p className="mt-3 body-lg text-text-secondary">Mỗi nhân sự sử dụng tài khoản riêng, không dùng chung mật khẩu.</p>
      {error && <p className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error === "duplicate" ? "Email này đã tồn tại." : "Vui lòng kiểm tra thông tin và dùng mật khẩu tối thiểu 12 ký tự."}</p>}
      <form action={createAdminUser} className="mt-8 grid gap-4 rounded-2xl border border-border bg-surface p-6 md:grid-cols-4">
        <input name="displayName" className="form-input" placeholder="Họ tên" required />
        <input name="email" type="email" className="form-input" placeholder="Email" required />
        <input name="password" type="password" minLength={12} className="form-input" placeholder="Mật khẩu từ 12 ký tự" required />
        <div className="flex gap-2"><select name="role" className="form-input"><option value="editor">SEO Editor</option><option value="owner">Owner</option></select><button type="submit" className="rounded-full bg-charcoal px-4 text-sm font-semibold text-white">Thêm</button></div>
      </form>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border bg-surface"><table className="w-full text-left text-sm"><thead className="border-b border-border bg-surface-alt"><tr><th className="px-5 py-4">Tên</th><th className="px-5 py-4">Email</th><th className="px-5 py-4">Vai trò</th><th className="px-5 py-4">Trạng thái</th><th className="px-5 py-4">Thao tác</th></tr></thead><tbody>{admins.map((admin) => <tr key={admin.id} className="border-b border-border last:border-0"><td className="px-5 py-4 font-semibold">{admin.displayName}</td><td className="px-5 py-4 text-text-secondary">{admin.email}</td><td className="px-5 py-4 text-text-secondary">{admin.role}</td><td className="px-5 py-4">{admin.active ? "Đang hoạt động" : "Đã khóa"}</td><td className="px-5 py-4">{admin.id !== current.id && <form action={toggleAdminUser}><input type="hidden" name="id" value={admin.id} /><input type="hidden" name="active" value={admin.active ? "0" : "1"} /><button className="text-gold hover:underline" type="submit">{admin.active ? "Khóa" : "Mở khóa"}</button></form>}</td></tr>)}</tbody></table></div>
    </Container></Section>
  );
}
