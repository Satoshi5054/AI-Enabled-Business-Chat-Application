//Handles password hashing and JWT token generation and verification
//Note: Ensure to set JWT_SECRET_KEY in your environment variables for token signing and verification
   
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET_KEY!

export const hashPassword = async (password:string) =>{
    return await bcrypt.hash(password,10)
}

export const verifyPassword = async (password:string, hash:string) =>{
    return bcrypt.compare(password,hash)
}


export const signToken = (user_id:string) =>{
    return jwt.sign({ user_id }, JWT_SECRET, { expiresIn: "7d" })
}

export const verifyToken =  (token : string) => {
    try {
        return jwt.verify(token, JWT_SECRET) as { user_id: string };
    } catch (error) {
        throw new Error("Invalid or expired token");
    }
}