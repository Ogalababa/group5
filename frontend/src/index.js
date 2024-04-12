import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import AboutUsPage from "./components/AboutUs/AboutUsPage";
import JobsPage from "./components/Jobs/JobsPage";
import CertificatePage from "./components/Certificate/CertificatePage";

const router = createBrowserRouter([
    {
        path:"/",
        element: <HomePage/>
    },
    {
        path:"/jobs",
        element: <JobsPage/>
    },
    {
        path:"/about-us",
        element: <AboutUsPage/>
    },
    {
        path:"/certificate",
        element: <CertificatePage/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

