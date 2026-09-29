import "server-only";

import crypto from "crypto";
import { cookies } from "next/headers";
import { getAdminById } from "@/lib/security-store";

const COOKIE_NAME = "lhl_admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 8;

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

function getSecret() {
  return requireEnv("ADMIN_SESSION_SECRET");
}

function isProduction() {
  return process.env.NODE_ENV === "production";
}

function timingSafeEqual(a: string, b: string) {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) return false;
  return crypto.timingSafeEqual(aBuf, bBuf);
}

export function createAdminSession(adminId: number) {
  const expiresAt = Date.now() + SESSION_TTL_MS;
  const payload = JSON.stringify({ sub: adminId, exp: expiresAt });
  const body = Buffer.from(payload).toString("base64url");
  const signature = crypto
    .createHmac("sha256", getSecret())
    .update(body)
    .digest("base64url");
  return `${body}.${signature}`;
}

export function verifyAdminSession(token?: string | null) {
  if (!token) return false;
  const [body, signature] = token.split(".");
  if (!body || !signature) return false;
  const expected = crypto
    .createHmac("sha256", getSecret())
    .update(body)
    .digest("base64url");
  if (!timingSafeEqual(signature, expected)) return false;
  try {
    const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as {
      sub?: number;
      exp?: number;
    };
    return typeof payload.sub === "number" && typeof payload.exp === "number" && payload.exp > Date.now();
  } catch {
    return false;
  }
}

export function getAdminSession() {
  throw new Error("getAdminSession() is server-only async in Next 16. Use getAdminSessionAsync().");
}

export async function getAdminSessionAsync() {
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value;
}

export async function setAdminSession(token: string) {
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: isProduction(),
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_TTL_MS / 1000,
  });
}

export async function clearAdminSession() {
  const store = await cookies();
  store.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: isProduction(),
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });
}

export async function isAdminLoggedIn() {
  return Boolean(await getCurrentAdmin());
}

export async function getCurrentAdmin() {
  const token = await getAdminSessionAsync();
  if (!verifyAdminSession(token)) return null;
  const [body] = token!.split(".");
  const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as { sub: number };
  return getAdminById(payload.sub) ?? null;
}
