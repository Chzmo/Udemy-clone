import { Request, Response, response } from 'express';
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

// GET: an Author by ID
authorRouter.get('/:id',async (request:Request, responce:Response) => {
    const id: number = parseInt(request.params.id, 10);
    
    try {
        const author = await authorService.getAuthor(id)
        return author ? 
            responce.status(200).json(author) : 
            responce.status(404).json("Author not found")
    } catch (error: any) {
        return responce.status(500).json(error.message)
    }    
})

// POST: Create an Author
// Params: lastName, firstName
authorRouter.post(
    '/', 
    body("firstName").isString(), 
    body("lastName").isString(),
    async (request: Request, response: Response) => {
        const errors = validationResult(request);
        if(!errors.isEmpty()){
            return response.status(400).json({errors: errors.array()});
        }
        try {
            const author = request.body
            const newAuthor = await authorService.createAuthor(author);
            return response.status(200).json(newAuthor);
        } catch(error: any){
            return response.status(500).json(error.message);
        }
    }
);

// PUT: UPDATE an Author
// Params: lastName, firstName
authorRouter.put(
    '/:id', 
    body("firstName").isString(), 
    body("lastName").isString(),
    async (request: Request, response: Response) => {
        const errors = validationResult(request);
        const id: number = parseInt(request.params.id, 10)

        if(!errors.isEmpty()){
            return response.status(400).json({errors: errors.array()});
        }
        try {
            const author = request.body
            const updatedAuthor = await authorService.updatedAuthor(author, id);
            return response.status(200).json(updatedAuthor);
        } catch(error: any){
            return response.status(500).json(error.message);
        }
    }
);


// DELETE: Delete an Author
// Params: id
authorRouter.delete(
    '/:id', 
    async (request: Request, response: Response) => {
        
        const id: number = parseInt(request.params.id, 10)

        try {
            await authorService.deleteAuthor(id);
            return response.status(204).json("Author has been successfully deleted");
        } catch(error: any){
            return response.status(500).json(error.message);
        }
    }
);

