import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import { userRouter, usersRouter, loginRouter, legisterRouter } from './routes/auth/auth.router';
import { authMiddleware } from '../middleware/authMiddleware';
import { Request, Response } from 'express';

dotenv.config();

if (!process.env.PORT){
    process.exit(1);
}

const PORT : number = parseInt(process.env.PORT as string, 10)

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter)
app.use("/api/users", usersRouter)
app.use("/api/register", legisterRouter)
app.use("/api/login", authMiddleware, loginRouter)
app.use("/api/test", authMiddleware, (requse:Request, responce:Response)=>{
    return responce.send({message:"hello"})
}).post('/')

app.listen(PORT, ()=>{
    console.log('Listening on port ', PORT)
})



