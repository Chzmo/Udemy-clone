import { Request, Response } from "express";
import { db } from "../src/utils/db.server";
const jwt = require('jsonwebtoken');



export const authMiddleware =  async (request: Request, response: Response, next:any) => {
    let token: string

    if (request.headers.authorization && request.headers.authorization.startsWith('Bearer')){
        token = request.headers.authorization.split(' ')[1];

        const decodeId: any = jwt.verify(token, process.env.JWT_SECRET).id

        try {
            const user = await db.user.findUnique({
                where:{
                    id:parseInt(decodeId)
                },
                select:{
                    email:true,
                }
            })

            if(user?.email){
                next()
            }else{
                response.status(401);
                response.send()
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