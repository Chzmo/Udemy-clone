import { type } from "os";
import { db } from "../utils/db.server";

type Author = {
    id: Number;
    firstName: String;
    lastName: String;
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

