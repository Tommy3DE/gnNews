import React from 'react'
import news from "../assets/news.jpeg";
import { AiOutlineCloseSquare } from 'react-icons/ai'
const NewsCard = ({handleToggle}) => {
    return (
        <div className="absolute h-screen animate-fade-in z-10 bg-black bg-opacity-80 w-full" onClick={handleToggle}>
            <div className="m-auto h-auto w-4/5 bg-white rounded-md text-lg text-black flex flex-col p-3 place-content-center border-black border-2 ">
                <button className='text-4xl text-left w-full flex justify-end hover:text-red-500' onClick={handleToggle}>
                    <AiOutlineCloseSquare />
                </button>
                <img className='px-2' src={news} alt='news thumbnail' />
                <h3 className="text-xl ">
                    Title
                </h3>
                <h1 className="text-md text-gray-500">Opis Newsa</h1>
                <button className="text-white bg-red-600 w-1/5 mx-auto text-2xl rounded hover:scale-110">
                    Link
                </button>
            </div>
        </div>
    )
}

export default NewsCard