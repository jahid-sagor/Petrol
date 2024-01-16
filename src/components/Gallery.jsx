import React from 'react'
import Galleryimg from "../assets/gallery.png"

const Gallery = () => {
  return (
    <section id='gallery' className='lg:my-[136px] my-16'>
        <div className="flex max-w-container mx-auto items-center flex-wrap">
            <div className="w-full lg:w-[30%] p-0 bg-[#F40404] py-[50.50px]  lg:py-[99.50px]">
              <h2 className='text-white font-pop text-[24px] line-height-[36px] lg:text-[36px] lg:line-height-[54px] font-bold mx-[60px]'>Learn more about our company</h2>
            </div>
            <div className="w-full lg:w-[70%] p-0 py-[155px] lg:py-[128.12px]   !bg-cover bg-center bg-no-repeat" style={{background:`url(${Galleryimg})`}}>
                 <div className="lg:mt-20 mt-4">
                 <a className='text-[#ffff] px-8 py-2 border-2 mx-[100px] lg:mx-[330px] font-pop text-[16px] font-semibold hover:text-[#F40404] hover:bg-white duration-300' href="#">Learn More</a>
                 </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery