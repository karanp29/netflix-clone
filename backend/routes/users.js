import express from "express"
const userRouter = express.Router()
import { loginUser, registerUser } from "../controllers/users"

userRouter
.post("/login", loginUser)
.post("/register", registerUser)

//logout handle 

export { userRouter };