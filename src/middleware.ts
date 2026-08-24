import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextResponse, type NextRequest } from 'next/server';

const intlMiddleware = createMiddleware(routing);
const COOKIE_NAME = 'lhl_admin_session';
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET ?? '';

export const config = {
  matcher: ['/', '/(vi|en)/:path*'],
};

async function verifyAdminSessionEdge(token?: string | null) {
  if (!token || !SESSION_SECRET) return false;
  const [body, signature] = token.split('.');
  if (!body || !signature) return false;

  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(SESSION_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signed = await crypto.subtle.sign('HMAC', key, encoder.encode(body));
  const expected = btoa(String.fromCharCode(...new Uint8Array(signed)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
  if (expected !== signature) return false;

  try {
    const payload = JSON.parse(atob(body.replace(/-/g, '+').replace(/_/g, '/')));
    return typeof payload.exp === 'number' && payload.exp > Date.now();
  } catch {
    return false;
  }
}

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const protectedRoute = /^\/(vi|en)\/admin(\/|$)/.test(pathname) || /^\/(vi|en)\/insights\/new(\/|$)/.test(pathname);

  if (protectedRoute && !(await verifyAdminSessionEdge(req.cookies.get(COOKIE_NAME)?.value))) {
    const url = req.nextUrl.clone();
    const locale = pathname.split('/')[1] || routing.defaultLocale;
    url.pathname = `/${locale}/admin/login`;
    url.search = '';
    return NextResponse.redirect(url);
  }

  return intlMiddleware(req);
}
