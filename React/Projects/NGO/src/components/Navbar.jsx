import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-white py-3 shadow-2xl'>
        <div className='max-w-6xl mx-auto flex justify-between items center'>
            {/* logo section */}
            <div className=''>
                <Link to={'/'} className='font-bold text-3xl'><span className='text-green-500 font-serif'>Do</span>Charity</Link>
            </div>
            {/* menu section */}
            <nav>
                <ul className='flex gap-7 items-center text-xl font-semibold'>
                    <NavLink to={'/'} className={({isActive}) => `${isActive ? "border-b-3 transition-all border-red-500":"text-black"}`}><li>Home</li></NavLink>
                    <NavLink to={'/about'} className={({isActive}) => `${isActive ? "border-b-3 transition-all border-red-500":"text-black"}`}><li>About</li></NavLink>
                    {/* <NavLink to={'/contact'} className={({isActive}) => `${isActive ? "border-b-3 transition-all border-red-500":"text-black"}`}><li>Contact</li></NavLink> */}
                     <NavLink to='/volunteer' className={({ isActive }) =>  `${isActive ? "border-b-3 transition-all border-red-500":"text-black"}`}><li>Volunteer</li></NavLink>
                </ul>
            </nav>
        </div>
        </div>
  )
}

export default Navbar