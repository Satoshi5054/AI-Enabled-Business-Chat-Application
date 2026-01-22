import type {Request,Response} from "express"
import { prisma } from "../prisma/client.js"


export const sendMessage = async (req:Request, res:Response) => {
    if (!req.senderId) 
    return res.status(401).json({ error: "Unauthorized" })
  
  const message = await prisma.message.create({
    data: {
      content: req.body.content,
      roomId: req.body.roomId,
      senderId: req.senderId
    }
  })

  res.json(message)
}

export const getMessages = async (req:Request, res:Response) => {
  const roomId = req.params.roomId

  if (typeof roomId !== "string") {
    return res.status(400).json({ error: "Invalid roomId" })
  }

  const messages = await prisma.message.findMany({
    where: { roomId },
    orderBy: { createdAt: "asc" }
  })

  res.json(messages)
}
