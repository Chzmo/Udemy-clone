import { db } from "../../utils/db.server";
const bcrypt = require('bcryptjs');

type User = {
    userName: string;
    email:string;
    password:string;
}

export const loginUser = async (user: Omit<User, 'userName'>) => {
    const {email, password} = user;
    const authUser: any = await db.user.findUnique({
        where:{
            email,
        },

        select:{
            id: true,
            email: true,
            userName: true,
            password: true,
        }
    });

    if (authUser && (await bcrypt.compare(password, authUser.password))){
        return {
            id: authUser.id,
            email: authUser.email
        }
    } else{
        throw new Error("Invalid credentials")
    }
}