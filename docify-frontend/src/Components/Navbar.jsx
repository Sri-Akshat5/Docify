import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import  logo  from "../assets/logo.png";



function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute w-full h-18 z-[99] flex  md:flex-row md:justify-between  p-5">
        <button className='md:hidden' onClick={()=>setMenuOpen(!menuOpen)}>
           <CiMenuKebab className='text-zinc-600 text-3xl mt-2'/>
      </button>
      {/* Desktop Navbar*/}
      <div className='md:flex items-center w-25  hidden relative'>
        
       <img src={logo} alt="logo" className='grayscale invert  cursor-pointer ' />
        
      </div>
      <div className='hidden px-5 md:gap-10 md:flex items-center text-zinc-600'>
        <Link to="/" className=' hover:text-zinc-200 cursor-pointer'>Home</Link>
        <Link to="/ai" className='hover:text-zinc-200 cursor-pointer'>AI</Link>
        <Link to="/upload" className='hover:text-zinc-200 cursor-pointer'>Upload</Link>
        <Link to="/account" className='hover:text-zinc-200 cursor-pointer'>Account</Link>
        </div>

      {/* Mobile Nav menu*/}
      {/* Mobile Menu Button*/}
    
      {menuOpen && <div className='w-screen '>
       
     
      <div className=' px-3 text-zinc-600 space-x-3.5'>
      
        
        <Link to="/" className='hover:text-zinc-200 cursor-pointer'>Home</Link>
         <Link to="/ai" className='hover:text-zinc-200 cursor-pointer'>AI</Link>
        <Link to="/upload" className='hover:text-zinc-200 cursor-pointer'>Upload</Link>
        <Link to="/account" className='hover:text-zinc-200 cursor-pointer'>Account</Link>
        </div>
        </div>}
    </div>
  )
}

export default Navbar