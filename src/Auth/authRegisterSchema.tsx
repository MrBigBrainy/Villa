import { z } from "zod";

export const authRegisterSchema = z
  .object({
    email: z
    .email({ message: "รูปแบบอีเมลไม่ถูกต้อง" }),

    password: z
      .string()
      .min(4, { message: "รหัสผ่านต้องมีอย่างน้อย 4 ตัวอักษร" }),

  })
    

  export type AuthRegisterType = z.infer<typeof authRegisterSchema>;