import React from 'react'
import Aboutimg1 from "../assets/about1.png"
import Aboutimg2 from "../assets/about2.png"
import Aboutimg3 from "../assets/about3.png"
import Aboutimg4 from "../assets/about4.png"

const About = () => {
  return (
    <section>
    <div id='about' className='flex max-w-container justify-between mx-auto my-[78px] lg:mt-[139px]  items-center flex-wrap'>
       <div className="w-full my-4 lg:w-[25%] lg:my-0 ">
      <h2 className= ' text-[#000000] font-pop text-[24px] mx-2 lg:mx-0  lg:text-[48px] font-semibold lg:line-height:[72px]'>The biggest supplier on the country</h2>
       </div>
      <div className="w-[95%] mx-2 lg:w-[60%] lg:mx-0">
       <h2 className='text-[#6C6C6C] font-pop text-[16px] line-height-[24px] lg:text-[16px] font-medium lg:line-height:[24px] lg:w-[650px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</h2>
      </div>
   </div>

    <div className='flex gap-x-4 flex-wrap'>
       <div className="w-full lg:w-[24.15%] my-4 lg:my-0">
        <img className='w-full ' src={Aboutimg1}  alt="Aboutimg1"/>
      </div>
       <div className="w-full lg:w-[24.21%] my-4 lg:my-0">
       <img className='w-full' src={Aboutimg2} alt="Aboutimg2" />
      </div>
      <div className="w-full lg:w-[24.15%] my-4 lg:my-0">
        <img className='w-full' src={Aboutimg3} alt="Aboutimg3" />
         </div>
         <div className="w-full lg:w-[24.15%] my-4 lg:my-0">
          <img className='w-full' src={Aboutimg4} alt="Aboutimg4" />
         </div>
      </div>

  </section>
  )
}

export default About