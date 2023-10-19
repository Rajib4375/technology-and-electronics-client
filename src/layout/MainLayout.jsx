import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Fotter from "../components/Fotter/Fotter";


const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Fotter></Fotter>
        </div>
    );
};

export default MainLayout;