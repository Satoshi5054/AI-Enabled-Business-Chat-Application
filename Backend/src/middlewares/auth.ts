
import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET_KEY
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET_KEY is not defined")
}

interface JwtUserPayload {
  userId: string
}

export const auth = (req:Request,res:Response,next:NextFunction) =>{
    const header = req.get("authorization")
    if(!header) return res.sendStatus(401)
    
    const token = header.split(" ")[1]
    if (!token) return res.sendStatus(401)

    try{
        const decoded = jwt.verify(token,JWT_SECRET) as JwtUserPayload
        req.senderId = decoded.userId
        next()
    }catch{
        res.sendStatus(401)
    }
}