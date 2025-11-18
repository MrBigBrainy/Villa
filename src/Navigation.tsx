import { Link } from "react-router";

function Navigation() {
  return (
    <nav className="p-4">
      <div className="flex items-center justify-center">
        <button>
          <i className="bi bi-list text-7xl lg:hidden"></i>
        </button>
        <ul className="hidden lg:flex space-x-15">
          <Link to="/" className="text-yellow-950 text-[20px] text-3xl font-semibold cursor-pointer">Home</Link>
          <Link to="/projects" className="text-yellow-950 text-[20px]  text-3xl font-semibold cursor-pointer">Projects</Link>
          <Link to="/reservation" className="text-yellow-950 text-[20px] text-3xl font-semibold cursor-pointer">Reservation</Link>
          <Link to="/auth" className="text-yellow-950 text-[20px] text-3xl font-semibold cursor-pointer">Login</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
