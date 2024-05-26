import { z } from "zod";

const userValidationSchema = z.object({
    password: z.string().max(20, "password not allowed more than 20 characters").optional(),
})


export const userValidation = {
    userValidationSchema
}

