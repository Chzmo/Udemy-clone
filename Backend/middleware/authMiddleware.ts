import { Request, Response } from "express";
import { db } from "../src/utils/db.server";
import { any } from "zod";
const jwt = require('jsonwebtoken');



export const authMiddleware =  async (request: Request, response: Response, next:any) => {
    let token: string

    if (request.headers.authorization && request.headers.authorization.startsWith('Bearer')){
        token = request.headers.authorization.split(' ')[1];

        const decode: number = jwt.verify(token, process.env.JWT_SECRET)

        try {
            const user = await db.user.findUnique({
                where:{
                    id : decode
                },
                select:{
                    email:true,
                }
            })

            if(user?.email){
                next()
            }
        } catch (error) {
            response.status(401);
            throw new Error('Not authorized')
        }
    }else{
        response.status(401);
        response.send();
    }
}