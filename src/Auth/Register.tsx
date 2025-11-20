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

type RegisterProp = {
  setActiveTab: (value: string) => void
}


function Register({setActiveTab}: RegisterProp) {
  const { register, handleSubmit, reset, formState: { errors },  setError, } = useForm<AuthRegisterType>({
    resolver: zodResolver(authRegisterSchema),
    mode: "onSubmit",
  })
  const [loading, setLoading] = useState(false)
  

  const onRegister: SubmitHandler<AuthRegisterType> = async (data) => {
    setLoading(true)
    toast.promise(
     
      {
        loading: "กำลังสมัครสมาชิก...",
        success: () => {
          reset();
    setActiveTab("Log In")

          return "สมัครสมาชิกสำเร็จ";
        },
          error: (err: unknown) => {
              console.error(err)
          }  }

            setError("root", {
              type: "server",
              message: msg || "เกิดข้อผิดพลาดจากเซิร์ฟเวอร์",
            });
            return msg || "เกิดข้อผิดพลาดจากเซิร์ฟเวอร์";
          }

          if (err instanceof Error) {
            setError("root", { type: "server", message: err.message });
            return err.message;
          }

          setError("root", {
            type: "server",
            message: "เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ",
          });
          return "เกิดข้อผิดพลาดที่ไม่ทราบสาเหตุ";
        },
      }
    );
    setLoading(false);
  };

  return (
    <Card className="border-0 text-[30px] py-10 w-[400px] drop-shadow-xl">
      <CardHeader>
        <CardTitle className="text-center">สมัครสมาชิ‍ก</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onRegister)} className="space-y-4">
          
            {/* <div className={`flex m-0 ${errors.root?.message ? "opacity-100" : "opacity-0"} justify-center items-center`}>
              <CircleX />
            <p className="text-[12px] pl-1">{errors.root?.message}</p>
            </div> */}
          
          {/* {errors.root?.message && (
            <div className={`flex m-0 justify-center items-center`}>
              <CircleX />
            <p className="text-[12px] pl-1">{errors.root?.message}</p>
            </div>
          )} */}
          

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
                {errors.password?.message?? "\u00A0"}
              </p>


            <Input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm Password"
              className="text-[12px] m-0"
              autoComplete="new-password"
            />

              <p className={`text-red-500 text-[12px] pl-1 ${errors.confirmPassword?.message ? "opacity-100" : "opacity-0"}`}>
                {errors.confirmPassword?.message?? "\u00A0"}
              </p>



            <Input
              {...register("secretKey")}
              type="password"
              placeholder="Secret Key"
              className="text-[12px] m-0"
            />

              <p className={`text-red-500 text-[12px] pl-1 ${errors.secretKey?.message ? "opacity-100" : "opacity-0"}`}>{errors.secretKey?.message?? "\u00A0"}</p>


          <Button
            type="submit"
            className="cursor-pointer w-full text-white mt-4 py-5"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-3">
                <Loader />
                <p>กำลังโหลด...</p>
              </div>
            ) : (
              "สมัครสมาชิก"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default Register;