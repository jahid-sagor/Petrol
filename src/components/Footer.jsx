import React from 'react'
import Logo from "../assets/logo.png"
import { MdMailLock } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrMap } from "react-icons/gr";
import { FaFacebookF,FaTwitter,FaInstagramSquare,FaLinkedinIn    } from "react-icons/fa";
import ScrollToTop from "react-scroll-to-top";
import ScrollspyNav from "react-scrollspy-nav";




const Footer = () => {
  return (
   <section id='footer' className='bg-[#1F1F1F]'>
    <div className='max-w-container mx-auto flex py-[50px] lg:py-[150px] flex-wrap'>
        <div className="w-full lg:w-[40%]">
           <div className="">
              <a className='mx-4 lg:mx-0' href="#"><img src={Logo} alt="Logo"/> </a>
           </div>
           
            <div className=" flex items-center gap-2 mt-[20px] lg:mt-[33px] mx-4 lg:mx-0 ">
                <h2 className='text-white'><MdMailLock/></h2>
                <a className='text-white font-pop text-[12px] lg:text-[14px] line-height-[21px] font-normal' href="#">  mail@yourcompany.com </a>
            </div>
            <div className="flex items-center gap-2 mt-[15px] mx-4 lg:mx-0">
                <h2 className='text-white'> <BiSolidPhoneCall/> </h2>
                <a className='text-white font-pop text-[12px] lg:text-[14px] line-height-[21px] font-normal' href="#">+896 120 5889 (Toll free) </a>
            </div>
            <div className="flex items-center gap-2 mt-[15px] mx-4 lg:mx-0">
                <h2 className='text-white' ><GrMap/>  </h2>
                <a className='text-white font-pop text-[12px] lg:text-[14px] line-height-[21px] font-normal' href="#">101 Baker Street, New York, USA, 12345 </a>
            </div>
            <div className="text-white flex  gap-6 mt-[25px] lg:mt-[34px] mx-4 lg:mx-0">
                 <div className='bg-[red] py-3 px-3 rounded-full'>
                 <FaFacebookF className='text-white'/>
                 </div>
                 <div className='bg-[red] py-3 px-3 rounded-full'>
                 <FaTwitter  className= ' text-white'/>
                 </div>
                 <div className= '  bg-[#F40404] py-3 px-3 rounded-full'>
                <FaLinkedinIn   className= ' text-white' />
                 </div>
                 <div className= '  bg-[#F40404] py-3 px-3 rounded-full'>
                <FaInstagramSquare  className= ' text-white'/>
                 </div>
            </div>
        </div>
        <div className="w-full lg:w-[60%] flex justify-between ">
            <div className='w-[30%] lg:w-[33.33%] mt-[50px] mx-2  lg:mx-0 lg:mt-[32px]'>
                   <ScrollspyNav
                      scrollTargetIds={["banner", "about", "service", "gallery"]}
                      offset={100}
                      activeNavClass="is-active"
                      scrollDuration="1000"
                       headerBackground="true"
                   >
                   <h2 className='text-white font-pop text-[14px] lg:text-[16px] line-height-[24px] font-bold'>Company</h2>
                <ul className='my-[21px]'>
                    <li className='my-[10px]'><a className='text-white font-pop text-[12px] lg:text-[14px] line-height-[21px] font-normal' href="#banner">Home</a></li>
                    <li className='my-[10px]'><a  className='text-white font-pop text-[12px] lg:text-[14px] line-height-[21px] font-normal' href="#about">About</a></li>
                    <li className='my-[10px]'><a className='text-white font-pop text-[12px] lg:text-[14px] line-height-[21px] font-normal' href="#service">Services</a></li>
                    <li className='my-[10px]'><a className='text-white font-pop text-[12px] lg:text-[14px] line-height-[21px] font-normal' href="#gallery">Gallery</a></li>
                </ul>
                </ScrollspyNav>
            </div>
            <div className='w-[30%] lg:w-[33.33%] mt-[50px] lg:mt-[32px]'>
                 <ScrollspyNav
                     scrollTargetIds={["blog", "contact"]}
                     offset={100}
                     activeNavClass="is-active"
                     scrollDuration="1000"
                      headerBackground="true"
                 >
                <h2 className='text-white font-pop text-[14px] lg:text-[16px] line-height-[24px] font-bold'>Others</h2>
                <ul className='my-[21px]'>
                    <li className='my-[10px]'><a className='text-white font-pop text-[12px] lg:text-[14px] line-height-[21px] font-normal' href="#blog">Blog</a></li>
                    <li className='my-[10px]'><a  className='text-white font-pop text-[12px] lg:text-[14px] line-height-[21px] font-normal' href="#contact">Contact</a></li>
                    <li className='my-[10px]'><a className='text-white font-pop text-[12px] lg:text-[14px] line-height-[21px] font-normal' href="#">Terms & Conditions</a></li>
                    <li className='my-[10px]'><a className='text-white font-pop text-[12px] lg:text-[14px] line-height-[21px] font-normal' href="#">Privacy Policy</a></li>
                </ul>
                </ScrollspyNav>
            </div>
            <div className='w-[40%] lg:w-[33.33%] mt-[50px] lg:mt-[32px]'>
            <h2 className='text-white font-pop text-[14px] lg:text-[16px] line-height-[24px] font-bold'>Certificate</h2>
            <div className='flex mt-[21px] gap-1 lg:gap-2'>
            <div className='w-1/2 bg-white rounded'>
               <h2 className='text-[#008AD8]  font-pop text-[14px] lg:text-[24px] line-height-[36px] font-bold  mx-[5px] lg:mx-[9px] mt-2 lg:mt-0'>ISO 88</h2>
               <p className='text-[#008AD8]  font-pop text-[6px]  lg:text-[8px] line-height-[12px] font-medium mx-[5px] lg:mx-[9px] pb-[2px] lg:pb-[5px]'>Environmentally Safe</p>
            </div>
            <div className='w-1/2 bg-white rounded mr-2 lg:mr-0'>
               <h2 className='text-[#009818]  text-center mt-[15px]  font-pop text-[8px] lg:text-[14px] line-height-[21px] font-bold'> <span className='text-[#980077]'>Liquid</span> Green</h2>
            </div>
            </div>
            </div>
        </div>
    </div>
    <div className=' bg-[#282828]'>
        <div className=' max-w-container mx-auto'>
             <h2 className='text-[#6C6C6C]  py-[21px] text-center lg:text-left font-pop text-[14px] lg:text-[16px] line-height-[24px] font-medium'>© Copyright 2022 by AltDesain Studio - All right reserved.</h2>
        </div>
    </div>
    <ScrollToTop smooth />
   </section>
  )
}

export default Footer