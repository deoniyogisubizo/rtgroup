# Architecture Decision Document

- Routing/locales: next-intl with locales en (default), rw, fr; public pages under [locale], admin at /admin (outside locale routing). Root / redirects to /en.
- Payload CMS: embedded in Next.js, MongoDB via mongooseAdapter, lexical editor.
- Media: local for dev, S3/R2 for production.
- Rate limiting: Upstash/Redis with in-memory fallback for dev/tests only.
- Email: Nodemailer (SMTP).
- Retention: scheduled job to be configured per deployment; endpoint protected.
- Deployment: container-compatible, managed MongoDB + S3-compatible storage recommended.
