import { z } from "zod";

export const authRegisterSchema = z
  .object({
    email: z
    .email({ message: "รูปแบบอีเมลไม่ถูกต้อง" }),

    password: z
      .string()
      .min(4, { message: "รหัสผ่านต้องมีอย่างน้อย 4 ตัวอักษร" }),

    confirmPassword: z.string(),

    secretKey: z
      .string()
      .min(1, { message: "กรุณากรอก Secret Key" }),
  })
    
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน",
  });

  export type AuthRegisterType = z.infer<typeof authRegisterSchema>;