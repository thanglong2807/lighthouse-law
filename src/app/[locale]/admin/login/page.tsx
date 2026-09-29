import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { loginAdmin } from "@/actions/admin-auth";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { locale } = await params;
  const { error } = await searchParams;
  setRequestLocale(locale);

  return (
    <Section variant="light" spacing="lg">
      <Container size="sm">
        <div className="mx-auto max-w-md rounded-3xl border border-border bg-surface p-8 shadow-lg">
          <h1 className="heading-2 mb-2 text-text-primary">Đăng nhập quản trị</h1>
          <p className="body-sm text-text-secondary mb-6">
            Chỉ tài khoản quản trị mới có thể đăng bài.
          </p>
          <form
            action={async (formData) => {
              "use server";
              await loginAdmin(formData);
            }}
            className="space-y-4"
          >
            <input type="hidden" name="locale" value={locale} />
            {error && (
              <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
                {error === "config"
                  ? "Hệ thống quản trị chưa được cấu hình."
                  : error === "rate"
                    ? "Bạn thử đăng nhập sai quá nhiều lần. Vui lòng chờ 15 phút."
                    : "Email hoặc mật khẩu không đúng."}
              </p>
            )}
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-text-primary">Email quản trị</span>
              <input name="email" type="email" autoComplete="username" className="form-input" required />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-text-primary">Mật khẩu</span>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                className="form-input"
                required
              />
            </label>
            <button
              type="submit"
              className="inline-flex h-11 items-center justify-center rounded-full bg-gold px-5 text-sm font-semibold text-charcoal transition-colors hover:bg-gold/90"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </Container>
    </Section>
  );
}
