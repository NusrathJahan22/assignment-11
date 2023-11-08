import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";

import MyBids from "../Page/MyBids";
import BidRequest from "../Page/BidRequest";
import AddJob from "../Page/AddJob";

import Details from "../Component/Details";
import PrivateRoute from "./PrivateRoute";
import PostJob from "../Page/PostJob";





// import Error from "../Page/Error";


const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout></MainLayout>,
        //   element:<Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/addjobs')
            },
            {
                path: "/addJob",
                element: <AddJob></AddJob>
            },
            {
                path: "/postJob",
                element: <PostJob></PostJob>,
                loader: () => fetch('http://localhost:5000/addjobs')
            },
            // {
            //     path:"/postedJob",
            //     element:<PostedJob></PostedJob>,
            //     loader:()=>fetch('http://localhost:5000/addjobs')
            // },
            {
                path: "/myBids",
                element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/formdetails')
            },
            {
                path: "/bidsRequest",
                element: <BidRequest></BidRequest>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },

            {
                path: "/details/:id",
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/addjobs/${params.id}`)

            }

        ]
    },
]);

export default router;