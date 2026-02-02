//Schema for user authentication of sign-in and sign-up using Zod

import { z } from "zod"

export const registerSchema = z.object({
  email: z.string(),
  name: z.string().min(2),
  password: z.string().min(6)
})

export const loginSchema = z.object({
  email: z.string(),
  password: z.string().min(6)
})

export type RegisterInput = z.infer<typeof registerSchema>
export type LoginInput = z.infer<typeof loginSchema>
