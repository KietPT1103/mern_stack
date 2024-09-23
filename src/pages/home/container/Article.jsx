import React from "react";
import ArticleCard from "../../../components/ArticleCard";

function Article() {
  return (
    <section className=" lg:px-48 mt-12 text-xl py-12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 lg:gap-y-28">
        <ArticleCard className="w-full lg:w-[calc(90%-20px)]" />
        <ArticleCard className="w-full lg:w-[calc(90%-20px)]" />
        <ArticleCard className="w-full lg:w-[calc(90%-20px)]" />
        <ArticleCard className="w-full lg:w-[calc(90%-20px)]" />
        <ArticleCard className="w-full lg:w-[calc(90%-20px)]" />
        <ArticleCard className="w-full lg:w-[calc(90%-20px)]" />
      </div>
      <div className="mt-12">
        <button className="text-blue-500 text-3xl flex items-center mx-auto justify-center hover:scale-105 transition-all border-2 border-blue-500 px-4 py-3 rounded-lg">
          More article
          <span>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 1024 1024"
              fill="#3b82f6"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#3b82f6"
              stroke-width="90"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-0.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782 0.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z"
                  fill=""
                ></path>
              </g>
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}

export default Article;
