import express, {Response, Request} from "express";
import { PrismaClient } from "@prisma/client";


export async function bymonth(req : Request , res :Response){
    const prisma = new PrismaClient()
    try{
        const {eventID} = req.body
        const myevents = await prisma.cTR.findMany({
            where:{eventid : eventID}
        })
        if (myevents){
            const month = await prisma.cTR.groupBy({
                where:{
                    eventid : eventID
                },
                by: ['yearmonth'],
                _sum:{
                    clicks : true,
                    bought :true
                }
            })
            const year = await prisma.cTR.groupBy({
                where:{
                    eventid : eventID
                },
                by: ['year'],

                _sum:{
                    clicks : true,
                    bought :true
                }
            })
            const day = await prisma.cTR.groupBy({
                where:{
                    eventid : eventID
                },
                by: ['ymd'],

                _sum:{
                    clicks : true,
                    bought :true
                }
            })
            return res.status(200).send({
                message : "ok",
                year : year,
                month : month,
                day : day
            
            })
        }else{            
    }

    }
    catch(error){
        return res.status(500).send({
            message : JSON.stringify(error),
            data : "unexpected error"
        })
    }
}
