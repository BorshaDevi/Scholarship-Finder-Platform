import { Outlet } from "react-router";

const Root=()=>{
    return(
        <>
        <h1>Root</h1>
        <Outlet></Outlet>
        </>
    )
}
export default Root;