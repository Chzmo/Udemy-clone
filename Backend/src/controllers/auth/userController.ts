import { db } from "../../utils/db.server";
import { createUserSchema } from '../../defenitions/userType'
const bcrypt = require('bcryptjs');

type User = {
    userName: string;
    email:string;
    password:string;
}

export const listUsers = async () =>{
    return db.user.findMany({
        select:{
            id: true,
            email: true,
            userName: true,
            password: false,
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

export const registerUser = async ( user: Omit<createUserSchema, 'id'>) => {
    const { userName, email,  password} = user;

    const userExists: any = await db.user.findUnique({
        where:{
            email,
        },

        select:{
            id: true,
            email: true,
            userName: true,
            password: false,
        }
    });

    if (userExists){
        throw new Error('Email is already taken')
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    return db.user.create({
        data:{
            userName,
            email,
            password: hashedPassword,           
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
