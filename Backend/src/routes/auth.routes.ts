import { Router } from "express"
import { register, login } from "../controller/auth.controller.js"
import { validate } from "../middlewares/validate.js"
import {registerSchema, loginSchema} from "../schema/auth.schema.js"

const router = Router()


router.post("/register",validate(registerSchema),register)


router.post("/login",validate(loginSchema),login)

export default router
