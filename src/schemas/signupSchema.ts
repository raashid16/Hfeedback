import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 characters")
  .max(16, "Username should be no more than 16 characters")
  .regex(/^[a-zA-Z0-9]{3,20}$/, "Username must not contain special character");

export const signupSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "password must be atleast 6 characters" }),
});
