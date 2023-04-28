import { db } from "../utils/db.server";

type Course = {
    id: number;
    name: string;
    title: string;
    description: string;
    price: number,
    revisedPrice: number; 
    thumbnail: string;
}

export const createCourse = async (userId: number, catergoryId: number, course: Omit<Course, 'id'>) =>{
    const {name, title, description, price, revisedPrice, thumbnail} = course;
    const createdCourse: object =  db.course.create({
        data:{
            name,
            title,
            description,
            price,
            revisedPrice,
            thumbnail,
            authorId: userId,
            categotyId: catergoryId
        },
        
    })

    return createdCourse
}

export const getCoursesCategory = async (catgoryId: number) =>{
    return db.course.findMany({
        where:{
            category: {
                id: catgoryId
            }
        },
        select:{
            id: true,
            createdAt: true,
            updatedAt: true,
            name: true,
            title: true,
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
                    rating:{
                        select:{
                            value:true
                        }
                    },
                }
            },
        },
    });
};

export const getCourse = async (id: number) =>{
    return await db.course.findUnique({
        where:{
            id,
        },
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
                    rating:{
                        select:{
                            value:true
                        }
                    },
                }
            },
        },
    });
};

export const updatedCourse = async (
    Course: Omit<Course, "id">, id: number, 
) =>{
    const {name, title, description, price, revisedPrice, thumbnail} = Course;
    return db.course.update({
        where:{
            id,
        },
        data:{
            name,
            title,
            description,
            price,
            revisedPrice,
            thumbnail
        }, 
        select:{
            id: true,
            createdAt: true,
            updatedAt: true,
            name: true,
            title: true,
            description: true,
            price: true,
            revisedPrice: true,
            thumbnail: true,
        }
    });
}

// export const deleteCourse = async (
//     id:number
// ): Promise<void> =>{
//     await db.course.delete({
//         where:{
//             id
//         }
//     })
// }
