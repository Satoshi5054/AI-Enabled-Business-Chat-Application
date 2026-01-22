import { z } from "zod"

export const createRoomSchema = z.object({
  name: z.string().min(2)
})

export type CreateRoomInput =
  z.infer<typeof createRoomSchema>
