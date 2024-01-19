import React from 'react'
import Serviceimg1 from "../assets/service1.png"
import Serviceimg2 from "../assets/service2.png"
import Serviceimg3 from "../assets/service3.png"


const Service = () => {
  return (

    <section>
        <div id='service' className='flex flex-wrap'>
          <div className='w-full lg:w-1/2'>
            <h2 className='text-[#000000] font-pop text-[24px] line-height-[24px] mt-[30px] mx-4 lg:text-[64px] lg:line-height-[96px] font-bold lg:mt-[150px] lg:mx-[150px]'>Our Services</h2>
            <h3 className='text-[#6C6C6C] font-pop text-[14px] line-height-[16px] mx-[20px] mt-2 lg:mt-0 lg:text-[16px] lg:line-height-[24px] font-medium lg:mx-[155px] lg:w-[400px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h3>
          </div>
          <div style={{background:`URL(${Serviceimg1})`}} className='w-full  !bg-cover bg-center bg-no-repeat  py-[100px] lg:w-1/2 mt-8 lg:py-[165px] relative z-[1] after:absolute after:top-0 after:left-0 after:content-[""] after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)] after:z-[-1]'>
          <h2 className='text-white font-pop  text-[24px]  mx-4  lg:text-[36px] lg:line-height-[54px] font-bold lg:mt-0'>Modern natural oil and gas refineries.</h2>
            <div className='mt-10 lg:mt-5'>
                <a className='text-white px-8 py-2 border-2 font-pop text-[16px] line-height-[24px] font-semibold  mx-4 hover:bg-red-700 hover:border-red-700 duration-200' href="#">Learn More</a>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap'>
        <div className='test w-full lg:w-1/2 py-[100px] !bg-cover bg-center bg-no-repeat lg:py-[165px]  relative z-[1] after:absolute after:top-0 after:left-0 after:content-[""] after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)] after:z-[-1] ' style={{background:`URL(${Serviceimg2})`, }}>
            <h2 className='text-white font-pop text-[24px]  lg:text-[36px] lg:line-height-[54px] font-bold mx-4'>Modern natural oil and gas refineries.</h2>
            <div className='mt-10 lg:mt-5'>
                <a className='text-white px-8 py-2 border-2 font-pop text-[16px] line-height-[24px] font-semibold  mx-4 hover:bg-red-700 hover:border-red-700 duration-200' href="#">Learn More</a>
            </div>
          </div>
          <div className='w-full lg:w-1/2  !bg-cover bg-center bg-no-repeat py-[100px] text-[24px] lg:py-[165px]  relative z-[1] after:absolute after:top-0 after:left-0 after:content-[""] after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)] after:z-[-1] ' style={{background:`URL(${Serviceimg3})`}}>
            <h2 className='text-white font-pop lg:text-[36px] lg:line-height-[54px] font-bold mx-4'>Modern natural oil and gas refineries.</h2>
            <div className='mt-10 lg:mt-5'>
                <a className='text-white px-8 py-2 border-2 font-pop text-[16px] line-height-[24px] font-semibold  mx-4 hover:bg-red-700 hover:border-red-700 duration-200' href="#">Learn More</a>
            </div>
          </div>
        </div> 
    </section>
  )
}

export default Service