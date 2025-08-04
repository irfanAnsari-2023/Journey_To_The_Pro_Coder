import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../assets/about-1.jpg'

const About = () => {
 return (

    <div>
        <section className='max-w-5xl mx-auto px-4 py-10 text-center'>
      <h2 className='text-4xl font-bold mb-6 text-green-600'>About Us</h2>
      <p className='text-lg mb-4'>We are a non-profit organization focused on improving lives through education, food, and shelter programs.</p>
      <p className='text-md text-gray-700'>Our team is passionate about making a difference and creating a better future for everyone. We believe in empowering communities and fostering compassion and unity through sustainable initiatives.</p>
    </section>

    <section className='max-w-7xl mx-auto px-4 py-10'>
      <div className='flex flex-col md:flex-row items-center gap-10'>
        {/* Left Side Image */}
        <div className='w-full md:w-1/2'>
          <img
            src={img1}
            alt='Helping Hands'
            className='rounded-2xl shadow-lg w-full h-auto'
          />
        </div>

        {/* Right Side Content */}
        <div className='w-full md:w-1/2 space-y-6'>
          <h2 className='text-4xl font-bold text-green-600'>We Help People In Need Around The World</h2>

          <div className='bg-green-50 p-6 rounded-xl border-l-4 border-green-400 shadow-sm'>
            <p className='text-lg italic text-gray-700'>
              "A single act of kindness throws out roots in all directions, and the roots spring up and make new trees."
            </p>
            <p className='text-right mt-4 text-sm font-semibold text-gray-600'>— Irfan Ansari, Founder - DoCharity</p>
          </div>

          <div className='flex gap-4'>
            <Link
              to='/#'
              className='bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold'
            >
              Donate
            </Link>
            <Link
              to='/volunteer'
              className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold'
            >
              Be a Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
export default About