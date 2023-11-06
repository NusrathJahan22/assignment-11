import { Outlet } from "react-router-dom";
import Navbar from "../Component/Nabvar";
import { CarouselDefault } from "../Component/Banner";




const MainLayout = () => {
    return (
        <div>
         <Navbar></Navbar>
         
         <Outlet></Outlet>   
        </div>
    );
};

export default MainLayout;