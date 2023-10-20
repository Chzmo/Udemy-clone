import { Request, Response } from "express";

const jwt = require('jsonwebtoken');

import { db } from "../src/utils/db.server";

export const authMiddleware =  async (request: Request, response: Response, next:any) => {
    const userId: string = request.body.userId
    let token: string

    if (request.headers.authorization && request.headers.authorization.startsWith('Bearer')){
        token = request.headers.authorization.split(' ')[1];

        try {
            const decodeId: any = await jwt.verify(token, process.env.JWT_SECRET).id
            const user = await db.user.findUnique({
                where:{
                    id:decodeId
                },
                select:{
                    id:true
                }
            })

            if(user?.id && (user.id === userId)){
                next()
            }else{
                response.status(401);
                response.send({message:"Unauthorized"})
            }
            
        } catch (error) {
            response.status(401);
            response.send(error)
        }
    }else{
        response.status(401);
        response.send();
    }
}