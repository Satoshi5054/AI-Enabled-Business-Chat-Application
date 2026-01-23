import { Router } from "express"
import {sendMessage,getMessages} from "../controller/message.controller.js"

import { auth } from "../middlewares/auth.js"
import { validate } from "../middlewares/validate.js"
import { sendMessageSchema } from "../schema/message.schema.js"

const router = Router()


router.post("/",auth,validate(sendMessageSchema),sendMessage)


router.get("/:roomId",auth,getMessages)

export default router
