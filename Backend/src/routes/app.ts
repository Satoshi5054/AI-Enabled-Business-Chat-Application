//Express app configuration with CORS and JSON parsing middleware

import express  from "express"
import cors from "cors"
import routes from "./index.js"

const app = express()

app.use(cors({
    origin : "http://localhost:"+process.env.FRONTEND_PORT,
    credentials:true 
}))
app.use(express.json())

app.use("/v1",routes) //Main website route

export default app