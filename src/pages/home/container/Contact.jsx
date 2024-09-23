import React from 'react'
import { images } from '../../../constansts'

function Contact() {
  return (
    <div className='bg-green-dark text-center py-12 h-[600px] bg-fixed bg-cover bg-center flex flex-col justify-center' style={{ backgroundImage: `url(${images.Banner})` }}>
        <h1 className='font-semibold text-4xl text-white'>
            Get our stories delivered From us to your inbox weekly.
        </h1>
        <div className='flex flex-col mx-auto w-[500px] mt-5'>
            <input type="text" placeholder='Your email'  className='p-6 text-3xl rounded-lg focus:outline-blue-500'/>
            <button className='w-full p-5 text-3xl bg-green-dark mt-6 rounded-lg hover:text-second'>
                Get started
            </button>
        </div>
    </div>
  )
}

export default Contact