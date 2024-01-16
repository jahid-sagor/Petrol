import React from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <section id='map'>
       <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>

       <div className='bg-[#F40404] py-8'>
       <div className='flex justify-between max-w-container mx-auto items-center flex-wrap'>
           <div className="w-full lg:w-[80%]">
            <h2 className='text-white font-pop text-[24px] lg:text-[36px] mx-2 font-bold lg:line-height:[54px] '>Want to join as member branch in your area?</h2>
           </div>
           <div className="w-full py-8 lg:w-[20%] lg:text-right lg:py-0 ">
            <a className='text-white px-10 py-2 border-2 font-pop text-[14px] lg:text-[16px] mx-2 font-semibold line-height:[24px] hover:bg-[#FFB800]  hover:text-black hover:border-[#FFB800] duration-500' href="#">CONTACT</a>
           </div>
        </div>
       </div>
    </section>
  )
}

export default Map