import {z} from 'zod'

const createUserSchema = z.object({
    id: z.number(),
    email: z.string({
        required_error:"email field is required",
        invalid_type_error:"email must be a string"
    }).email(),
    userName: z.string(),
    password: z.string(),
})

export type createUserSchema = z.infer<typeof createUserSchema>