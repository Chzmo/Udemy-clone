import { createUserSchema } from "../../defenitions/userType";
import { db } from "../../utils/db.server";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

type User = {
    userName: string;
    email:string;
    password:string;
}

// GENERATE A LOGIN TOKEN
const generateToken = (id:string) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn:'1d'
    });
}

// GET UNIQUE USER BY ID
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

// LOGIN USER INTO THE SYSTEM
export const loginUser = async (user: Omit<User, 'userName'>) => {
    const {email, password} = user;
    const authUser = await getUserbByEmail(email);

    if (authUser[0] && (await bcrypt.compare(password, authUser[0].password))){
        return {
            id: authUser[0].id,
            email: authUser[0].email,
            token : generateToken(authUser[0].id.toString())
        }
    } else{
        throw new Error("Invalid credentials")
    }
}


// REGISTER NEW USER INTO THE SYSTEM
export const registerUser = async ( user: Omit<createUserSchema, 'id'>) => {
    const { userName, email,  password} = user;

    const userExists = await getUserbByEmail(email);

    if (userExists.length){
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