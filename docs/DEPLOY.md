# Deployment Guide

## Options
- Docker (container-compatible)
- Vercel/Netlify (check Payload compatibility)
- Self-hosted (Node.js + MongoDB + S3)

## Required env vars
See `.env.example`

## First admin
Use Payload's first-user flow at `/admin`

## Notes
- Use managed MongoDB for production
- Use S3/R2 for uploads in production
- Configure SMTP, rate limiting, backups
