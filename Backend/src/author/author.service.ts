import { db } from "../utils/db.server";

type Author = {
    id: Number;
    firstName: string;
    lastName: string;
};

export const listAuthors = async (): Promise<Author[]> =>{
    return db.author.findMany({
        select:{
            id: true,
            firstName: true,
            lastName: true,
        },
    });
};

export const getAuthor = async (id: number): Promise<Author | null> =>{
    return await db.author.findUnique({
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

export const createAuthor = async (
    author: Omit<Author, "id">
): Promise<Author> => {
    const { firstName, lastName } = author
    
    return db.author.create({
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

export const updatedAuthor = async (
    author: Omit<Author, "id">, id: number, 
): Promise<Author> =>{
    const {firstName, lastName} = author
    return db.author.update({
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

export const deleteAuthor = async (
    id:number
): Promise<void> =>{
    await db.author.delete({
        where:{
            id
        }
    })
}
