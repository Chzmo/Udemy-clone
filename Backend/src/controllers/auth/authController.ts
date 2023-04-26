import { db } from "../../utils/db.server";

type User = {
    id: Number;
    firstName: string;
    lastName: string;
};

export const listUsers = async (): Promise<User[]> =>{
    return db.user.findMany({
        select:{
            id: true,
            firstName: true,
            lastName: true,
        },
    });
};

export const getUser = async (id: number): Promise<User | null> =>{
    return await db.user.findUnique({
        where:{
            id,
        },
        select:{
            id: true,
            firstName: true,
            lastName: true,
        }
    });
};

export const registerUser = async (
    user: Omit<User, "id">
): Promise<User> => {
    const { firstName, lastName } = user
    
    return db.user.create({
        data:{
            lastName,
            firstName,            
        },

        select:{
            id: true,
            firstName: true,
            lastName: true
        }
    });
};

export const updatedUser = async (
    user: Omit<User, "id">, id: number, 
): Promise<User> =>{
    const {firstName, lastName} = user
    return db.user.update({
        where:{
            id,
        },
        data:{
            firstName,
            lastName,
        }, 
        select:{
            id:true,
            firstName: true,
            lastName: true
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
