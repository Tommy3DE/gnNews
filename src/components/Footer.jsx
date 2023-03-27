import React, { useState, useEffect } from "react";

const Footer = ({ articles, engVersion }) => {
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
      {!engVersion ? <div>
        <span className="text-xl text-red-600 font-bold ">
          {articles ? articles.length : 'Brak'}
        </span>{" "}
        artykułów na stronie
      </div> : 
      <div>
      <span className="text-xl text-red-600 font-bold ">
        {articles ? articles.length : 'No'}
      </span>{" "}
      Articles on site
    </div>
      }
    </footer>
  );
};

export default Footer;
