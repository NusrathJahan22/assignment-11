import { Outlet } from "react-router-dom";
import Navbar from "../Component/Nabvar";
import Footer from "../Component/Footer";





const MainLayout = () => {
    return (
        <div>
         <Navbar></Navbar>
         
         <Outlet></Outlet>  

        <Footer></Footer> 
        </div>
    );
};

export default MainLayout;