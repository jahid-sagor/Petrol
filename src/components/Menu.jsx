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
        <div className="w-1/1.25">
        <ScrollspyNav
            scrollTargetIds={["banner", "about", "service", "gallery", "blog","footer"]}
            offset={100}
            activeNavClass="is-active"
            scrollDuration="1000"
            headerBackground="true"
        >
           <ul className={`lg:flex lg:gap-20  z-[999] divide-y lg:divide-none divide-zinc-400  text-white absolute w-full left-0 top-0 lg:static ${show ? "top-[160px]  w-full left-0 bg-[#F40404]  py-6 text-right px-4 duration-1000 rounded-b-md ease-in-out" : "top-[-350px] w-full left-0  duration-500 ease-in-out"}`}>
                <li className='lg:py-0 py-4 '><a className='font-pop text-base font-semibold leading-6 hover:text-black duration-500 ' href="#banner">Home</a></li>
                <li className='lg:py-0 py-4 '><a className='font-pop text-base font-semibold leading-6  hover:text-black duration-500' href="#about">About</a></li>
                <li className='lg:py-0 py-4 '><a className='font-pop text-base font-semibold leading-6  hover:text-black duration-500' href="#service">Services</a></li>
                <li className='lg:py-0 py-4 '><a className='font-pop text-base font-semibold leading-6  hover:text-black duration-1500' href="#gallery">Gallery</a></li>
                <li className='lg:py-0 py-4'><a className='font-pop text-base font-semibold leading-6  hover:text-black duration-500' href="#blog">Blog</a></li>
                <li className='lg:py-0 py-4 '><a className='font-pop text-base font-semibold leading-6 border-2 px-8 py-3 hover:bg-[#f59e0b] hover:border-[#f59e0b] rounded-sm duratioon-500  hover:text-black' href="#footer">CONTACT</a></li>
           </ul>
        </ScrollspyNav>
        </div>
        <div className='lg:hidden cursor-pointer' onClick={handleShow}>
            {show == true ? <svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
							c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
							c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
							c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"></path>
						</svg> : <svg class="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path>
						</svg> }
        </div>
    </div>
    </section>
  )
}

export default Menu