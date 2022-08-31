import React from 'react'
import ContactMe from './ContactMe'

const Hero = () => {
  return (
    <div className='md:grid md:grid-cols-2 md:pt-16 leading-none'>
      <div className='pt-16 md:pt-32 '>
        <h1 className='text-3xl uppercase pl-16'>Hi, I'm Jonathan Oliveira</h1>
        <h2 className='text-4xl font-bold md:text-4xl uppercase pl-16'> Fullstack Developer</h2>
        <ContactMe />
      </div>
      <div><img src='/images/jon-foto1.png' /></div>
    </div>
  )
}
export default Hero