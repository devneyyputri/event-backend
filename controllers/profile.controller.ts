import express, {Response, Request} from "express";
import { PrismaClient } from "@prisma/client";


export async function Userprofile (req : Request, res : Response){

    try{
        const prisma = new PrismaClient();
        const {userID} = req.body
        const data = await prisma.user.findUnique({
            where : {id : userID},
            include :{
                eventcreate : {
                    include :{
                        ctr :true
                    }
                },
                transaction : true
            }
        })
        return res.status(200).send({
            message : "success",
            profile : data
        })

    }
    catch(error){
        return res.status(500).send({
            message : JSON.stringify(error),
            data : req.body
        })
    }
    
}