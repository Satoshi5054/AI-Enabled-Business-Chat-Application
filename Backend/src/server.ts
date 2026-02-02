//Main file that runs the backend server

import "dotenv/config"; 
import app from "./routes/app.js"

const PORT = process.env.BACKEND_PORT!;

app.listen(PORT,() => {
  console.log(`Server running on port ${PORT}`);
})
