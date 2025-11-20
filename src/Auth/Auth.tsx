import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Outlet } from "react-router"
// import Login from "@/components/Auth/components/Login"
import Register from "./Register";
import { Toaster } from "sonner";
import { useState } from "react";


function Auth() {
  const [activeTab, setActiveTab] = useState("Log In");
  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <Toaster  position="bottom-right" /> 
       <Tabs className="w-[400px] flex items-center"  value={activeTab} onValueChange={setActiveTab} >
        <TabsList className=" mb-5">
          <TabsTrigger value="Log In" className="cursor-pointer data-[state=active]:bg-gray-200">เข้าสู่ระบบ</TabsTrigger>
          <TabsTrigger value="Register" className="cursor-pointer data-[state=active]:bg-gray-200">สมัครสมาชิก</TabsTrigger>
        </TabsList>
        <TabsContent value="Log In">
          {/* <Login/> */}
        </TabsContent>
        <TabsContent value="Register">
          <Register setActiveTab={setActiveTab} />
        </TabsContent>
      </Tabs>
      <Outlet/>
    </div>
  )
}

export default Auth