import React, { useState } from "react";
import Sidebar from "./Sidebar";

import News from "./News";
import NewsLines from "./NewsLines";
import NewsCard from "./NewsCard";
const Main = ({ articles, setCountry, tiles, engVersion }) => {
  const [showNewsCard, setShowNewsCard] = useState(false)

  const handleToggle = () => {
    setShowNewsCard(prev => !prev)
  }
  return (
    <>
      <main className="w-full flex md:flex-row flex-col ">
        <Sidebar setCountry={setCountry} engVersion={engVersion} />
        {tiles ? (
          <News 
            articles={articles} 
            showNewsCard={showNewsCard} 
            handleToggle={handleToggle} 
          />
          ) : (
          <NewsLines articles={articles} />
          )}
      </main>
    </>
  );
};

export default Main;
