import Link from "next/link";
import { Home, Phone } from "lucide-react";

export default function GlobalNotFound() {
  return (
    <section
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 24px",
        background:
          "radial-gradient(circle at top, rgba(212,175,55,0.12), transparent 32%), #00112D",
        color: "#F0EDE6",
        fontFamily:
          '"Arial", "Helvetica Neue", "Segoe UI", sans-serif',
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "680px",
          margin: "0 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "clamp(64px, 18vw, 132px)",
            lineHeight: 1,
            color: "rgba(240, 237, 230, 0.18)",
            fontFamily: '"Arial", "Helvetica Neue", "Segoe UI", sans-serif',
            fontWeight: 700,
            letterSpacing: "0.04em",
          }}
        >
          404
        </p>
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(28px, 7vw, 56px)",
            lineHeight: 1.15,
            fontFamily: '"Arial", "Helvetica Neue", "Segoe UI", sans-serif',
            fontWeight: 700,
          }}
        >
          Không tìm thấy trang
        </h1>
        <p
          style={{
            margin: 0,
            maxWidth: "560px",
            fontSize: "clamp(15px, 3.8vw, 18px)",
            lineHeight: 1.6,
            color: "rgba(240, 237, 230, 0.72)",
          }}
        >
          Trang bạn truy cập không tồn tại hoặc đã được di chuyển.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "6px",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              height: "46px",
              padding: "0 22px",
              border: "1px solid #D4AF37",
              background: "#D4AF37",
              color: "#00112D",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <Home size={16} />
            Về trang chủ
          </Link>
          <Link
            href="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: "46px",
              padding: "0 22px",
              border: "1px solid rgba(212, 175, 55, 0.45)",
              color: "#F6D47A",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Dịch vụ
          </Link>
          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              height: "46px",
              padding: "0 22px",
              color: "#D4AF37",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <Phone size={16} />
            Liên hệ
          </Link>
        </div>
      </div>
    </section>
  );
}
