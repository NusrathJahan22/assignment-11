import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import PostedJob from "../Page/PostedJob.JSX";
import MyBids from "../Page/MyBids";
import BidRequest from "../Page/BidRequest";
import AddJob from "../Page/AddJob";

import TabCard from "../Component/TabCard";
import Tabs from "../Component/Tabs";
// import Error from "../Page/Error";


const router = createBrowserRouter([
    
    {
      path: "/",
      element:<MainLayout></MainLayout>,
    //   element:<Error></Error>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/addJob",
            element:<AddJob></AddJob>
        },
        {
            path:"/postedJob",
            element:<PostedJob></PostedJob>
        },
        {
            path:"/myBids",
            element:<MyBids></MyBids>
        },
        {
            path:"/bidsRequest",
            element:<BidRequest></BidRequest>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/abbjobs",
            element:<Tabs></Tabs>,
            loader:()=>fetch('http://localhost:5000/addjobs')
        }
      ]
    },
  ]);

  export default router;