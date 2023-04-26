import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

import { authorRouter } from './routes/author.router';

dotenv.config();

if (!process.env.PORT){
    process.exit(1);
}

const PORT : Number = parseInt(process.env.PORT as string, 10)

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/authors", authorRouter)

app.listen(PORT, ()=>{
    console.log('Listening on port ', PORT || 5000)
})