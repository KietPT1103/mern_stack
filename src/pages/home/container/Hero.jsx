import React from 'react'
import { images } from "../../../constansts";

function Hero() {
  return (
    <div className="bg-fixed bg-cover bg-center h-[500px] flex items-center" style={{ backgroundImage: `url(${images.Hero})` }}>
      <div className="px-5 text-center max-w-[100rem] mx-auto bg-white bg-opacity-60 py-10">
        <h1 className="text-4xl lg:text-[4rem] lg:leading-[5rem] font-bold text-green-700">Genshin Impact Vietnam: Guides, News, and Community</h1>
        <p className="text-xl lg:text-[2rem] lg:leading-[3rem] mt-8 text-green-600">Explore the world of Genshin Impact with the Vietnamese gaming community! Stay updated with the latest news, detailed guides from character builds to boss strategies, and join discussions on all aspects of this hit RPG.</p>
      </div>
    </div>
  )
}

export default Hero