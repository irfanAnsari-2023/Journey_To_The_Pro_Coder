import React from 'react'
import banner from '../assets/banner.avif'
import { Link } from 'react-router-dom';
const MidBanner = () => {
  return (
    <div className='bg-gray-100 md:py-24'>
      <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px] ' style={{backgroundImage: `url(${banner})`, backgroundPosition:'center', backgroundAttachment: 'fixed'}}>
        <div className='absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
            <div className='text-center text-white px-4'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>We Help People In Need</h1>
                <p className='text-lg md:text-xl mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, labore..</p>
                <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300'>Learn More</button>

                {/* <Link
              to='/#'
              className='bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold text-2xlxl transition duration-300'
            >Donate</Link> */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner