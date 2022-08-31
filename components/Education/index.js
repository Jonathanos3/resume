import React from 'react'
import EducationItem from './EducationItem'

const degrees = [
  {
    degree: 'Graduation Degree',
    subject: 'Computer Information Systems',
    institution: 'College - Projection Ceilândia'
  }
]
const Education = () => {
  return (
    <div>
      <h3 className='text-4xl font-bold text-orange text-center uppercase mt-10 mb-5'> My Education</h3>
      <div className='mx-6 md:mx-0 md:grid md:grid-cols-2 leading-none bg-white rounded-lg shadow-lg py-6 px-12'>
        <EducationItem />
      </div>
    </div>
  )
}

export default Education