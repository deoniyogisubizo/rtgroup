import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: ({ req: { user } }) => user?.role === 'admin',
    read: ({ req: { user } }) => user?.role === 'admin' || user?.id === user?.id, // simplified; admin can manage
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
        { label: 'Reviewer', value: 'reviewer' },
      ],
      defaultValue: 'editor',
      required: true,
      access: {
        update: ({ req: { user } }) => user?.role === 'admin',
      },
    },
  ],
}
