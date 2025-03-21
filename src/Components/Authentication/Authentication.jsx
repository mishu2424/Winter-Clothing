import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Authentication = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Authentication;