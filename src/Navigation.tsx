import { Link } from "react-router";

function Navigation() {
  return (
    <nav className="p-4">
      <div className="flex items-center justify-end">
        <button>
          <i className="bi bi-list text-7xl lg:hidden"></i>
        </button>
        <ul className="hidden lg:flex space-x-15">
          <Link to="/" className="text-brown text-3xl font-semibold cursor-pointer">Home</Link>
          <Link to="/projects" className="text-brown text-3xl font-semibold cursor-pointer">Projects</Link>
          <Link to="/reservation" className="text-brown text-3xl font-semibold cursor-pointer">Reservation</Link>
          <Link to="/auth" className="text-brown text-3xl font-semibold cursor-pointer">Login</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
