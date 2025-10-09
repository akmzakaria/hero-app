import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";
import Home from "../Components/Pages/Home/Home";
import Apps from "../Components/Pages/Apps/Apps";
import Installation from "../Components/Pages/Installation/Installation";
import AppDetails from "../Components/Pages/AppDetails/AppDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                loader: () => fetch('/appsData-8.json'),
                Component: Home
            },

            {
                path: 'apps',
                loader: () => fetch('/appsData-20.json'),
                Component: Apps
            },

            {
                path: 'installation',
                Component: Installation
            },

            {
                path: 'appdetails/:id',
                loader: () => fetch('/appsData-20.json'),
                Component: AppDetails
            }


        ]
    }
]);