import { createBrowserRouter, Navigate } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/home";

const routes = (user: boolean) =>
  createBrowserRouter([
    {
      path: "/",
      element: user ? <MainLayout /> : <Navigate to="/auth" />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
    {
      path: "/auth",
      element: !user ? <Welcome /> : <Navigate to="/" />,
    },
  ]);

export default routes;
