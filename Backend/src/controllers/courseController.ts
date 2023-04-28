import { db } from "../utils/db.server";

type Course = {
    id: number;
    name: string;
    title: string;
    price: number;
    revisedPrice: number;
    description: string;
    thumbnail: string;
}

export const createCourse = async (authorId: number, catergoryId: number, course: Omit<Course, 'id'>) =>{
    const {name, title, description,  thumbnail} = course;
    const price = parseInt(course.price.toString());
    const revisedPrice = parseInt(course.revisedPrice.toString());
    const createdCourse: object = await db.course.create({
        data:{
            name,
            title,
            description,
            price,
            revisedPrice,
            thumbnail,
            authorId,
            categotyId: catergoryId
        },
        select:{
            id: true,
            createdAt: true,
            updatedAt: true,
            name:true,
            title:true,
            description:true,
            price:true,
            revisedPrice:true,
            thumbnail:true,
            // authorId: true,
            // categotyId: true
        }
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
                    title: true
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
                    title: true
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
