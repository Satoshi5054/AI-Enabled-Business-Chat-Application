//Main file that runs the backend server
//Note: Ensure to set JWT_SECRET_KEY in your environment variables for token signing and verification

import "dotenv/config"
import http from "http"

import app from "./routes/app.js"
import { initSocket } from "./sockets/index.js"

const PORT = process.env.BACKEND_PORT!

const server = http.createServer(app)
initSocket(server)

app.listen(PORT,() => {
  console.log(`Server running on port ${PORT}`)
})
