import App from "../Home/App";
import { createBrowserRouter } from "react-router";
import Auth from "../Auth/Auth";
import Project from "../Projects/Projects";
import Reservation from "../Reservation/Reservation";


export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Project />,
    },
   {
    path: "/reservation",
    element: <Reservation />,
  },


]);
