import React from 'react'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='md:grid md:grid-cols-2 md:pt-16 leading-none'>
      <div className='pt-16 md:pt-32 '>
        <h1 className='text-3xl uppercase pl-16'>Hi, I'm Jonathan Oliveira</h1>
        <h2 className='text-4xl font-bold md:text-4xl uppercase pl-16'> Fullstack Developer</h2>
        <div className='md:mx-2 px-6 relative border-orange border rounded md:mx-0 md:px-14 pb-6 pt-8 mt-6'>
          <h3 className='absolute bg-orange py-2 px-6 text-white top-0 -mt-6 text-2xl font-bold uppercase'>Contact me</h3>
          <p className='text-center '>
            <FaLinkedin className='text-5xl md:text-6xl inline-block md:mr-6' />
            <FaGithub className='text-5xl md:text-6xl inline-block md:mr-6' />
            <FaYoutube className='text-5xl md:text-6xl inline-block' />
            <br />
            <span className='inline-block mt-4 '> or drop a line: jonathanoliveira3@gmail.com</span>
          </p>
        </div>
      </div>
      <div><img src='/images/jon-foto1.png' /></div>
    </div>
  )
}
export default Hero