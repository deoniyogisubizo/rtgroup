import type { CollectionConfig } from 'payload'

export const RTApplications: CollectionConfig = {
  slug: 'rt-applications',
  admin: {
    defaultColumns: ['name', 'createdAt'],
  },
  access: {
    create: () => true,
    read: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'reviewer',
    update: ({ req: { user } }) => user?.role === 'admin' || user?.role === 'reviewer',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text', required: true },
    { name: 'motivation', type: 'textarea', required: true },
    { name: 'accommodationNeeded', type: 'checkbox', defaultValue: false },
    { name: 'accommodationDetails', type: 'textarea' },
    { name: 'status', type: 'select', options: ['received', 'reviewing', 'accepted', 'rejected'], defaultValue: 'received' },
    { name: 'retentionDate', type: 'date', admin: { readOnly: true } },
  ],
}
