import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import { RegisterPage } from "../Pages/RegisterPage/MainRegister";
import * as React from "react";
import * as ReactDOM from "react-dom/client";

const router = createBrowserRouter([
    {
      path: "/",
      element: <RegisterPage/>,
      errorElement: <ErrorPage />,
    },
    {
        path: "/register",
        element: <RegisterPage />,
        errorElement: <ErrorPage />,
    },
    
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>
)
