import express, { Router } from "express"
import * as ctrControl from "./../controllers/ctr.controller"


const ctrRouter : Router = express.Router()

ctrRouter.post("/month", ctrControl.bymonth)


export default ctrRouter