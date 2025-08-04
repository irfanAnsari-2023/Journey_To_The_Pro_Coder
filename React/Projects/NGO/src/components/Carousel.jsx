import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import img1 from '../assets/carousel-1.jpg'
import img2 from '../assets/carousel-2.jpg' 
import img3 from '../assets/about-1.jpg'
 // adjust as per your image names

const Carousel = () => {
  return (
    <>
     <div className="relative w-full h-[75vh] overflow-hidden">
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        // className="mySwiper"
        className="w-full h-full"
      >
        <SwiperSlide>
          {/* Background Image with Overlay */}
          <div
            className="relative w-full h-[75vh] bg-cover bg-center  flex items-center justify-center "
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Text Content */}
            <div className="relative z-20 text-white text-center px-6 max-w-4xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                Let's Save More Lives With Our Helping Hand
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Join our mission to support the helpless and bring hope where it's needed most.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg transition duration-300">
                Learn More
              </button>
            </div> 
            </div>
            
            </SwiperSlide>

            <SwiperSlide>
          {/* Background Image with Overlay */}
          <div
            className="relative w-full h-[75vh] bg-cover bg-center  flex items-center justify-center "
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Text Content */}
            <div className="relative z-20 text-white text-center px-6 max-w-4xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                Let's Save More Lives With Our Helping Hand
              </h1>
              <p className="text-lg md:text-xl mb-6">
               Together, we can build a kinder, more compassionate world—one act of love at a time.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {/* Background Image with Overlay */}
          <div
            className="relative w-full h-[75vh] bg-cover bg-center  flex items-center justify-center "
            style={{
              backgroundImage: `url(${img3})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            {/* Text Content */}
            <div className="relative z-20 text-white text-center px-6 max-w-4xl">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                Every Child Deserves The Opportunity To Learn
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Help us provide education to underprivileged children and unlock their limitless potential.
              </p>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg transition duration-300">
                Donate Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
            <div className='bg-gray-100 '>
              <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px] ' style={{backgroundImage: `url(${img1})`, backgroundPosition:'center', backgroundAttachment: 'fixed'}}>
                <div className='absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
                    <div className='text-center text-white px-4'>
                        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Let's Save More Lifes With Our Helping Hand</h1>
                        <p className='text-lg md:text-xl mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, labore..</p>
                        <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300'>Learn More</button>
                    </div>
                </div>
              </div>
            </div>
        </SwiperSlide>

         <SwiperSlide>
            <div className='bg-gray-100 '>
              <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px] ' style={{backgroundImage: `url(${img2})`, backgroundPosition:'center', backgroundAttachment: 'fixed'}}>
                <div className='absolute inset-0 bg-black/60 md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
                    <div className='text-center text-white px-4'>
                        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Let's Change The World With Humanity </h1>
                        <p className='text-lg md:text-xl mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, labore..</p>
                        <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300'>Learn More</button>
                    </div>
                </div>
              </div>
            </div>
        </SwiperSlide> */}
        
         
       
        {/* <SwiperSlide>
          <img src={img1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Slide 2" />
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <img src={img3} alt="" />
        </SwiperSlide> */}
      </Swiper>
      </div>
    </>
  )
}

export default Carousel
