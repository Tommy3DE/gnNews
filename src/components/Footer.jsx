import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import translations from "../locale/translations";

const Footer = ({ articles }) => {

  const {language} = useSelector((state)=>state) 
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanUp() {
      clearInterval(timer);
    };
  });

  return (
    <footer className="flex flex-row justify-between items-center bg-blue-500 text-white w-full h-20 px-10">
      <div>{time.toLocaleTimeString()}</div>
      <div className="md:block hidden">Copyright {time.getFullYear()}</div>
      <div>
        <span className="text-xl text-red-600 font-bold ">
          {articles ? articles.length : 'Brak'}
        </span>{" "}
        {translations[language].footer}
      </div>
    </footer>
  );
};

export default Footer;
