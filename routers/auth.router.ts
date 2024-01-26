import express, { Router } from "express"
import * as AuthControl from "./../controllers/auth.controller"
import * as profileControl from "./../controllers/profile.controller"

const authRouter : Router = express.Router()

authRouter.post("/login", AuthControl.login)
authRouter.post("/register", AuthControl.register)


export default authRouter