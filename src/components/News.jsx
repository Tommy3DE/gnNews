import React from "react";
import news from "../assets/news.jpeg";
import NewsCard from "./NewsCard";
import { useNavigate } from "react-router-dom";

const News = ({ articles, handleToggle, showNewsCard, selectedArticle }) => {
  const navigate = useNavigate()
  const handleClick = (article) => {
    navigate(`/news?title=${encodeURIComponent(article.title)}`);
    handleToggle(article);
  };
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 grid:cols-1 w-auto 2xl:grid-cols-5">
        {articles.map((article, index) => (
          <div className="p-2" key={index}>
            <div
              className="flex flex-col justify-between text-black border-2  rounded p-1 h-full"
              onClick={() => handleClick(article)}
            >
              <img
                src={article.urlToImage ? article.urlToImage : news}
                alt={article.author}
                className="p-1 rounded-lg md:h-[248px] h-fit xl:h-[300px] "
              />

              <div>
                <h1 className="lg:text-lg text-base font-bold hover:text-red-600 cursor-pointer">
                  {article.title.slice(0, 90)}...
                </h1>
                <p className="text-gray-600">
                  {article.source.name ? article.source.name : <p>Jane Doe</p>}
                </p>
                <p className="text-gray-400">
                  {new Date(article.publishedAt).toLocaleString()}
                </p>
              </div>
            </div>
            {showNewsCard && selectedArticle === article && (
              <NewsCard handleToggle={handleToggle} article={article}/>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default News;