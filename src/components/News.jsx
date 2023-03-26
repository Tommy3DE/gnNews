import React, { useState } from "react";
import news from "../assets/news.jpeg";
import NewsCard from "./NewsCard";
const News = ({ articles, handleToggle, showNewsCard }) => {

  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 grid:cols-1 w-auto 2xl:grid-cols-5" onClick={handleToggle}>
        {articles.map((article, index) => (
          <div className="p-2" key={index}>
            {showNewsCard && <NewsCard handleToggle={handleToggle}/>}
            <div className="flex flex-col justify-between text-black border-2  rounded p-1 h-full">
              <img
                src={article.urlToImage ? article.urlToImage : news}
                alt={article.author}
                className="p-1 rounded-lg md:h-[248px] lg:h-[200px] h-fit"
              />

              <div>
                <h1 className="lg:text-lg text-base font-bold hover:text-red-600 cursor-pointer">{article.title.slice(0, 90)}...</h1>
                <p className="text-gray-600">
                  {article.source.name ? article.source.name : <p>Jane Doe</p>}
                </p>
                <p className="text-gray-400">
                  {new Date(article.publishedAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </>
  );
};

export default News;
