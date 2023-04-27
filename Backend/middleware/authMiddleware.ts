import { Request, Response } from "express";
import { db } from "../src/utils/db.server";
const jwt = require('jsonwebtoken');



const authMiddleware =  async (request: Request, response: Response, next) => {
    let token: string

    if (request.headers.authorization && request.headers.authorization.startsWith('Bearer')){
        token = request.headers.authorization.split(' ')[1];

        const decode: string = jwt.verify(token, process.env.JWT_SECRET)
    }
}