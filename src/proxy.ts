import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse, type NextRequest } from "next/server";

const intlMiddleware = createMiddleware(routing);
const COOKIE_NAME = "lhl_admin_session";
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET ?? "";

export const config = {
  matcher: ["/:path*"],
};

async function verifyAdminSessionEdge(token?: string | null) {
  if (!token || !SESSION_SECRET) return false;
  const [body, signature] = token.split(".");
  if (!body || !signature) return false;

  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(SESSION_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signed = await crypto.subtle.sign("HMAC", key, encoder.encode(body));
  const expected = btoa(String.fromCharCode(...new Uint8Array(signed)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
  if (expected !== signature) return false;

  try {
    const payload = JSON.parse(atob(body.replace(/-/g, "+").replace(/_/g, "/")));
    return typeof payload.sub === "number" && typeof payload.exp === "number" && payload.exp > Date.now();
  } catch {
    return false;
  }
}

export default async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const sensitivePath = /^\/(?:\.env(?:\.[^/]+)?|\.git(?:\/|$)|data(?:\/|$))/i.test(pathname);
  if (sensitivePath) return new NextResponse(null, { status: 404 });

  if (process.env.NODE_ENV === "production" && req.headers.get("x-forwarded-proto") !== "https") {
    const url = req.nextUrl.clone();
    url.protocol = "https:";
    return NextResponse.redirect(url, 308);
  }
  const isLocalizedPath = pathname === "/" || /^\/(vi|en)(?:\/|$)/.test(pathname);
  if (!isLocalizedPath) return NextResponse.next();

  const isAdminLogin = /^\/(vi|en)\/admin\/login\/?$/.test(pathname);
  const protectedRoute =
    (/^\/(vi|en)\/admin(\/|$)/.test(pathname) && !isAdminLogin) ||
    /^\/(vi|en)\/insights\/new(\/|$)/.test(pathname);

  if (protectedRoute && !(await verifyAdminSessionEdge(req.cookies.get(COOKIE_NAME)?.value))) {
    const url = req.nextUrl.clone();
    const locale = pathname.split("/")[1] || routing.defaultLocale;
    url.pathname = `/${locale}/admin/login`;
    url.search = "";
    return NextResponse.redirect(url);
  }

  // The login page already has an explicit locale segment and does not use
  // next-intl navigation. Bypassing the locale middleware here prevents a
  // production redirect loop where /vi/admin/login redirects to itself.
  if (isAdminLogin) return NextResponse.next();

  return intlMiddleware(req);
}
