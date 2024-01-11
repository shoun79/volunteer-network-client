import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import AdminLayout from "../layout/AdminLayout";
import AddEvent from "../pages/Admin/AddEvent/AddEvent";
import Volunteers from "../pages/Admin/Volunteers/Volunteers";
import EventDetails from "../pages/Home/Events/EventDetails";
import MyEvents from "../pages/Home/Events/MyEvents";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://volunteer-network-server-ecru.vercel.app/totalEvents')
            },
            {
                path: '/event-details/:id',
                element: <EventDetails></EventDetails>
            },
            {
                path: '/my-events',
                element: <PrivateRoute><MyEvents></MyEvents></PrivateRoute>
            }
        ]
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/',
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path: '/admin/volunteers',
                element: <Volunteers></Volunteers>
            },
            {
                path: '/admin/add-event',
                element: <AddEvent></AddEvent>
            }

        ]
    }
]);

export default router;