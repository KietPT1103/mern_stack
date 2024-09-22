import React from "react";
import { images } from "../../../constansts";

function Hero() {
  return (
    <div
      className="bg-fixed bg-cover bg-center h-[600px] flex items-center"
      style={{ backgroundImage: `url(${images.Hero})` }}
    >
      <div className="px-5 text-center max-w-[100rem] mx-auto bg-white bg-opacity-60 py-10">
        <h1
          className="text-4xl lg:text-[4rem] lg:leading-[5rem] font-bold text-green-700 drop-shadow-md"
          style={{ filter: "drop-shadow(2px 4px 6px #9BEC00)" }}
        >
          Genshin Impact Vietnam: Guides, News, and Community
        </h1>
        <p
          className="text-xl lg:text-[2rem] lg:leading-[3rem] mt-8 text-green-700 drop-shadow-sm"
          style={{ filter: "drop-shadow(2px 4px 6px #9BEC00)" }}
        >
          Explore the world of Genshin Impact with the Vietnamese gaming
          community! Stay updated with the latest news, detailed guides from
          character builds to boss strategies, and join discussions on all
          aspects of this hit RPG.
        </p>
        <div className="mt-12">
          <div className=" flex justify-center items-center">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </span>
              <input
                className="w-[32rem] px-4 pl-16 py-5 text-2xl focus:border-blue-500 focus:bg-blue-100 focus:outline-none rounded-md mr-4"
                type="text"
                placeholder="Search something..."
              />
            </div>
            <button className="px-6 py-4 bg-green-600 text-white rounded-md hover:opacity-90 font-semibold text-3xl">
              Search
            </button>
          </div>
          <div className="flex justify-center items-center gap-4 mt-6">
            <span className="text-3xl">Popular Tags:</span>
            <ul className="text-xl flex gap-4 italic">
              <li className="bg-green-800 p-3 text-white transition-all rounded-md hover:underline hover:opacity-90 cursor-pointer">Character</li>
              <li className="bg-green-800 p-3 text-white transition-all rounded-md hover:underline hover:opacity-90 cursor-pointer">Artifact</li>
              <li className="bg-green-800 p-3 text-white transition-all rounded-md hover:underline hover:opacity-90 cursor-pointer">Weapon</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
