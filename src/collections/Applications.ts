import type { CollectionConfig } from 'payload'

export const Applications: CollectionConfig = {
  slug: 'applications',
  admin: {
    defaultColumns: ['name', 'program', 'createdAt'],
  },
  access: {
    create: () => true, // server action only in practice
    read: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'reviewer',
    update: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'reviewer',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text', required: true },
    { name: 'program', type: 'text', required: true },
    { name: 'motivation', type: 'textarea', required: true },
    { name: 'status', type: 'select', options: ['received', 'reviewing', 'accepted', 'rejected'], defaultValue: 'received' },
    { name: 'retentionDate', type: 'date', admin: { readOnly: true } },
  ],
}
