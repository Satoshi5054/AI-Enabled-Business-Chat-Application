import {z} from "zod"

export const createRoomSchema = z.object({
    name: z.string().min(2)
})

export const sendMessageSchema = z.object({
    content: z.string().min(1),
    roomId: z.uuid()
})