import App from "../Home/App";
import { createBrowserRouter } from "react-router";
import Project from "../Projects/Projects";
import Reservation from "../Reservation/Reservation";
import RootLayout from "../Layout/RootLayout";
import Register from "@/Auth/Register";
import Login from "@/Auth/Login";
import ProjectDetail from "@/ProjectDetail/ProjectDetail";

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
        element: <Login />,
      },
      
      {
        path: "projects",
        element: <Project />,
      },
       {
        path: "project/:projectName",
        element: <ProjectDetail />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
    ],
  },
]);
