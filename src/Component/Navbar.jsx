import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { HiX } from "react-icons/hi";
import { NavLink } from "react-router";
import { FcSportsMode } from "react-icons/fc";
const Navbar=()=>{
    const [open , isOpen]=useState(false)
    const navLink=(
        <div className="flex flex-col text-xl md:flex-row md:mx-6 md:gap-4">
            <NavLink to='/' className={({isActive}) =>[
                isActive? 'text-green-200 border-b-2 border-b-transparent  transition-colors duration-1000 transform  hover:border-blue-500' : "border-b-2 border-b-transparent  transition-colors duration-1000 transform  hover:border-blue-500",
            ]} >Home</NavLink>
            <NavLink to='/about' className={({isActive}) =>[
                isActive? 'text-green-200 border-b-2 border-b-transparent  transition-colors duration-1000 transform  hover:border-blue-500' : "border-b-2 border-b-transparent  transition-colors duration-1000 transform  hover:border-blue-500",
            ]} >About Us</NavLink>
             <NavLink to='/contact' className={({isActive}) =>[
                isActive? 'text-green-200 border-b-2 border-b-transparent  transition-colors duration-1000 transform  hover:border-blue-500' : "border-b-2 border-b-transparent  transition-colors duration-1000 transform  hover:border-blue-500",
            ]} >Contact Us</NavLink>
            
        </div>
    )
    return(
        <>
     <nav  className="relative bg-green-700 drop-shadow-2xl shadow ">
    <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
           <div className="flex ">
           <FcSportsMode className="text-7xl"> </FcSportsMode>
           <p className="mt-5 "><span className="text-5xl font-bold text-green-300 font-serif">UL</span > <span className="text-white">Scholarship</span></p>
           </div>
            <div className="flex lg:hidden">
                <button onClick={() => isOpen(!open)}  className="text-white hover:text-white">
                    {
                        open ? <HiX></HiX> : <FaBarsStaggered></FaBarsStaggered>
                    }
                    
                </button>
            </div>
        </div>
        {/* desktop */}
        <div className="flex justify-end">
           <div className="hidden md:flex ">
           {navLink}
           </div>
           <div className="md:flex md:justify-end  hidden">
                <button className="btn text-white border-blue-400 bg-gradient-to-r from-cyan-500 to-blue-500 p-1">Join Us</button>
            </div>
           
        </div>
        {/* Mobile */}
        <div>
        {
            open ?  <div  className=" drop-shadow-xl md:hidden text-green-800 hover:text-green-200 font-semibold absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-out hover:ease-in bg-green-400 shadow-xl md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0  md:items-center">
              <div  >
              {navLink}
              </div>
              <div className="flex  justify-center">
                <button className="mt-2 btn border-blue-400 p-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-xl text-white">Join Us</button>
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