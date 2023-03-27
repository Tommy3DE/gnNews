import React from "react";
import news from "../assets/news.jpeg";
import { AiOutlineCloseSquare } from "react-icons/ai";
const NewsCard = ({ handleToggle, article }) => {
  return (
    <div className="absolute animate-fade-in z-10 bg-black bg-opacity-80 w-full top-0 left-0 h-full">
      <div className="m-auto h-full w-4/5 bg-white rounded-md text-lg text-black flex flex-col p-3 place-content-center border-black border-2 overflow-hidden">
        <button className="w-full flex justify-end ">
          <AiOutlineCloseSquare
            className="hover:text-red-500 hover:scale-110 text-5xl"
            onClick={handleToggle}
          />
        </button>
        <img className="px-2 h-1/2 w-4/5" src={article.urlToImage ? article.urlToImage : news} alt="news thumbnail" />
        <h3 className="text-xl ">{article.title}</h3>
        <h1 className="text-md text-gray-500">{article.content}</h1>
        <a href={article.url} className='w-full mx-auto'>
          <button className="text-white bg-red-600  text-2xl rounded hover:scale-110">
            Link
          </button>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
