import { createBrowserRouter } from "react-router-dom";

import {
  Home,
  Error,
  Profile,
  Comments,
  Posts,
  TraditionalFetch,
  DependentQuery,
  Pagination,
  InfiniteQuery,
} from "./pages";

import { Layout } from "./layouts";
import { Comment } from "./components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/profile", element: <Profile /> },
      { path: "/comments", element: <Comments /> },
      { path: "/comments/:id", element: <Comment /> },
      { path: "/posts", element: <Posts /> },
      { path: "/traditional", element: <TraditionalFetch /> },
      {
        path: "/dependent",
        element: <DependentQuery emailId="manan@aliteprojects.in" />,
      },
      {
        path: "/pagination",
        element: <Pagination />,
      },
      { path: "/infinite", element: <InfiniteQuery /> },
    ],
  },
]);
