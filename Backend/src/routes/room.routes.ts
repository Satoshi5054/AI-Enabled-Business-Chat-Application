import { Router } from "express"
import {createRoom,getRooms} from "../controller/room.controller.js"

import { auth } from "../middlewares/auth.js"
import { validate } from "../middlewares/validate.js"
import { createRoomSchema } from "../schema/room.schema.js"

const router = Router()

router.post("/",auth,validate(createRoomSchema),createRoom)

router.get("/",auth,getRooms)

export default router
