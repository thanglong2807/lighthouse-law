import crypto from "node:crypto";

console.log(`DATA_ENCRYPTION_KEY=${crypto.randomBytes(32).toString("base64")}`);
