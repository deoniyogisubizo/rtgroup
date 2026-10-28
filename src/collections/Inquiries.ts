import type { CollectionConfig } from 'payload'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  admin: {
    defaultColumns: ['type', 'email', 'createdAt'],
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'reviewer',
    update: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'reviewer',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    { name: 'type', type: 'select', options: ['service', 'sponsorship', 'partner', 'mentor', 'accommodation', 'multimedia', 'general'], required: true },
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'message', type: 'textarea', required: true },
    { name: 'status', type: 'select', options: ['new', 'in-progress', 'resolved'], defaultValue: 'new' },
    { name: 'retentionDate', type: 'date', admin: { readOnly: true } },
  ],
}
