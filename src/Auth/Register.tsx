import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Loader from "@/Loader/Loader";
import { useForm } from "react-hook-form"
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import type { AuthRegisterType } from "./authRegisterSchema";
import type { SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { authRegisterSchema } from "./authRegisterSchema";
import { toast } from "sonner"; 
import { CircleX } from "lucide-react";


// 🔥 import Firebase stuff
import { auth, db } from "@/firebase/firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

type RegisterProp = {
  setActiveTab: (value: string) => void
}

function Register({ setActiveTab }: RegisterProp) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<AuthRegisterType>({
    resolver: zodResolver(authRegisterSchema),
    mode: "onSubmit",
  });

  const [loading, setLoading] = useState(false);

  const onRegister: SubmitHandler<AuthRegisterType> = async (data) => {
    setLoading(true);

    const { email, password, secretKey, ...rest } = data;

    // ใช้ toast.promise ครอบ async
    toast.promise(
      (async () => {
        // 1) สร้าง user ใน Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const user = userCredential.user;

        // 2) เก็บข้อมูลเพิ่มใน Firestore
        await setDoc(doc(db, "users", user.uid), {
          email,
          role: secretKey === "YOUR_ADMIN_SECRET" ? "admin" : "user",
          createdAt: serverTimestamp(),
          ...rest,       // ถ้ามี field อื่น เช่น name ฯลฯ
        });
      })(),
      {
        loading: "กำลังสมัครสมาชิก...",
        success: () => {
          reset();
          setActiveTab("Log In");
          return "สมัครสมาชิกสำเร็จ";
        },
        error: (err: unknown) => {
          console.error(err);

          let msg = "เกิดข้อผิดพลาดจากเซิร์ฟเวอร์";

          // ลองอ่าน error message แบบง่ายๆ
          if (typeof err === "object" && err !== null && "message" in err) {
            msg = (err as { message?: string }).message || msg;
          }

          // set error ไปที่ root ของ react-hook-form
          setError("root", {
            type: "server",
            message: msg,
          });

          return msg;
        },
      }
    );

    setLoading(false);
  };

  return (
    <Card className="border-0 text-[30px] py-10 drop-shadow-xl bg-[#fffefc]">
      <CardHeader>
        <CardTitle className="text-center text-[20px] font-semibold text-amber-900">Register</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onRegister)} className="space-y-4">
          {errors.root?.message && (
            <div className="flex justify-center items-center text-red-500 text-[12px]">
              <CircleX className="w-3 h-3" />
              <p className="pl-1">{errors.root.message}</p>
            </div>
          )}

          <Input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="text-[12px] m-0"
          />
          <p className={`text-red-500 text-[12px] pl-1 ${errors.email?.message ? "opacity-100" : "opacity-0"}`}>
            {errors.email?.message ?? "\u00A0"}
          </p>

          <Input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="text-[12px] m-0"
            autoComplete="new-password"
          />
          <p className={`text-red-500 text-[12px] pl-1 ${errors.password?.message ? "opacity-100" : "opacity-0"}`}>
            {errors.password?.message ?? "\u00A0"}
          </p>

        
          <Button
            type="submit"
            className="cursor-pointer w-full text-white mt-4 py-5 bg-amber-900"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-3">
                <Loader />
                <p>Loading...</p>
              </div>
            ) : (
              "Register"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default Register;
