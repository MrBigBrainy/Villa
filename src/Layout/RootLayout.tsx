import { Outlet } from "react-router";
import Navigation from "@/Navigation";

function RootLayout() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default RootLayout;
