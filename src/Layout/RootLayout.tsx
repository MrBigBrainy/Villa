import { Outlet } from "react-router";
import Navigation from "@/Navigation";
import { Toaster } from "sonner";
import { useEffect } from "react";
import { useAuthStore } from "@/Auth/authStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase";


function RootLayout() {
    const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
      const unsub = onAuthStateChanged(auth, (user) => {
        console.log(user)
      setUser(user);    // 👈 Store the user in Zustand
    });

    return () => unsub();
  }, [setUser]);
    
  return (
    <div>
          <Navigation />
             <Toaster position="bottom-right" />
          
      <Outlet />
    </div>
  );
}

export default RootLayout;
