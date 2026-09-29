import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { getCurrentAdmin } from "@/lib/admin-auth";
import { getAuditLogs } from "@/lib/security-store";

export const metadata: Metadata = { title: "Audit log | Quản trị", robots: { index: false, follow: false } };

export default async function AdminAuditPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const admin = await getCurrentAdmin();
  if (!admin || admin.role !== "owner") redirect(`/${locale}/admin/login`);
  const logs = getAuditLogs();
  return <Section variant="light" spacing="lg"><Container size="xl"><Link href={`/${locale}/admin`} className="text-sm text-gold">← Quay lại quản trị</Link><h1 className="mt-3 heading-1 text-text-primary">Audit log</h1><p className="mt-3 body-lg text-text-secondary">Lịch sử đăng nhập và thay đổi dữ liệu quản trị.</p><div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-surface"><table className="w-full min-w-[800px] text-left text-sm"><thead className="border-b border-border bg-surface-alt"><tr><th className="px-5 py-4">Thời gian</th><th className="px-5 py-4">Tài khoản</th><th className="px-5 py-4">Hành động</th><th className="px-5 py-4">Đối tượng</th><th className="px-5 py-4">Chi tiết</th></tr></thead><tbody>{logs.length === 0 ? <tr><td colSpan={5} className="px-5 py-12 text-center text-text-secondary">Chưa có log.</td></tr> : logs.map((log) => <tr key={log.id} className="border-b border-border last:border-0"><td className="whitespace-nowrap px-5 py-4 text-text-secondary">{new Date(log.createdAt).toLocaleString("vi-VN")}</td><td className="px-5 py-4">{log.adminEmail}</td><td className="px-5 py-4 font-semibold">{log.action}</td><td className="px-5 py-4 text-text-secondary">{log.entityType}{log.entityId ? ` / ${log.entityId}` : ""}</td><td className="max-w-sm px-5 py-4 text-xs text-text-secondary">{log.metadata}</td></tr>)}</tbody></table></div></Container></Section>;
}
