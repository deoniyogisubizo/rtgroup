import { z } from 'zod'

export const trainingApplicationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  program: z.string().min(1),
  motivation: z.string().min(10).max(1000),
})

export const rtApplicationSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  motivation: z.string().min(10).max(1000),
  accommodationNeeded: z.boolean().optional(),
  accommodationDetails: z.string().max(500).optional(),
})

export const inquirySchema = z.object({
  type: z.enum(['service','sponsorship','partner','mentor','accommodation','multimedia','general']),
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(20).optional(),
  message: z.string().min(10).max(2000),
})
