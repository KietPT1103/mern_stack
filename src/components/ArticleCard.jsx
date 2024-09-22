import React from 'react'
import images from '../constansts/images'

function ArticleCard({className}) {
  return (
    <div className={`rounded-xl w-[85%] mx-auto overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${className}`}>
      <img src={images.xilonen} className='w-full object-center h-auto' alt="demo" />
      <div className='mt-5 font-roboto p-8'>
          <h2 className=' font-bold text-3xl md:text-4xl line-clamp-2'>
            Title
          </h2>
          <p className=' text-2xl md:text-3xl mt-2 line-clamp-2'>
            Description
          </p>
          <div className='flex justify-between flex-nowrap items-center mt-8'>
            <div className='flex items-center gap-6'>
                <img src={images.batman} alt="avatar" className='w-[4rem] h-[4rem] md:w-[6rem] md:h-[6rem] object-cover rounded-full'/>
                <div>
                  <h3 className='font-bold text-xl md:text-3xl'>Batman teyvat</h3>
                </div>
            </div>
            <div className='font-bold text-xl md:text-3xl text-gray-600 italic'>02 May</div>
          </div>
      </div>
    </div>
  )
}

export default ArticleCard