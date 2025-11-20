import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Outlet } from "react-router"
// import Login from "@/components/Auth/components/Login"
import Register from "./Register";
import { Toaster } from "sonner";
import { useState } from "react";
import bgVillaCard from "../Projects/svg.png"
import {motion} from "motion/react"


function Auth() {
  const [activeTab, setActiveTab] = useState("Register");
  return (
    <motion.div initial={{ x: 100 }} animate={{ x: 0, transition: { duration: 0.3 }}}  className="w-screen h-screen flex justify-center bg-[length:auto_50%] bg-bottom bg-no-repeat items-center"  style={{ backgroundImage: `url(${bgVillaCard})` }}>
      <Toaster  position="bottom-right" /> 
       <Tabs className="w-[400px] flex items-center"  value={activeTab} onValueChange={setActiveTab} >
        <TabsList className=" mb-5">
          <TabsTrigger value="Log In" className="cursor-pointer data-[state=active]:bg-gray-200">เข้าสู่ระบบ</TabsTrigger>
          <TabsTrigger value="Register" className="cursor-pointer data-[state=active]:bg-gray-200">สมัครสมาชิก</TabsTrigger>
        </TabsList>
        <TabsContent value="Log In">
          {/* <Login/> */}
        </TabsContent>
        <TabsContent value="Register" className="w-[80%]">
          <Register setActiveTab={setActiveTab} />
        </TabsContent>
      </Tabs>
      <Outlet/>
    </motion.div>
  )
}

export default Auth