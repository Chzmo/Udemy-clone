import { Request, Response, response } from 'express';
import express from 'express';
import { body, validationResult } from 'express-validator';

import * as authorService from '../../controllers/auth/userController';

export const userRouter = express.Router();
export const usersRouter = express.Router();

// GET: List all Authors
usersRouter.get('/',async (request:Request, responce:Response) => {
    try {
        const users = await authorService.listUsers()
        return responce.status(200).json(users);
    } catch (error: any) {
        return responce.status(500).json(error.message)
    }    
})

// GET: an Author by ID
userRouter.get('/:id',async (request:Request, responce:Response) => {
    const id: number = parseInt(request.params.id, 10);
    
    try {
        const user = await authorService.getUser(id)
        return user? 
            responce.status(200).json(user) : 
            responce.status(404).json("User not found")
    } catch (error: any) {
        return responce.status(500).json(error.message)
    }    
})

// POST: Create an Author
// Params: lastName, firstName
userRouter.post(
    '/', 
    body("firstName").isString(), 
    body("lastName").isString(),
    async (request: Request, response: Response) => {
        const errors = validationResult(request);
        if(!errors.isEmpty()){
            return response.status(400).json({errors: errors.array()});
        }
        try {
            const user = request.body
            const newUser = await authorService.registerUser(user);
            return response.status(200).json(newUser);
        } catch(error: any){
            return response.status(500).json(error.message);
        }
    }
);

// PUT: UPDATE an Author
// Params: lastName, firstName
userRouter.put(
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
            const user = request.body
            const updatedUser = await authorService.updatedUser(user, id);
            return response.status(200).json(updatedUser);
        } catch(error: any){
            return response.status(500).json(error.message);
        }
    }
);

// DELETE: Delete an Author
// Params: id
userRouter.delete(
    '/:id', 
    async (request: Request, response: Response) => {
        
        const id: number = parseInt(request.params.id, 10)

        try {
            await authorService.deleteUser(id);
            return response.status(204).json({message:"User has been successfully deleted"});
        } catch(error: any){
            return response.status(500).json(error.message);
        }
    }
);

