import React from 'react'
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home"
import Otp from "./pages/Otp"
import Done from './pages/Done';
import Loading from './pages/Loading';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/otp",
        element: <Otp />,
    },
    {
        path: "/done",
        element: <Done />,
    },
    {
        path: "/loading",
        element: <Loading />,
    },
]);
