import type {Request,Response} from "express"
import {prisma} from "../prisma/client.js"
import { hashPassword, comparePassword, signToken } from "../utils/auth.js"

export const register = async(req:Request, res:Response)=>{
    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            password: await hashPassword(req.body.password)
        }
    })

    res.json({token: signToken(user.id)})
}

export const login =  async (req:Request, res:Response)=>{
    const user = await prisma.user.findUnique({
        where: {email: req.body.email}
    })

    if(!user)
        return res.status(401).json({error: "Invalid Credentials"})

    const valid = await comparePassword(req.body.password,user.password)

    if(!valid)
        return res.status(401).json({error: "Invalid Credentials"})

    res.json({token: signToken(user.id)})
}
