import { Router } from "express"
import { userRegistration, userLogin } from "../../controller/auth.controller.js"    //controller functions for user registration and login
import { validateBody } from "../../middlewares/schema.validate.js"                 //validation middleware to check request body is valid as per schema
import { registerSchema, loginSchema } from "../../schemas/auth.schema.js"         //Zod schemas for user registration and login

const router = Router()

//User sign-in and sign_up routes
router.post('/register',validateBody(registerSchema), userRegistration)
router.post('/login', validateBody(loginSchema), userLogin)

export default router