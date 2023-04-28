import express, { Request, Response } from 'express';
import { validationResult, body } from 'express-validator';

import * as categoryController from '../controllers/categoryController';

export const courseRouter = express.Router();

// Auth: Category Routes
courseRouter.post('/', body("title").isString(),
    async (request:Request, response: Response) => {
        
    const errors = validationResult(request);

    if(!errors.isEmpty()){
        return response.status(400).json({errors: errors.array()});
    }
    try {
        const category = await categoryController.createCategory(request.body.title);
        return response.status(200).json(category);
    } catch(error){
        return response.status(401).json(error);
    }  
})