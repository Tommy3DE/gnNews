import React from "react";
import news from "../assets/news.jpeg";
import { AiOutlineCloseSquare } from "react-icons/ai";
const NewsCard = ({ handleToggle, article }) => {
  return (
    <div className=" animate-fade-in z-10 bg-gradient-to-b from-black w-full top-0 left-0 h-screen pt-10 fixed">
      <div className="bg-white md:w-3/5 w-11/12 rounded flex lg:flex-row flex-col border-2 border-gray-300 fixed md:left-[20%] md:top-[15%] left-[4%]">
        <img
          className="px-2 p-10 lg:w-1/2 w-full"
          src={article.urlToImage ? article.urlToImage : news}
          alt="news thumbnail"
        />
        <div className="flex flex-col xl:justify-around md:justify-center mx-3 w-auto">
          <h3 className="2xl:text-3xl lg:text-xl md:text-lg w-full">{article.title}</h3>
          <h2 className="2xl:text-xl lg:text-lg md:text-lg text-gray-700">{article.author}</h2>
          <h1 className="2xl:text-lg lg:text-md md:text-sm text-gray-400">{article.content}</h1>
          <a href={article.url} className="w-full" target="_blank">
            <button className="text-white bg-red-600  md:text-2xl text-3xl md:m-auto mt-5 rounded hover:scale-110 md:w-1/4 w-full">
              Link
            </button>
          </a>
        </div>
        <button className="flex lg:justify-end w-auto justify-center">
            <AiOutlineCloseSquare
              className="hover:text-red-500 hover:scale-110 md:text-5xl text-7xl my-5 md:mt-0"
              onClick={handleToggle}
            />
          </button>
      </div>
    </div>
  );
};

export default NewsCard;
