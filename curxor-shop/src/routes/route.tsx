import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Dashboard = lazy(() => import("@/pages/dashboard"));
const Orders = lazy(() => import("@/pages/orders"));
const Categories = lazy(() => import("@/pages/categories"));
const Transactions = lazy(() => import("@/pages/transactions"));
const Products = lazy(() => import("@/pages/products"));
const Brands = lazy(() => import("@/pages/brands"));
const Coupons = lazy(() => import("@/pages/coupons"));
const Profile = lazy(() => import("@/pages/profile"));

import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import NotFound from "@/not-found";
import Loading from "@/loading";
import PrivateRoutes from "@/routes/PrivateRoutes";

const routes = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  {
    path: "",
    element: (
      <Suspense fallback={<Loading />}>
        <PrivateRoutes />
      </Suspense>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      { path: "orders", element: <Orders /> },
      { path: "categories", element: <Categories /> },
      { path: "transactions", element: <Transactions /> },
      { path: "products", element: <Products /> },
      { path: "brands", element: <Brands /> },
      { path: "coupons", element: <Coupons /> },
      { path: "profile", element: <Profile /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default routes;
