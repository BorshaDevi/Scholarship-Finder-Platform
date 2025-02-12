import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Root=()=>{
    return(
        <div className="container md:ml-10">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    )
}
export default Root;