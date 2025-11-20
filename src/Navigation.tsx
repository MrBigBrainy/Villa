import { Link } from "react-router";
import { House } from "lucide-react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <motion.nav className="py-4  px-1 w-[90%] max-w-[420px] lg:max-w-[1000px] mx-auto flex items-center justify-between" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0, transition: { type: "tween", delay: 0.5 } }}
      transition={{ duration: 0.3 }}>
      <div className="flex gap-2 text-yellow-950">
        <House size={18}/>
      </div>
        <ul className="flex items-center gap-3">
          <Link to="/" className="text-yellow-950 text-[12px] lg:text-[20px] text-3xl font-semibold cursor-pointer">Home</Link>
          <Link to="/projects" className="text-yellow-950 text-[12px] lg:text-[20px]  text-3xl font-semibold cursor-pointer">Projects</Link>
          <Link to="/reservation" className="text-yellow-950 text-[12px] lg:text-[20px] text-3xl font-semibold cursor-pointer">Reservation</Link>
        </ul>
          <Link to="/register" className="text-yellow-950 text-[12px] lg:text-[20px] text-3xl font-semibold cursor-pointer">Login</Link>
    </motion.nav>
  );
}

export default Navigation;
