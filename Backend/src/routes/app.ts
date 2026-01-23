import express  from "express"
import cors from "cors"
import routes from "./index.js"

const app = express()

app.use(cors({
    origin : "https://localhost:"+process.env.FRONTEND_PORT,
    credentials:true 
}))
app.use(express.json())

app.use("/api",routes)

export default app