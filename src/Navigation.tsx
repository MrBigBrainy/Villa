import { Link } from "react-router";

function Navigation() {
  return (
    <nav className="p-4 max-w-[420px] lg:max-w-[1000px] mx-auto flex justify-between">
      <p className="text-yellow-950 text-[12px] lg:text-[20px]  text-3xl font-semibold cursor-pointer">Logo</p>
        <ul className="flex items-center gap-3">
          <Link to="/" className="text-yellow-950 text-[12px] lg:text-[20px] text-3xl font-semibold cursor-pointer">Home</Link>
          <Link to="/projects" className="text-yellow-950 text-[12px] lg:text-[20px]  text-3xl font-semibold cursor-pointer">Projects</Link>
          <Link to="/reservation" className="text-yellow-950 text-[12px] lg:text-[20px] text-3xl font-semibold cursor-pointer">Reservation</Link>
        </ul>
          <Link to="/auth" className="text-yellow-950 text-[12px] lg:text-[20px] text-3xl font-semibold cursor-pointer">Login</Link>
    </nav>
  );
}

export default Navigation;
