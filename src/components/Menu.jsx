import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import ScrollspyNav from "react-scrollspy-nav";




const Menu = () => {
    let [show, setShow] = useState(false)
    let handleShow =() => {
        setShow(!show)
    }
  return (
    <section className='bg-[#F40404] py-4'>
        <div className='flex max-w-container mx-auto justify-between items-center'>
        <div className="w-1/4 ">
            <a href="#"><img src={logo} alt="logo" /></a>
        </div>
        <div className="w-1/1.25 ">
        <ScrollspyNav
            scrollTargetIds={["banner", "about", "service", "gallery", "blog","footer"]}
            offset={100}
            activeNavClass="is-active"
            scrollDuration="1000"
            headerBackground="true"
        >
           <ul className={`lg:flex lg:gap-20 z-[999] text-white absolute w-full left-0 top-0 lg:static ${show ? "top-[160px]  w-full left-0 bg-[#F40404] py-6 text-right px-4 transition duration-100 ease-in-out" : "top-[-250px] transition duration-100 ease-in-out"}`}>
                <li className='lg:py-0 py-2'><a className='font-pop text-base font-semibold leading-6 hover:text-black duration-500' href="#banner">Home</a></li>
                <li className='lg:py-0 py-2'><a className='font-pop text-base font-semibold leading-6  hover:text-black duration-500' href="#about">About</a></li>
                <li className='lg:py-0 py-2'><a className='font-pop text-base font-semibold leading-6  hover:text-black duration-500' href="#service">Services</a></li>
                <li className='lg:py-0 py-2'><a className='font-pop text-base font-semibold leading-6  hover:text-black duration-500' href="#gallery">Gallery</a></li>
                <li className='lg:py-0 py-2'><a className='font-pop text-base font-semibold leading-6  hover:text-black duration-500' href="#blog">Blog</a></li>
                <li className='lg:py-0 py-2'><a className='font-pop text-base font-semibold leading-6 border-2 px-8 py-3 hover:bg-[#f59e0b] hover:border-[#f59e0b] rounded-sm duration-500  hover:text-black' href="#footer">CONTACT</a></li>
           </ul>
        </ScrollspyNav>
        </div>
        <div className='lg:hidden' onClick={handleShow}>
            {show == true ? <ImCross className='text-white'/> : <FaBars  className='text-white'/> }
        </div>
    </div>
    </section>
  )
}

export default Menu