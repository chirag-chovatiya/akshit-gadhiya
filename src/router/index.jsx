import { createBrowserRouter } from "react-router-dom";

import LayoutLoader from "../layouts/LayoutLoader.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/index.jsx";
import ContactPage from "../pages/Contact/ContactSection.jsx";
import BlogPage from "../pages/Blog/BlogPage.jsx";
import BlogDetailsSection from "../components/blogs/BlogDetailsSection.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutLoader />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/contact",
            element: <ContactPage />,
          },
          {
            path: "/blogs",
            element: <BlogPage />,
          },
          {
            path: "/blog/:id",
            element: <BlogDetailsSection />,
          },
        ],
      },
    ],
  },
]);
