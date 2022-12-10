import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Store } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/loja",
    element: <Store />,
  },
]);

const Routes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
