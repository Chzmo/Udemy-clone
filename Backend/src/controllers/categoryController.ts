import { db } from "../utils/db.server";

export const createCategory = async ( title: string) =>{
    
    const createCategory: object =  db.category.create({
        data:{
            title,
        },
        select:{
            id: true,
            createdAt: true,
            updatedAt: true,
            title:true,
        }
    })

    return createCategory
}

export const getCategories = async () =>{
    
    const createCategory: object =  db.category.findMany({
        select:{
            id: true,
            createdAt: true,
            updatedAt: true,
            title:true,
            course: true,
        }
    })

    return createCategory
}