import express, { Router } from "express"
import * as profileControl from "./../controllers/profile.controller"

const ProRouter : Router = express.Router()

ProRouter.post("/profile", profileControl.Userprofile)

export default ProRouter