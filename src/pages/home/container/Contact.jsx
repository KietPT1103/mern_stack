import React from 'react'

function Contact() {
  return (
    <div className='bg-green-dark text-center py-12'>
        <h1 className='font-semibold text-4xl text-white'>
            Get our stories delivered From us to your inbox weekly.
        </h1>
        <div className='flex flex-col mx-auto w-[500px] mt-5'>
            <input type="text" placeholder='Your email'  className='p-6 text-3xl rounded-lg focus:outline-blue-500'/>
            <button className='w-full p-5 text-3xl bg-second mt-6 rounded-lg hover:text-white'>
                Get started
            </button>
        </div>
    </div>
  )
}

export default Contact