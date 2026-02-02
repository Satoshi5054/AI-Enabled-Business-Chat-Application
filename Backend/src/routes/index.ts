//Main router file that combines all route modules

import {Router} from 'express'
import userAuthRoutes from './users/user.auth.js'

const router = Router()

router.use('/auth',userAuthRoutes) //User authentication routes with sign-in and sign-up

export default router