import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='relative min-h-screen bg-center bg-cover w-full overflow-hidden' style={{backgroundImage:"url('header_img.png')"}} id='Header'>
      <Navbar/>
      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='w-full max-w-7xl mx-auto px-6 md:px-20 lg:px-32 text-white flex flex-col items-center'>
          <h2 className='text-5xl sm:text-6xl md:text-[82px] font-semibold text-center w-full'>Plumbing at its best</h2>

          <div className='flex space-x-6 mt-16 justify-center w-full'>
              <a href="#PROJECTS" className='border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition-colors'>Projects</a>
              <a href="CONTACT" className='bg-blue-500 px-8 py-3 rounded hover:bg-blue-600 transition-colors'>Contact us</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
