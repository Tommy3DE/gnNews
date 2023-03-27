import React, { useState } from "react";
import Sidebar from "./Sidebar";
import News from "./News";
import NewsLines from "./NewsLines";
import NewsCard from "./NewsCard";

const Main = ({ articles, setCountry, tiles, engVersion }) => {
  const [showNewsCard, setShowNewsCard] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleToggle = (article) => {
    setShowNewsCard(prev => !prev);
    setSelectedArticle(article);
  };

  return (
    <>
      <main className="w-full flex md:flex-row flex-col ">
        <Sidebar setCountry={setCountry} engVersion={engVersion} />
        {tiles ? (
          <News
            articles={articles}
            showNewsCard={showNewsCard}
            handleToggle={handleToggle}
            selectedArticle={selectedArticle}
          />
        ) : (
          <NewsLines 
            articles={articles}
            showNewsCard={showNewsCard}
            handleToggle={handleToggle}
            selectedArticle={selectedArticle} 
          />
        )}
      </main>
    </>
  );
};

export default Main;