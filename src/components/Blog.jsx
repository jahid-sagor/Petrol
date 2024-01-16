import React from 'react'
import Blog1 from "../assets/blog1.png"
import Blog2 from "../assets/blog2.png"
import Blog3 from "../assets/blog3.png"
import { MdArrowForwardIos } from "react-icons/md";


const Blog = () => {
  return (
   <section id='blog' className='bg-[#F0F0F0] py-[50px] lg:py-[110px]'>
    <div className='flex justify-between max-w-container mx-auto flex-wrap'>
        <div className="w-full lg:w-[30%] my-2 lg:my-0 py-[60px]  relative z-[1] after:absolute after:top-0 after:left-0 after:content-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)] after:z-[-1]  !bg-cover bg-center bg-no-repeat" 
         style={{background:`URL(${Blog1})`}}>
            <h2 className='text-white font-pop text-[24px] mx-16 font-bold line-height:[36px] '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
            <div className="mt-[52px]">
                <a className='text-white font-pop text-[12px] mx-16 font-semibold line-height:[18px] px-6 py-2 border-2 hover:bg-[#FFFFFF80] hover:border-[#FFFFFF80]' href="#">Read more</a>
            </div>
        </div>
        <div className="w-full lg:w-[30%] my-2 lg:my-0 py-[60px] relative z-[1] after:absolute after:top-0 after:left-0 after:content-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)] after:z-[-1]  !bg-cover bg-center bg-no-repeat" style={{background:`URL(${Blog2})`}}>
          <h2 className='text-white font-pop text-[24px] mx-16 font-bold line-height:[36px] '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
          <div className="mt-[52px]">
                <a className='text-white font-pop text-[12px] mx-16 font-semibold line-height:[18px] px-6 py-2 border-2 hover:bg-[#FFFFFF80] hover:border-[#FFFFFF80]' href="#">Read more</a>
            </div>
        </div>
        <div className="w-full lg:w-[30%] my-2 lg:my-0 py-[60px] relative z-[1] after:absolute after:top-0 after:left-0 after:content-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.5)] after:z-[-1]  !bg-cover bg-center bg-no-repeat" style={{background:`URL(${Blog3})`}}>
             <h2 className='text-white font-pop text-[24px] mx-16 font-bold line-height:[36px] '>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
             <div className="mt-[52px]">
                <a className='text-white font-pop text-[12px] mx-16 font-semibold line-height:[18px] px-6 py-2 border-2 hover:bg-[#FFFFFF80] hover:border-[#FFFFFF80]' href="#">Read more</a>
            </div>
        </div>
    </div>
         <div className= ' max-w-container mx-auto'>
            <div className=" w-full mt-[29px]">
               <a className='flex lg:justify-end justify-start items-center font-pop text-[16px] font-bold line-height:24px]' href="#">MORE FROM THE BLLOG <MdArrowForwardIos className='font-bold '/> </a>
            </div>
         </div>
   </section>
  )
}

export default Blog