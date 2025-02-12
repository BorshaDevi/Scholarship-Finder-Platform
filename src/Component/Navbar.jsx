import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { HiX } from "react-icons/hi";
import { NavLink } from "react-router";
const Navbar=()=>{
    const [open , isOpen]=useState(false)
    const navLink=(
        <div className="flex flex-col md:flex-row md:mx-6 md:gap-4">
            <NavLink to='' className='border-b-2 border-b-transparent  transition-colors duration-1000 transform  hover:border-blue-500'>Home</NavLink>
            <NavLink to='' className='border-b-2 border-b-transparent  transition-colors duration-1000 transform  hover:border-blue-500'>About Us</NavLink>
            <NavLink to='' className='border-b-2 border-b-transparent  transition-colors duration-1000 transform  hover:border-blue-500'>Contact Us</NavLink>
            
        </div>
    )
    return(
        <>
     <nav  className="relative bg-green-700 shadow ">
    <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
           <p>Name</p>
            <div className="flex lg:hidden">
                <button onClick={() => isOpen(!open)}  className="text-white hover:text-white">
                    {
                        open ? <HiX></HiX> : <FaBarsStaggered></FaBarsStaggered>
                    }
                    
                </button>
            </div>
        </div>
        <div className="flex justify-end">
           <div className="hidden md:flex ">
           {navLink}
           </div>
           <div className="md:flex md:justify-end  hidden">
                <p>Last</p>
            </div>
           
        </div>
        <div>
        {
            open ?  <div  className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-out hover:ease-in bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
              <div >
              {navLink}
              </div>
            <div className="flex justify-center md:block">
                <p>Last</p>
            </div>
        </div> : ''
        }
        </div>
    </div>
</nav>
        </>
    )
}
export default Navbar;