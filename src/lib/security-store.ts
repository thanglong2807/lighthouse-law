import "server-only";

import Database from "better-sqlite3";
import { chmodSync, mkdirSync } from "fs";
import path from "path";
import { hashPassword, verifyPassword } from "@/lib/security-crypto";

export type AdminAccount = { id: number; email: string; displayName: string; role: "owner" | "editor"; active: number; createdAt: string };
export type AuditLog = { id: number; adminEmail: string; action: string; entityType: string; entityId: string; metadata: string; createdAt: string };

const dbDir = path.join(process.cwd(), "data");
const dbFile = path.join(dbDir, "security.sqlite");

function getDb() {
  mkdirSync(dbDir, { recursive: true });
  const db = new Database(dbFile);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS admins (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      displayName TEXT NOT NULL,
      passwordHash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'editor',
      active INTEGER NOT NULL DEFAULT 1,
      createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS loginRateLimits (
      rateKey TEXT PRIMARY KEY,
      failures INTEGER NOT NULL DEFAULT 0,
      firstFailureAt INTEGER NOT NULL,
      blockedUntil INTEGER NOT NULL DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS auditLogs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      adminId INTEGER,
      adminEmail TEXT NOT NULL,
      action TEXT NOT NULL,
      entityType TEXT NOT NULL,
      entityId TEXT NOT NULL DEFAULT '',
      metadata TEXT NOT NULL DEFAULT '{}',
      createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);
  try { chmodSync(dbFile, 0o600); } catch { /* Windows does not support POSIX mode bits. */ }
  return db;
}

function ensureInitialAdmin(db: any) {
  const count = (db.prepare("SELECT COUNT(*) AS count FROM admins").get() as { count: number }).count;
  const email = (process.env.ADMIN_EMAIL || "admin@lighthouselaw.vn").trim().toLowerCase();
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;
  if (count === 0 && passwordHash) {
    db.prepare("INSERT INTO admins (email, displayName, passwordHash, role) VALUES (?, ?, ?, 'owner')").run(email, "Quản trị viên chính", passwordHash);
  }
}

export function authenticateAdmin(email: string, password: string) {
  const db = getDb();
  try {
    ensureInitialAdmin(db);
    const admin = db.prepare("SELECT * FROM admins WHERE lower(email) = lower(?) AND active = 1").get(email.trim()) as (AdminAccount & { passwordHash: string }) | undefined;
    return admin && verifyPassword(password, admin.passwordHash) ? admin : null;
  } finally { db.close(); }
}

export function getAdminById(id: number) {
  const db = getDb();
  try { ensureInitialAdmin(db); return db.prepare("SELECT id, email, displayName, role, active, createdAt FROM admins WHERE id = ? AND active = 1").get(id) as AdminAccount | undefined; }
  finally { db.close(); }
}

export function listAdmins() {
  const db = getDb();
  try { ensureInitialAdmin(db); return db.prepare("SELECT id, email, displayName, role, active, createdAt FROM admins ORDER BY id").all() as AdminAccount[]; }
  finally { db.close(); }
}

export function createAdminAccount(email: string, displayName: string, password: string, role: "owner" | "editor" = "editor") {
  const db = getDb();
  try { return db.prepare("INSERT INTO admins (email, displayName, passwordHash, role) VALUES (?, ?, ?, ?)").run(email.trim().toLowerCase(), displayName.trim(), hashPassword(password), role); }
  finally { db.close(); }
}

export function setAdminActive(id: number, active: boolean) {
  const db = getDb();
  try { db.prepare("UPDATE admins SET active = ? WHERE id = ?").run(active ? 1 : 0, id); }
  finally { db.close(); }
}

export function checkLoginRateLimit(rateKey: string) {
  const db = getDb();
  const now = Date.now();
  try {
    const row = db.prepare("SELECT * FROM loginRateLimits WHERE rateKey = ?").get(rateKey) as { failures: number; firstFailureAt: number; blockedUntil: number } | undefined;
    if (!row) return { allowed: true, retryAfterSeconds: 0 };
    if (row.blockedUntil > now) return { allowed: false, retryAfterSeconds: Math.ceil((row.blockedUntil - now) / 1000) };
    if (now - row.firstFailureAt > 15 * 60 * 1000) db.prepare("DELETE FROM loginRateLimits WHERE rateKey = ?").run(rateKey);
    return { allowed: true, retryAfterSeconds: 0 };
  } finally { db.close(); }
}

export function recordLoginFailure(rateKey: string) {
  const db = getDb();
  const now = Date.now();
  try {
    const row = db.prepare("SELECT * FROM loginRateLimits WHERE rateKey = ?").get(rateKey) as { failures: number; firstFailureAt: number } | undefined;
    if (!row || now - row.firstFailureAt > 15 * 60 * 1000) db.prepare("INSERT OR REPLACE INTO loginRateLimits (rateKey, failures, firstFailureAt, blockedUntil) VALUES (?, 1, ?, 0)").run(rateKey, now);
    else { const failures = row.failures + 1; db.prepare("UPDATE loginRateLimits SET failures = ?, blockedUntil = ? WHERE rateKey = ?").run(failures, failures >= 5 ? now + 15 * 60 * 1000 : 0, rateKey); }
  } finally { db.close(); }
}

export function clearLoginRateLimit(rateKey: string) { const db = getDb(); try { db.prepare("DELETE FROM loginRateLimits WHERE rateKey = ?").run(rateKey); } finally { db.close(); } }

export function writeAudit(input: { adminId?: number; adminEmail: string; action: string; entityType: string; entityId?: string; metadata?: Record<string, unknown> }) {
  const db = getDb();
  try { db.prepare("INSERT INTO auditLogs (adminId, adminEmail, action, entityType, entityId, metadata) VALUES (?, ?, ?, ?, ?, ?)").run(input.adminId ?? null, input.adminEmail, input.action, input.entityType, input.entityId ?? "", JSON.stringify(input.metadata ?? {})); }
  finally { db.close(); }
}

export function getAuditLogs(limit = 100) { const db = getDb(); try { return db.prepare("SELECT * FROM auditLogs ORDER BY id DESC LIMIT ?").all(limit) as AuditLog[]; } finally { db.close(); } }
