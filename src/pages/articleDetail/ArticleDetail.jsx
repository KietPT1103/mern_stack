import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images } from "../../constansts";
import { Link } from "react-router-dom";
import SuggestedArticle from "./container/SuggestedArticle";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article title", link: "/blog/1" },
];

const postsData = [
    {
        id: "1",
        image: images.mavuika,
        title: "New character, Fire archon: Mavuika?",
        createdAt: "2024-05-18T16:00:00Z"
    },
    {
        id: "2",
        image: images.batman,
        title: "A hero in mondstadt?",
        createdAt: "2024-05-18T16:00:00Z"
    },
    {
        id: "3",
        image: images.natlan_charracter,
        title: "New character in Natlan incomming",
        createdAt: "2024-05-18T16:00:00Z"
    },
]

function ArticleDetail() {
  return (
    <MainLayout>
      <div className="container mx-auto max-w-7xl flex flex-col px-5 py-5">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <img
            src={images.xilonen}
            alt="img"
            className="w-full rounded-lg mb-8"
          />
          <div className="flex gap-6 items-center">
            <p className="text-xl">Tag:</p>
            <Link
              to="/blog?category=selectedCategory"
              className="text-lg bg-green-dark text-white p-3 font-semibold rounded-md hover:underline italic"
            >
              NEW CHARACTER
            </Link>
          </div>
          <h1 className="text-5xl font-bold font-roboto my-10 text-green-700">
            New character in natlan, Xilonen!
          </h1>
          <p className="leading-7 text-xl">
            ehehehehe ehehehehe ehehehehe ehehehehe ehehehehe ehehehehe
            ehehehehe ehehehehe ehehehehe ehehehehe ehehehehe ehehehehe
            ehehehehe ehehehehe ehehehehe ehehehehe ehehehehe ehehehehe
            ehehehehe ehehehehe ehehehehe ehehehehe ehehehehe ehehehehe
            ehehehehe ehehehehe ehehehehe ehehehehe ehehehehe ehehehehe
            ehehehehe ehehehehe ehehehehe ehehehehe ehehehehe ehehehehe
            ehehehehe ehehehehe ehehehehe{" "}
          </p>
        </article>
        <SuggestedArticle header={"Lastest Articles"} posts={postsData}/>
      </div>
    </MainLayout>
  );
}

export default ArticleDetail;
