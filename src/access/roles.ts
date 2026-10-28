import type { Access } from 'payload'

export const isAdmin: Access = ({ req: { user } }) => user?.role === 'admin'
export const isEditor: Access = ({ req: { user } }) => user?.role === 'editor' || user?.role === 'admin'
export const isReviewer: Access = ({ req: { user } }) => user?.role === 'reviewer' || user?.role === 'admin'
