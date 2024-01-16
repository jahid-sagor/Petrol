import React from 'react'
import Part1 from "../assets/partner1.png"
import Part2 from "../assets/partner2.png"
import Part3 from "../assets/partner3.png"
import Part4 from "../assets/partner4.png"

const Partner = () => {
  return (
    <section id='partner'>
        <div className='flex justify-between max-w-container mx-auto my-10'>
           <div className="w-1/4">
            <img src={Part1} alt="Part1" />
           </div>
           <div className="w-1/4">
            <img src={Part2} alt="Part2" />
           </div>
           <div className="w-1/4">
            <img src={Part3} alt="Part3" />
           </div>
           <div className="w-1/4">
            <img src={Part4} alt="Part4" />
           </div>
        </div>
    </section>
  )
}

export default Partner