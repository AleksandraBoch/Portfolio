import * as React from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import {MainBlock} from "../mainBlock/Main";
import {SkillsBlock} from "../mainBlock/skills/skillsBlock";
import {MyWorks} from "../myWorks/MyWorks";
import {Contacts} from "../Contacts/Contacts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "main",
                element: <MainBlock />,
            },
            {
                path: "skills",
                element: <SkillsBlock/>,
            },
            {
                path: "works",
                element: <MyWorks/>,
            },
            {
                path: "contacts",
                element: <Contacts/>,
            },
        ],
    },
]);

export const Router = () => {
    return <RouterProvider router={router}/>
}