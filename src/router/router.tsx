import App from "../Home/App";
import { createBrowserRouter } from "react-router";
import Auth from "../Auth/Auth";
import Project from "../Projects/Projects";
import Reservation from "../Reservation/Reservation";
import RootLayout from "../Layout/RootLayout";
import Register from "@/Auth/Register";
import { LogIn } from "lucide-react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,   // <--- layout
    children: [
      {
        index: true,           // route "/"
        element: <App />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      
      {
        path: "projects",
        element: <Project />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
    ],
  },
]);
