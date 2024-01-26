import express, {Response, Request} from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()


export async function getSecretP( req : Request, res :Response) {
    return res.status(200).send({
        message : "OK",
        data : [
            {
                name: "product user 1",
                price: 4_000_000,
                author: "Toby"
            }, {
                name: "product user 2",
                price: 6_000_000,
                author: "Harry"
            }
        ]
    })
}
export async function getUserP( req : Request, res :Response) {
    return res.status(200).send({
        message : "OK",
        data :[
            {
                name: "product user 1",
                price: 4_000_000,
                author: "Toby"
            }, {
                name: "product user 2",
                price: 6_000_000,
                author: "Harry"
            }
        ]
    })
}

export async function getP( req : Request, res :Response) {
    return res.status(200).send({
        message : "OK",
        data : [
            {
                name: "product user 1",
                price: 4_000_000,
                author: "Toby"
            }, {
                name: "product user 2",
                price: 6_000_000,
                author: "Harry"
            }
        ]
    })
}