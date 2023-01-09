import React from 'react'
import Typed from 'react-typed';
const Banner = () => {
  return (
    <div className='w-full py-[100px] lg:h-screen'>
      <div className='max-w-[1240px] my-[100px] mx-auto text-center font-bold'>
        <div className='mt-4 md:p-2 md:text-3xl text-2xl'>
          Learn with us
        </div>
        <h2 className='mt-4 md:p-2 text-[#144272] md:text-[80px] text-4xl'>Grow with us.</h2>
        <div className='mt-6 md:p-2 text-[#144272] text-2xl md:text-[50px]'>
          <Typed
                  className='pl-1'
                    strings={['Civil', 'Mechanical', 'Electrical', 'Computer Science']}
                    typeSpeed={100}
                    backSpeed={100}
                    loop={true}
                />
        </div>
      </div>
    </div>
  )
}

export default Banner
