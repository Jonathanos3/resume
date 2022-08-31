import React from 'react'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'

const ContactMe = () => {
  return (<div className='md:mx-2 px-6 relative border-orange border rounded md:mx-0 md:px-14 pb-6 pt-8 mt-6'>
    <h3 className='absolute bg-orange py-2 px-6 text-white top-0 -mt-6 text-2xl font-bold uppercase'>Contact me</h3>
    <p className='text-center '>
      <FaLinkedin className='text-5xl md:text-6xl inline-block md:mr-6' />
      <FaGithub className='text-5xl md:text-6xl inline-block md:mr-6' />
      <FaYoutube className='text-5xl md:text-6xl inline-block' />
      <br />
      <span className='inline-block mt-4 '> or drop a line: jonathanoliveira3@gmail.com</span>
    </p>
  </div>
  )
}
export default ContactMe