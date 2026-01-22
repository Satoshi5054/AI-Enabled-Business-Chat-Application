import type {Request,Response} from "express"
import {prisma} from "../prisma/client.js"

export const createRoom = async (req:Request, res:Response)=>{
    const room = await prisma.chatRoom.create({
        data:{ name: req.body.name}
    })

    res.json(room)
}

export const getRooms = async (req:Request, res:Response)=>{
    const rooms = await prisma.chatRoom.findMany()
    res.json(rooms)
}