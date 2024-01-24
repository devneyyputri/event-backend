import express, {Response, Request} from "express";
import {genSalt, hash, compare} from "bcrypt" 
import { PrismaClient } from "@prisma/client";
import { JwtPayload, sign } from "jsonwebtoken";
import { error } from "console";

type User ={
    email : String;
    name : String;
    password : String;
    role : String;
};

const prisma = new PrismaClient();



export async function register (req: Request, res : Response){
    try{
        const {name, email , password, role, refcode} = req.body
        let disc = 0

        const finduser = await prisma.user.findFirst({
            where :{
                email: email
            },
        })
        if (finduser){
            return res.status(400).send({
                message : "Email has already registerd",
                data : {}
            })
        }
        if (refcode){
            const findcode= await prisma.user.findFirst({
                where :{
                    referalC: refcode
                },
            })
            if (!findcode){
                return res.status(400).send({
                    message : "Code does not exist",
                    data : refcode
                })
            }else{
                const refID = findcode.id
                const updatepoints = findcode.points + 10000
                const givePoints = await prisma.user.update({
                    where:{id: refID},
                    data : {
                        points : updatepoints
                    }

                })
                console.log(givePoints )
                disc += 10
            }

        }

        

        const salt = await genSalt(10)
        const hashedPass = await hash (password, salt)

        const createUser = await prisma.user.create(
            {
                data :{
                    referalC: "--------",
                    name : name,
                    email : email,
                    password : hashedPass,
                    role : role,
                    discount : disc,
                    created_at : new Date()
                }
            }
        )
        const code = "USR" +  createUser.id.toString().padStart(5, '0')
        const updatereferralC = await prisma.user.update({
            where :{
                id : createUser.id
            },
            data :{
                referalC : code
            }
        })

        return res.status(200).send({
            message : "OK",
            data : updatereferralC
        })

    }catch(err){
        return res.status(500).send({
            message :JSON.stringify(err),
            data : []
        })

    }

}

export async function login( req : Request, res :Response){

    try{
        const {email, password} = req.body
        const finduser = await prisma.user.findFirst({
            where :{
                email: email
            },
            include :{
                transaction :true,
                eventcreate :true
            }
        })
        if (!finduser){
            return res.status(404).send({
                error :{
                message : "Invalid email",
                data : {
                    email :email,
                    password : password
                }
            }
            })
            
        }
        const isValidUser = await compare(password, finduser.password)

        if (!isValidUser){
            return res.status(404).send({
                error :{
                message : "Invalid password",
                data : {
                    password : password,
                    finduserpassword : finduser.password
                }
            }
            })
        }
        const jwtpayload = {email : email, role : finduser.role};
        const token = sign(jwtpayload, "your-key", {expiresIn : "1h"})

        
        return res.status(200).send({
            message : "OK",
            data : finduser, 
            token :token
            
        })

    }catch(err){
        const {email , password} = req.query
        return res.status(500).send({
            error :{
            message :JSON.stringify(err),
            data : JSON.stringify(req.body)
    
        }
        })

    }

}