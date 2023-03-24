import React from "react";
import news from '../../public/assets/news.jpeg'

const News = ({ articles }) => {

  return (
    <div className="w-full flex flex-col">
      {articles.map((article) => (
        <div className=" flex flex-row m-1" key={article.publishedAt}>
          <div className="flex flex-col bg-white w-2/5 rounded p-1" >
            <img
              src={article.urlToImage ? article.urlToImage : news}
              alt={article.author}
              className="w-full p-1 rounded-lg"
            />
            <h1 className="text-lg">{article.title}</h1>
            <div>
              <p>{article.source.name ? article.source.name : <p>Jane Doe</p>}</p>
            <p>{article.publishedAt.toLocaleString()}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
