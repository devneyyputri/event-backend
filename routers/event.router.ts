import express, { Router } from "express"
import * as AuthControl from "./../controllers/auth.controller"
import * as EventControl  from "./../controllers/event.controller"

const eventRouter : Router = express.Router()

eventRouter.post("/create", EventControl.createEvent)
eventRouter.get("/getall",EventControl.getEvent)
eventRouter.post("/getone", EventControl.getOneEvent)



export default eventRouter