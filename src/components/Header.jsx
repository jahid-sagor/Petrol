import React from 'react'
import { FaFacebookF,FaTwitter,FaInstagramSquare,FaLinkedinIn    } from "react-icons/fa";
import { MdOutlineMailLock } from "react-icons/md";
import { IoCall } from "react-icons/io5";





const Header = () => {
  return (
    <>
    <section id='header' className='bg-[#000]'>
        <div className='flex max-w-container mx-auto py-3 flex-wrap'>
       <div className='lg:w-1/2 flex flex-wrap'>
       <div className='w-full lg:w-1/2 flex items-center gap-1 text-white'>
        <h2> <MdOutlineMailLock/></h2>
        <a className='font-pop text-xs font-normal line-height:"18px"' href="https://gmail.com/" target='blank'> mail@yourcompany.com</a>
        <h3 className='text-[#5C6A92] lg:mx-16 items-center'>|</h3>
       </div>
       <div className='full lg:w-1/2 flex lg:justify-start justify-end items-center gap-1 text-white'>
        <h2> <IoCall/></h2>
          <a  className='font-pop text-xs font-normal line-height:"18px" lg:my-0 my-1 text-right' href="#"> +896 120 5889 (Toll free)</a>
       </div>
       </div>
       <div className='w-full lg:w-1/2 flex lg:justify-end gap-8 text-white lg:my-0 my-2'>
          <FaFacebookF className='cursor-pointer'/>
          <FaTwitter className='cursor-pointer'/>
          <FaLinkedinIn   className='cursor-pointer'/>
          <FaInstagramSquare className='cursor-pointer' />
       </div>
    </div>
    </section>

    <section className='bg-[#fcd34d] py-[1.5px]'>
    </section>
     </>
  )
}

export default Header