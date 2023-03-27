import React from "react";
import news from "../assets/news.jpeg";
import { AiOutlineCloseSquare } from "react-icons/ai";
const NewsCard = ({ handleToggle, article }) => {
  return (
    <div className="absolute animate-fade-in z-10 bg-gradient-to-b from-black to-transparent bg-opacity-80 w-full top-0 left-0 h-screen pt-10">
      <div className="bg-white w-3/5 rounded m-auto mt-15 flex md:flex-row flex-col ">
        <img
          className="px-2 p-10 w-1/2"
          src={article.urlToImage ? article.urlToImage : news}
          alt="news thumbnail"
        />
        <div className="flex flex-col justify-around mx-3">
          <h3 className="xl:text-3xl text-xl w-full">{article.title}</h3>
          <h1 className="text-lg text-gray-500">{article.content}</h1>
          <a href={article.url} className="w-full mx-auto" target="_blank">
            <button className="text-white bg-red-600  text-2xl rounded hover:scale-110 w-24 m-auto">
              Link
            </button>
          </a>
        </div>
        <button className="flex justify-end w-auto">
            <AiOutlineCloseSquare
              className="hover:text-red-500 hover:scale-110 text-5xl"
              onClick={handleToggle}
            />
          </button>
      </div>
    </div>
  );
};

export default NewsCard;
