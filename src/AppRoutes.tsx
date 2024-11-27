import { Outlet, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import WebDev from "./pages/WebDev";
import TechSupport from "./pages/TechSupport";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";

const AppRoutes = () => {
  const HomeLayout = () => <Outlet />;
  return useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "web-development",
          element: <WebDev />,
        },
        {
          path: "tech-support",
          element: <TechSupport />,
        },
      ],
    },
  ]);
};

export default AppRoutes;
