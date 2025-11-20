import App from "../Home/App";
import { createBrowserRouter } from "react-router";
import Auth from "../Auth/Auth";
import Project from "../Projects/Projects";
import Reservation from "../Reservation/Reservation";
import RootLayout from "../Layout/RootLayout";

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
    path: "/auth",
    element: <Auth />,
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
