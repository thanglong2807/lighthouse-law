# Security setup

Before running production, copy `.env.example` to `.env.local` and set unique values:

```text
node scripts/generate-admin-hash.mjs "a-long-password"
node scripts/generate-encryption-key.mjs
```

`ADMIN_EMAIL` and `ADMIN_PASSWORD_HASH` seed the first owner account. After the first login, create individual accounts for SEO staff at `/vi/admin/users`; do not share the owner credentials.

The application stores customer contact fields encrypted with AES-256-GCM in SQLite. New submissions are no longer written to plaintext CSV. If `data/contacts.csv` from an older version exists, the first contact-store access migrates it into encrypted SQLite and writes `data/contacts.csv.enc` before removing the plaintext file.

Keep `data/`, `.env.local`, and encrypted backups outside Git. On Linux, the application applies mode `0600` to runtime database and encrypted backup files. Configure the reverse proxy to terminate TLS and pass `X-Forwarded-Proto: https`; production requests are redirected to HTTPS and receive HSTS.

Backups must be encrypted, access-controlled, and tested for restoration. Never expose the `data/` directory through a static web root.
