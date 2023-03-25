import React from "react";
import news from "../assets/news.jpeg";

const News = ({ articles, tiles }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 grid:cols-1 w-auto 2xl:grid-cols-5">
      {articles.map((article, index) => (
        <div className="p-2" key={index}>
          <div className="flex flex-col justify-between text-black border-2  rounded p-1 h-full">
            <img
              src={article.urlToImage ? article.urlToImage : news}
              alt={article.author}
              className="p-1 rounded-lg xl:h-[248px] h-fit"
            />
            
            <div>
              <h1 className="lg:text-lg text-base font-bold">{article.title}</h1>
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
  );
};

export default News;
