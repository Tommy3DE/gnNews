import React from "react";
import { useNavigate } from "react-router-dom";
import NewsCard from "./NewsCard";

const NewsLines = ({ articles, handleToggle, showNewsCard, selectedArticle }) => {
  const navigate = useNavigate()
  const handleClick = (article) => {
    navigate(`/news?title=${encodeURIComponent(article.title)}`);
    handleToggle(article);
  };
  return (
    <div className="flex flex-col h-full justify-center w-full">
      {articles.map((article, index) => (
        <div className="p-1 " key={index}>
          <div className="p-1  md:px-1 flex md:flex-row flex-col justify-between items-center text-black border-2  rounded  w-full" onClick={() => handleClick(article)}>
            <h1 className="text-lg w-auto basis-3/4">{article.title}</h1>
            <div className="basis-1/4 text-center">
              <p className="text-gray-600">
                {article.source.name ? article.source.name : <p>Jane Doe</p>}
              </p>
              <p className="text-gray-400">
                {new Date(article.publishedAt).toLocaleString()}
              </p>
            </div>
          </div>
          {showNewsCard && selectedArticle === article && (
              <NewsCard handleToggle={handleToggle} article={article} />
            )}
        </div>
      ))}
    </div>
  );
};

export default NewsLines;
