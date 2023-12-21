import { Children } from "react";
import { createBrowserRouter } from "react-router-dom";
import GameDetails from "../components/GameDetails";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetails /> },
    ],
  },
]);

export default router;
