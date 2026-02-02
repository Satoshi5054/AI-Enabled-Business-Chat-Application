//Middleware to validate request bodies of correct types using Zod schemas

import type { Request, Response, NextFunction } from "express"
import type { ZodSchema } from "zod"

export const validateBody = (schema: ZodSchema) => 
    (req : Request, res : Response, next : NextFunction) =>{
        const parsed = schema.safeParse(req.body)

        if(!parsed.success)
            return res.status(400).json({ error: parsed.error })

        req.body = parsed.data
        next()
    }
