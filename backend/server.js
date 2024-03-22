import express from "express"
import 'dotenv/config'
const app = express()

import { userRouter } from "./routes/users";

const PORT = process.env.PORT || 3000;


app.use("/user", userRouter)

app.listen(PORT,(req,res) =>{
  console.log(`server is running at ${PORT}`)
})