import React from "react";

function SuggestedArticle({ className, header, posts }) {
  return (
    <div
      className={`w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg mt-4 p-8 ${className}`}
    >
      <h2 className="font-roboto font-medium text-2xl text-green-700">
        {header}
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-6">
        {posts.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <img
              src={item.image}
              className="w-1/5 aspect-square rounded-lg object-cover"
              alt="ehe"
            />
            <div className="flex flex-col justify-between">
              <h3 className="font-semibold text-lg line-clamp-2">
                {item.title}
              </h3>
              <span className="text-gray-500">
                {new Date(item.createdAt).toLocaleDateString("vi-EN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuggestedArticle;
