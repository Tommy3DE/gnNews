import React from "react";

const News = ({ articles }) => {
  return (
    <div className="w-full flex flex-col">
      {articles.map((article) => (
        <div className=" flex flex-row m-1">
          <div className="flex flex-col bg-white w-2/5 rounded p-1" key={article.publishedAt}>
            <img
              src={article.urlToImage}
              alt={article.author}
              className="w-full p-1 rounded-lg"
            />
            <h1 className="text-lg">{article.title}</h1>
            <div>
              {article.author ? article.author : <p>Author not listed</p>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
