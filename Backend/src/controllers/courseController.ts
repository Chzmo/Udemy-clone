import { db } from "../utils/db.server";
import { createUserSchema } from '../defenitions/userType'

type Course = {
    userName: string;
    email:string;
    password:string;
}

export const getCourses = async () =>{
    return db.course.findMany({
        select:{
            id: true,
            createdAt: true,
            updatedAt: true,
            name: true,
            tittle: true,
            description: true,
            price: true,
            revisedPrice: true,     
            thumbnail: true,
            author:{
                select:{
                    id:true,
                    userName:true,
                }
            },
            category: {
                select:{
                    tittle: true
                }
            },
            requirements: true,
            rating: {
                select:{
                    
                }
            },
        },
    });
};

export const getUser = async (id: number) =>{
    return await db.user.findUnique({
        where:{
            id,
        },
        select:{
            id: true,
            email: true,
            userName: true,
            password: false,
        }
    });
};

export const updatedUser = async (
    user: Omit<createUserSchema, "id">, id: number, 
) =>{
    const {email, userName, password} = user
    return db.user.update({
        where:{
            id,
        },
        data:{
            userName,
            email,
            password,
        }, 
        select:{
            id: true,
            email: true,
            userName: true,
            password: false,
        }
    });
}

export const deleteUser = async (
    id:number
): Promise<void> =>{
    await db.user.delete({
        where:{
            id
        }
    })
}
