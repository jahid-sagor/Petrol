import React from 'react'
import Banimg from "../assets/banner.png"

const Banner = () => {
  return (
   <section id='banner' className='py-[255px] !bg-cover !bg-center !bg-no-repeat  relative z-[1] after:absolute after:top-0 after:left-0 after:content-[""] after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)] after:z-[-1]' style={{background:`URL(${Banimg})`}}>
     <div className='max-w-container mx-auto'>
        <h2 className='text-white font-pop text-[16px] mx-2  lg:text-[64px] font-semibold lg:line-height:[96px] z-11 lg:w-[882px] lg:static'>We exist since 1975 on the oil and gas industry.</h2>
    <div className='my-8 relative'>
        <a className='border-2 px-6 py-2  text-white text-[12px] mx-2 line-height-[16px] font-pop lg:text-[16px] font-semibold lg:line-height:[24px]  hover:bg-red-800 hover:border-red-800 duration-300' href="#">LEARN MORE</a>
    </div>
    </div>
   </section>
  )
}

export default Banner