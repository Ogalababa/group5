import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import AboutUsPage from "./components/AboutUs/AboutUsPage";
import JobsPage from "./components/Jobs/JobsPage";
import CertificatePage from "./components/Certificate/CertificatePage";
import NotFoundPage from "./components/Notfound/NotFoundPage";
import ContactPage from "./components/Contact/ContactPage"
import LoginPage from "./components/Login/LoginPage";
import RegisterPage from "./components/Register/RegisterPage";
console.log('API Base URL:', process.env.REACT_APP_API_BASE_URL);
const router = createBrowserRouter([
    {
        path:"/",
        element: <HomePage/>,
        errorElement: <NotFoundPage/>
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
    },
    {
        path:"/contact",
        element: <ContactPage/>
    },
    {
        path:"/login",
        element: <LoginPage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

