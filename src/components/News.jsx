import React from "react";
import news from "../../public/assets/news.jpeg";

const News = ({ articles, tiles }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 grid:cols-1 w-auto">
      {articles.map((article, index) => (
        <div className="p-2" key={index}>
          <div className="flex flex-col justify-between text-black border-2  rounded p-1 h-full">
            <img
              src={article.urlToImage ? article.urlToImage : news}
              alt={article.author}
              className="w-full p-1 rounded-lg md:min-h-[200px] "
            />
            <h1 className="text-lg">{article.title}</h1>
            <div>
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
