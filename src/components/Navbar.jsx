import React, { useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
      <div className='absolute top-0 left-0 w-full z-10'>
        <div className='flex justify-between items-center text-white p-4'>
          <img src={assets.logo} alt="" className='w-24' />
          <div className='hidden md:flex flex-1 justify-center items-center'>
            <ul className='flex gap-8 items-center mx-8'>
              <li><a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a></li>
              <li><a href="#About" className='cursor-pointer hover:text-gray-400'>About</a></li>
              <li><a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a></li>
              <li><a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a></li>
            </ul>
          </div>
          <div className='hidden md:block'>
            <button className='bg-white px-8 py-2 rounded-full text-black'>Signup</button>
          </div>
          <img 
            src={isMenuOpen ? assets.cross_icon : assets.menu_icon} 
            className='block md:hidden w-8 cursor-pointer' 
            alt={isMenuOpen ? "close" : "menu"} 
            onClick={toggleMenu}
          />
        </div>
        {/*--------mobile-menu--------*/}
        <div className={`md:hidden fixed top-16 left-0 w-full h-[calc(100vh-4rem)] bg-black/90 backdrop-blur-sm ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className='h-full flex flex-col justify-center items-center'>
            <ul className='flex flex-col items-center gap-8 text-white'>
              <li><a href="#Header" onClick={toggleMenu} className='cursor-pointer hover:text-gray-400'>Home</a></li>
              <li><a href="#About" onClick={toggleMenu} className='cursor-pointer hover:text-gray-400'>About</a></li>
              <li><a href="#Projects" onClick={toggleMenu} className='cursor-pointer hover:text-gray-400'>Projects</a></li>
              <li><a href="#Testimonials" onClick={toggleMenu} className='cursor-pointer hover:text-gray-400'>Testimonials</a></li>
              <li>
                <button onClick={toggleMenu} className='bg-white px-8 py-2 rounded-full text-black'>Signup</button>
              </li>
            </ul>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Navbar

