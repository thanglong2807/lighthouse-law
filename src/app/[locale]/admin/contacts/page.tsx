import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { changeContactStatus } from "@/actions/contacts";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { getContacts } from "@/lib/contacts-store";
import { isAdminLoggedIn } from "@/lib/admin-auth";

export const metadata: Metadata = { title: "Liên hệ | Quản trị", robots: { index: false, follow: false } };

export default async function AdminContactsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  if (!(await isAdminLoggedIn())) redirect(`/${locale}/admin/login`);
  const contacts = getContacts();

  return (
    <Section variant="light" spacing="lg">
      <Container size="xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div><Link href={`/${locale}/admin`} className="text-sm text-gold">← Quay lại quản trị</Link><h1 className="mt-3 heading-1 text-text-primary">Thông tin liên hệ</h1><p className="mt-3 body-lg text-text-secondary">Dữ liệu được lưu trong SQLite tại thư mục data.</p></div>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-border bg-surface">
          <table className="w-full min-w-[900px] text-left text-sm"><thead className="border-b border-border bg-surface-alt"><tr><th className="px-5 py-4">Thời gian</th><th className="px-5 py-4">Khách hàng</th><th className="px-5 py-4">Liên hệ</th><th className="px-5 py-4">Dịch vụ</th><th className="px-5 py-4">Nội dung</th><th className="px-5 py-4">Trạng thái</th></tr></thead><tbody>{contacts.length === 0 ? <tr><td colSpan={6} className="px-5 py-12 text-center text-text-secondary">Chưa có yêu cầu liên hệ.</td></tr> : contacts.map((contact) => <tr key={contact.id} className="border-b border-border last:border-0"><td className="whitespace-nowrap px-5 py-4 text-text-secondary">{new Date(contact.createdAt).toLocaleString("vi-VN")}</td><td className="px-5 py-4"><p className="font-semibold text-text-primary">{contact.fullName}</p><p className="mt-1 text-text-secondary">{contact.company}</p></td><td className="px-5 py-4 text-text-secondary"><p>{contact.phone}</p><p>{contact.email}</p></td><td className="px-5 py-4 text-text-secondary">{contact.service}</td><td className="max-w-xs px-5 py-4 text-text-secondary">{contact.message}</td><td className="px-5 py-4"><form action={changeContactStatus} className="flex items-center gap-2"><input type="hidden" name="id" value={contact.id} /><select name="status" defaultValue={contact.status} className="form-input min-w-32 py-2"><option value="new">Mới</option><option value="contacted">Đã liên hệ</option><option value="closed">Đã đóng</option></select><button className="rounded-full bg-charcoal px-3 py-2 text-xs font-semibold text-white" type="submit">Lưu</button></form></td></tr>)}</tbody></table>
        </div>
      </Container>
    </Section>
  );
}
