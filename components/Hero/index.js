import React from 'react'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'

const Hero = () => {
  return (<div className='grid grid-cols-2 pt-16 leading-none'>
    <div className='pt-32 '>
      <h1 className='text-3xl uppercase pl-16'>Hi, I'm Jonathan Oliveira</h1>
      <h2 className='font-bold text-4xl uppercase pl-16'> Fullstack Developer</h2>
      <div className=' relative border-orange border rounded px-16 pb-4 pt-10 mt-6'>
        <h3 className='absolute bg-orange py-2 px-6 text-white top-0 -mt-6 text-2xl font-bold uppercase'>Contact me</h3>
        <p>
          <FaLinkedin className='text-6xl inline-block mr-6' />
          <FaGithub className='text-6xl inline-block mr-6' />
          <FaYoutube className='text-6xl inline-block mr-6' />
        </p>
        <br />
        <span className='mt-2'> or drop a line: jonathanoliveira3@gmail.com</span>

      </div>
    </div>
    <div><img src='/images/jon-foto1.png' /></div>
  </div>
  )
}
export default Hero