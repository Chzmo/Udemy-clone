import { createUserSchema } from "../../defenitions/userType";
import { db } from "../../utils/db.server";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

type User = {
    userName: string;
    email:string;
    password:string;
}

const generateToken = (id:string) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn:'1d'
    });
}

const getUserbByEmail = async (email:string) => {
    return db.user.findMany({
        where:{
            email,
        },
        select:{
            id: true,
            email: true,
            userName: true,
            password: true
        }
    })
}


export const loginUser = async (user: Omit<User, 'userName'>) => {
    const {email, password} = user;
    const authUser: any = getUserbByEmail(email);

    if (authUser && (await bcrypt.compare(password, authUser.password))){
        return {
            id: authUser.id,
            email: authUser.email,
            token : generateToken(authUser.id)
        }
    } else{
        throw new Error("Invalid credentials")
    }
}

export const registerUser = async ( user: Omit<createUserSchema, 'id'>) => {
    const { userName, email,  password} = user;

    const userExists: any = await getUserbByEmail(email);

    if (userExists){
        return userExists;
        throw new Error('Email is already taken')
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    const registeredUser: object = await db.user.create({
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
            createdAt: true,
            updatedAt: true
        }
    });

    const { id }: any = registeredUser;
    return {...registeredUser, token:generateToken(id)};
};