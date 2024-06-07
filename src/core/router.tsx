import { createBrowserRouter } from "react-router-dom";
import { Main } from "../layouts/Main";
import { Home } from "../pages/Home";
import { Salad } from "../pages/Salad";
import { State } from "../pages/State";
import { Concurrency } from "../pages/Concurrency";
import { Life } from "../pages/Life";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "salad/:id",
                element: <Salad />
            },
            {
                path: "state", 
                element: <State />
            },
            {
                path: "concurrency", 
                element: <Concurrency />
            },
            {
                path: "life", 
                element: <Life />
            }
        ]
    }
])