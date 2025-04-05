import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <div className='max-w-4xl text-center'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>About <span className='text-blue-500'>Our Brand</span></h1>
        <p className='text-lg md:text-xl text-gray-600 mb-12'>Customer satisfaction is our priority. We provide top-quality plumbing services with a focus on reliability, efficiency, and customer care.</p>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="Our team at work" className='w-full sm:w-1/2 max-w-lg rounded-lg shadow-lg' />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div className='text-center'>
                        <p className='text-4xl font-medium text-gray-800'>10+</p>
                        <p className='text-gray-600'>Years of Excellence</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-4xl font-medium text-gray-800'>12+</p>
                        <p className='text-gray-600'>Projects Completed</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-4xl font-medium text-gray-800'>20+</p>
                        <p className='text-gray-600'>Million Sq Ft Delivered</p>
                    </div>
                    <div className='text-center'>
                        <p className='text-4xl font-medium text-gray-800'>25+</p>
                        <p className='text-gray-600'>Ongoing Projects</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg text-gray-600 leading-relaxed'>
                    With over a decade of experience in the plumbing industry, we've built our reputation on delivering exceptional service and quality workmanship. Our team of certified professionals is dedicated to solving your plumbing needs with innovative solutions and state-of-the-art equipment.
                </p>
                <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105'>Learn More</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
 