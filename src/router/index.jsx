import { createBrowserRouter } from "react-router-dom";

import LayoutLoader from "../layouts/LayoutLoader.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx"; // Import AuthLayout
import Home from "../pages/index.jsx";
import ContactPage from "../pages/Contact/ContactSection.jsx";
import BlogPage from "../pages/Blog/BlogPage.jsx";
import BlogDetailsSection from "../components/blogs/BlogDetailsSection.jsx";
import LoginForm from "../components/auth/LoginForm.jsx"; // Import LoginForm
import SignupForm from "../components/auth/SignupForm.jsx"; // Import SignupForm

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
      {
        path: "/login", // New route for login
        element: <AuthLayout />,
        children: [
          {
            path: "/login",
            element: <LoginForm />,
          },
        ],
      },
      {
        path: "/signup", // New route for signup
        element: <AuthLayout />,
        children: [
          {
            path: "/signup",
            element: <SignupForm />,
          },
        ],
      },
    ],
  },
]);
