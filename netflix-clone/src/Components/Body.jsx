import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import Home from "./Home";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home page={"home"} />,
    },
    {
      path: "/login",
      element: <Login page={"login"} />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/signup",
      element: <Browse />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;
