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
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
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
