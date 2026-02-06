import type {Request,Response} from "express"
import {prisma} from "../prisma/client.js"                                                        //Prisma client instance for database operations
import { hashPassword, verifyPassword, signToken, verifyToken } from "../middlewares/auth.js"    //middleware to encrpt passwords and sign JWT tokens and to verify them

//Create a new user account on database and return JWT token
export const userRegistration = async (req : Request, res : Response) => {
    const { email, name, password } = req.body;

    // 1. Check if the user already exists
    const existingUser = await prisma.user.findUnique({
        where: { userEmail: email }
    });

    if (existingUser) {
        return res.status(409).json({ message: "User with this email already exists" });
    }

    // 2. If not then create the user
    const createUser = await prisma.user.create({
        data: {
            userEmail: email,
            userName: name,
            userPassword: await hashPassword(password)
        }
    })

    // 3. Return JWT token
    res.json({token: signToken(createUser.userId)})
}

//Login the user 
export const userLogin = async (req : Request, res : Response) => {
    const authHeader = req.headers.authorization

    // 1. Token-based Login
    if (authHeader?.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];
        try {
            const decoded = verifyToken(token);
            const user = await prisma.user.findUnique({
                where: { userId: decoded.user_id },
                select: { userId: true, userEmail: true, userName: true } 
            });

            if (user) {
                return res.json({ 
                    message: "Login successful via token", 
                    token: signToken(user.userId), // Refresh the token
                    user 
                });
            }
        } catch (err) {
            // Token was invalid/expired, proceed to password check
            console.log("Token invalid, falling back to credentials.");
        }
    }

    // 2. Email/Password-based Login
    const user = await prisma.user.findUnique({
        where: { userEmail: req.body.email }
    })

    if(!user) 
        return res.status(401).json({ message: "Invalid email or password" })

    const validPassword = await verifyPassword(req.body.password, user.userPassword)

    if(!validPassword) 
        return res.status(401).json({ message: "Invalid email or password" })

    res.json({
        message: "Login successful via credentials", 
        token: signToken(user.userId),
        user: { id: user.userId, email: user.userEmail, name: user.userName }
    })
}