import "server-only";

import Database from "better-sqlite3";
import { chmodSync, existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from "fs";
import path from "path";
import { decryptJson, encryptJson } from "@/lib/security-crypto";

export type ContactRecord = {
  id: number;
  createdAt: string;
  fullName: string;
  phone: string;
  email: string;
  company: string;
  service: string;
  method: string;
  message: string;
  status: "new" | "contacted" | "closed";
};

const dbDir = path.join(process.cwd(), "data");
const dbFile = path.join(dbDir, "contacts.sqlite");

function getDb() {
  mkdirSync(dbDir, { recursive: true });
  const db = new Database(dbFile);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      createdAt TEXT NOT NULL,
      fullName TEXT NOT NULL,
      phone TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT NOT NULL DEFAULT '',
      service TEXT NOT NULL,
      method TEXT NOT NULL,
      message TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'new',
      encryptedData TEXT
    );
  `);
  const columns = db.prepare("PRAGMA table_info(contacts)").all() as { name: string }[];
  if (!columns.some((column) => column.name === "encryptedData")) db.exec("ALTER TABLE contacts ADD COLUMN encryptedData TEXT");
  try { chmodSync(dbFile, 0o600); } catch { /* Windows does not support POSIX mode bits. */ }
  migrateLegacyCsv(db);
  return db;
}

function parseCsvLine(line: string) {
  const cells: string[] = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"' && line[i + 1] === '"' && quoted) { cell += '"'; i += 1; }
    else if (char === '"') quoted = !quoted;
    else if (char === "," && !quoted) { cells.push(cell); cell = ""; }
    else cell += char;
  }
  cells.push(cell);
  return cells;
}

function migrateLegacyCsv(db: any) {
  const csvPath = path.join(dbDir, "contacts.csv");
  if (!existsSync(csvPath)) return;
  const raw = readFileSync(csvPath, "utf8");
  const lines = raw.split(/\r?\n/).filter(Boolean);
  if (lines.length < 2) return;
  const count = (db.prepare("SELECT COUNT(*) AS count FROM contacts").get() as { count: number }).count;
  if (count > 0) return;
  const rows = lines.slice(1).map(parseCsvLine).filter((row) => row.length >= 8);
  const insert = db.prepare(`INSERT INTO contacts (createdAt, fullName, phone, email, company, service, method, message, encryptedData) VALUES (?, '', '', '', '', '', '', '', ?)`);
  const tx = db.transaction(() => {
    for (const row of rows) {
      const [createdAt, fullName, phone, email, company, service, method, message] = row;
      insert.run(createdAt || new Date().toISOString(), encryptJson({ fullName, phone, email, company, service, method, message }));
    }
  });
  tx();
  const encryptedBackup = path.join(dbDir, "contacts.csv.enc");
  writeFileSync(encryptedBackup, encryptJson({ migratedAt: new Date().toISOString(), csv: raw }), { encoding: "utf8", mode: 0o600 });
  unlinkSync(csvPath);
}

export function createContact(input: Omit<ContactRecord, "id" | "createdAt" | "status">) {
  const db = getDb();
  try {
    db.prepare(`
      INSERT INTO contacts (createdAt, fullName, phone, email, company, service, method, message, encryptedData)
      VALUES (@createdAt, '', '', '', '', '', '', '', @encryptedData)
    `).run({ createdAt: new Date().toISOString(), encryptedData: encryptJson(input) });
  } finally {
    db.close();
  }
}

export function getContacts(limit = 100): ContactRecord[] {
  const db = getDb();
  try {
    const rows = db.prepare("SELECT * FROM contacts ORDER BY id DESC LIMIT ?").all(limit) as (ContactRecord & { encryptedData?: string | null })[];
    return rows.map((row) => {
      if (!row.encryptedData) return row;
      const decrypted = decryptJson<Omit<ContactRecord, "id" | "createdAt" | "status">>(row.encryptedData);
      return { ...row, ...decrypted };
    });
  } finally {
    db.close();
  }
}

export function getContactCount() {
  const db = getDb();
  try {
    return Number((db.prepare("SELECT COUNT(*) AS count FROM contacts").get() as { count: number }).count);
  } finally {
    db.close();
  }
}

export function updateContactStatus(id: number, status: ContactRecord["status"]) {
  const db = getDb();
  try {
    db.prepare("UPDATE contacts SET status = ? WHERE id = ?").run(status, id);
  } finally {
    db.close();
  }
}
