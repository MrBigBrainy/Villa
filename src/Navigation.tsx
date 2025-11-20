import { Link } from "react-router";
import { House, CircleUser } from "lucide-react";
import { motion } from "motion/react";
import { useAuthStore } from "./Auth/authStore";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button"; // shadcn button (optional)

function Navigation() {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser); // if you have this

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // if you also manage user manually in zustand:
      setUser(null);
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <motion.nav
      className="py-4 px-1 w-[90%] max-w-[420px] lg:max-w-[1000px] mx-auto flex items-center justify-between"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0, transition: { type: "tween", delay: 0.5 } }}
    >
      {/* Left: icon / logo */}
      <div className="flex gap-2 text-yellow-950">
        <House size={18} />
      </div>

      {/* Middle: links */}
      <ul className="flex items-center gap-3">
        <Link
          to="/"
          className="text-yellow-950 text-[12px] lg:text-[20px] font-semibold cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="text-yellow-950 text-[12px] lg:text-[20px] font-semibold cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="/reservation"
          className="text-yellow-950 text-[12px] lg:text-[20px] font-semibold cursor-pointer"
        >
          Reservation
        </Link>
      </ul>

      {/* Right: Login or User dropdown */}
      {user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-yellow-950/40 text-yellow-950 hover:bg-yellow-50 cursor-pointer"
            >
              <CircleUser size={20} />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56 mr-2">
            <DropdownMenuLabel className="text-xs text-gray-500">
              Signed in as
            </DropdownMenuLabel>
            <DropdownMenuLabel className="text-sm font-medium break-all">
              {user.email}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* You can add Profile later */}
            {/* <DropdownMenuItem asChild>
              <Link to="/profile" className="w-full cursor-pointer">
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator /> */}
            <DropdownMenuItem
              onClick={handleLogout}
              className="text-red-600 cursor-pointer"
            >
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          to="/login"
          className="text-yellow-950 text-[12px] lg:text-[20px] font-semibold cursor-pointer"
        >
          Login
        </Link>
      )}
    </motion.nav>
  );
}

export default Navigation;
