import React from "react";
import news from "../assets/news.jpeg";

const NewsLines = ({ articles, handleToggle, showNewsCard, selectedArticle }) => {
  return (
    <div className="flex flex-col h-full justify-center w-full">
      {articles.map((article, index) => (
        <div className="p-1 " key={index}>
          <div className="p-1  md:px-1 flex md:flex-row flex-col justify-between items-center text-black border-2  rounded  w-full" onClick={() => handleToggle(article)}>
            <img
              src={article.urlToImage ? article.urlToImage : news}
              alt={article.author}
              className="w-auto rounded-lg md:max-h-24 md:min-w-[200px] md:min-h-[110px] min-w-full"
            />
            <h1 className="text-lg w-auto md:max-w-2xl">{article.title}</h1>
            <div>
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
