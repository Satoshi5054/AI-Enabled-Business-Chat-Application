import { z } from "zod"

export const sendMessageSchema = z.object({
  content: z.string().min(1),
  roomId: z.uuid()
})

export type SendMessageInput = z.infer<typeof sendMessageSchema>
