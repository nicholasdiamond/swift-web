import { createBrowserRouter, Navigate } from "react-router-dom";
import WelcomeDashboard from "./pages/welcome/WelcomeDashboard";
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
      element: !user ? <WelcomeDashboard /> : <Navigate to="/" />,
    },
  ]);

export default routes;
