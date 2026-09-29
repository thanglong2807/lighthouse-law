import crypto from "node:crypto";

const password = process.argv[2];
if (!password) {
  console.error('Usage: node scripts/generate-admin-hash.mjs "your-password"');
  process.exit(1);
}

const salt = crypto.randomBytes(16).toString("hex");
const derived = crypto.scryptSync(password, salt, 64).toString("hex");
console.log(`ADMIN_PASSWORD_HASH=scrypt:${salt}:${derived}`);
