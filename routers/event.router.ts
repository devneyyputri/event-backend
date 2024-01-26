import express, { Router } from "express"
import * as AuthControl from "./../controllers/auth.controller"
import * as EventControl  from "./../controllers/event.controller"
import { verifyToken, adminGuard, adminUser} from "../middlewares/auth.middleware"

const eventRouter : Router = express.Router()

eventRouter.post("/create",verifyToken, adminGuard, EventControl.createEvent)
eventRouter.get("/getall",EventControl.getEvent)
eventRouter.post("/getone", EventControl.getOneEvent)
eventRouter.post("/getmyevent", EventControl.getmyevent)



export default eventRouter