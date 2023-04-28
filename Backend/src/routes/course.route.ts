import express from 'express';
import { Request, Response} from 'express';
import { body, validationResult } from 'express-validator';

import * as courseController from '../controllers/courseController';

export const userRouter = express.Router();
export const courseRouter = express.Router();
export const usersRouter = express.Router();
export const loginRouter = express.Router();
export const legisterRouter = express.Router();

// POST: Create Course
courseRouter.post(
    '/', 
    body("name").isString(), 
    body("title").isString(),
    body("price").isInt(),
    body("authorId").isInt(),
    body("categoryId").isString(),
    body("revisedPrice").isInt(),
    body("thumbnail").isString(),
    body("description").isString(),

    async (request:Request, response: Response) => {
        
        const errors = validationResult(request);
        const authorId: number = parseInt(request.body.authorId)
        const categoryId: number = parseInt(request.body.categoryId)
        if(!errors.isEmpty()){
            return response.status(400).json({errors: errors.array()});
        }

        try {
            const course = request.body;
            const newUser = await courseController.createCourse(authorId, categoryId, course);
            return response.status(200).json(newUser);
        } catch(error: any){
            return response.status(401).json(error.message);
        }  
})

// GET: List all Courses in a category
courseRouter.get('/', body('catgoryId'), async (request:Request, response:Response) => {
    const errors = validationResult(request);
    const categoryId: number = parseInt(request.body.categoryId)
    if(!errors.isEmpty()){
        return response.status(400).json({errors: errors.array()});
    }

    try {
        const users = await courseController.getCoursesCategory(categoryId)
        return response.status(200).json(users);
    } catch (error: any) {
        return response.status(500).json(error.message)
    }    
})

// // GET: an Author by ID
// courseRouter.get('/:id',  async (request:Request, responce:Response) => {

//     const id: number = parseInt(request.params.id, 10);
    
//     try {
//         const user = await userController.getUser(id)
//         return user? 
//             responce.status(200).json(user) : 
//             responce.status(404).json("User not found")
//     } catch (error: any) {
//         return responce.status(500).json(error.message)
//     }    
// })

// // PUT: UPDATE an Author
// // Params: lastName, firstName
// courseRouter.put('/:id',  

//     body("firstName").isString(), 
//     body("lastName").isString(),

//     async (request: Request, response: Response) => {
//         const errors = validationResult(request);
//         const id: number = parseInt(request.params.id, 10)

//         if(!errors.isEmpty()){
//             return response.status(400).json({errors: errors.array()});
//         }
//         try {
//             const user = request.body
//             const updatedUser = await userController.updatedUser(user, id);
//             return response.status(200).json(updatedUser);
//         } catch(error: any){
//             return response.status(500).json(error.message);
//         }
//     }
// );

// // DELETE: Delete an Author
// // Params: id
// courseRouter.delete('/:id',  async (request: Request, response: Response) => {
        
//         const id: number = parseInt(request.params.id, 10)

//         try {
//             await userController.deleteUser(id);
//             return response.status(204).json({message:"User has been successfully deleted"});
//         } catch(error: any){
//             return response.status(500).json(error.message);
//         }
//     }
// );

