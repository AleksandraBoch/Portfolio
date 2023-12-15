import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import {MainBlock} from "../mainBlock/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "main",
                element: <MainBlock />,
            },
        ],
    },
]);

export const Router = () => {
    return <RouterProvider router={router}/>
}