import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET_KEY

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET_KEY is not defined")
}

export const hashPassword = (password:string) =>
    bcrypt.hash(password,10)

export const comparePassword = (password:string, hash:string) =>
    bcrypt.compare(password,hash)

export const signToken = (userId:string) =>
    jwt.sign({ userId }, JWT_SECRET,{
        expiresIn: "7d"
    })