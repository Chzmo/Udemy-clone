import express from 'express';
import { Request, Response} from 'express';
import { body, validationResult } from 'express-validator';

import * as courseController from '../controllers/courseController';
import { authMiddleware } from '../../middleware/authMiddleware';

export const courseRouter = express.Router();
export const coursesRouter = express.Router();

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

    authMiddleware,

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
coursesRouter.get('/:categoryId',  async (request:Request, response:Response) => {
    const errors = validationResult(request);
    const categoryId: number = parseInt(request.params.categoryId, 10);

    if(!errors.isEmpty()){
        return response.status(400).json({errors: errors.array()});
    }

    try {
        const users = await courseController.getCoursesByCategory(categoryId)
        return response.status(200).json(users);
    } catch (error: any) {
        return response.status(400).json({message:"Bad request"})
    }    
})

// GET: a Course by ID
courseRouter.get('/:id',  async (request:Request, responce:Response) => {

    const id: number = parseInt(request.params.id, 10);
    
    try {
        const course = await courseController.getCourse(id)
        return course? 
            responce.status(200).json(course) : 
            responce.status(400).json({message:"Bad request"})
    } catch (error: any) {
        return responce.status(400).json({message:"Bad request"})
    }    
})

// PUT: UPDATE Course
// Params: CourseId
courseRouter.put('/:id',  

    body("name").isString(), 
    body("title").isString(),
    body("price").isInt(),
    body("categoryId").isString(),
    body("revisedPrice").isInt(),
    body("thumbnail").isString(),
    body("description").isString(),

    authMiddleware,

    async (request: Request, response: Response) => {
        const errors = validationResult(request);
        const id: number = parseInt(request.params.id, 10)

        if(!errors.isEmpty()){
            return response.status(400).json({errors: errors.array()});
        }
        try {
            const course = request.body
            const updatedCourse = await courseController.updateCourse(course, id);
            return response.status(200).json(updatedCourse);
        } catch(error: any){
            return response.status(500).json(error.message);
        }
    }
);

// DELETE: Delete Course
// Params: id
courseRouter.delete('/:id', authMiddleware, async (request: Request, response: Response) => {
        
        const id: number = parseInt(request.params.id, 10)

        try {
            await courseController.deleteCourse(id);
            return response.status(200).json({message:"Course has been successfully deleted"});
        } catch(error: any){
            return response.status(500).json({message:"Course not found"});
        }
    }
);

