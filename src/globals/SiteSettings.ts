import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
    update: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    { name: 'siteName', type: 'text', defaultValue: 'RTGroup' },
    { name: 'email', type: 'email' },
    { name: 'phone', type: 'text' },
    { name: 'whatsapp', type: 'text' },
  ],
}
