import type { Metadata } from "next";
import Link from "next/link";
import "@/app/globals.css";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout";
import { Home, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Not Found",
  description: "Trang bạn đang tìm không tồn tại.",
};

export default function GlobalNotFound() {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-charcoal text-[#F0EDE6] antialiased">
        <main className="min-h-screen flex items-center">
          <Container>
            <div className="max-w-lg mx-auto text-center">
              <p className="text-8xl font-heading text-gold/20 mb-6">404</p>
              <h1 className="heading-1 text-[#F0EDE6] mb-4">
                Không tìm thấy trang
              </h1>
              <p className="body-lg text-white/50 mb-10">
                Trang bạn truy cập không tồn tại hoặc đã được di chuyển.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="primary" size="md" asChild>
                  <Link href="/">
                    <Home className="w-4 h-4" />
                    Về trang chủ
                  </Link>
                </Button>
                <Button variant="outline" size="md" asChild>
                  <Link href="/vi/services">Dịch vụ</Link>
                </Button>
                <Button variant="ghost" size="md" asChild>
                  <Link href="/vi/contact">
                    <Phone className="w-4 h-4" />
                    Liên hệ
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </main>
      </body>
    </html>
  );
}
