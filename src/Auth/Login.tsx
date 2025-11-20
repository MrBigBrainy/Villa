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
import bgVillaCard from "../Projects/svg.png"
import { auth } from "@/firebase/firebase"
import { Link } from "react-router";
import { motion } from "motion/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router";


function Login() {
    const navigate = useNavigate();
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

  const onLogin: SubmitHandler<AuthRegisterType> = async (data) => {
    setLoading(true);

    const { email, password } = data;

    // ใช้ toast.promise ครอบ async
    toast.promise(
        (async () => {
        // 1) สร้าง user ใน Firebase Auth
        const userCred = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

            console.log("Logged in as:", userCred.user);
            navigate("/")


        
      })(),
      {
        loading: "Logging In...",
        success: () => {
          reset();
          return "Logged In";
        },
        error: (err: unknown) => {
          console.error(err);

          let msg = "Error from Server";

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
        <motion.div initial={{ x: 100 }} animate={{ x: 0, transition: { duration: 0.3 } }} className="w-screen h-screen flex justify-center bg-[length:auto_50%] bg-bottom bg-no-repeat items-center" style={{ backgroundImage: `url(${bgVillaCard})` }}>
    <Card className="border-0 text-[30px] py-10 drop-shadow-xl w-[80%] ">
      <CardHeader>
        <CardTitle className="text-center text-[20px] font-semibold text-amber-900">Log In</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onLogin)} className="space-y-4">
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
            className="cursor-pointer w-full text-white mt-4 mb-0 py-5 bg-amber-900"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-3">
                <Loader />
                <p>Loading...</p>
              </div>
            ) : (
              "Log In"
            )}
                  </Button>
                  <div className="flex w-full justify-center">
                      
            <Link to="/register" className="text-amber-950 text-[14px] text-center mt-3">Create new account</Link>
                  </div>
        </form>
      </CardContent>
    </Card>
        </motion.div>
  );
}

export default Login;
