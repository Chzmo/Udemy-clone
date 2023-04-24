import type { Request, Response } from 'express';
import express from 'express';
import { body, validationResult } from 'express-validator';

import * as authorService from './author.service';

export const authorRouter = express.Router();

// GET: List all Authors
authorRouter.get('/',async (request:Request, responce:Response) => {
    try {
        const authors = await authorService.listAuthors()
        return responce.status(200).json(authors);
    } catch (error: any) {
        return responce.status(500).json(error.message)
    }    
})
