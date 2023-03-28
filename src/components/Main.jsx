import React, { useState } from "react";
import Sidebar from "./Sidebar";
import News from "./News";
import NewsLines from "./NewsLines";
import { useSelector } from "react-redux";

const Main = ({ tiles, engVersion }) => {
  const { data, isLoading } = useSelector((state) => state);
  const [showNewsCard, setShowNewsCard] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  if (!data?.length) return null;

  const handleToggle = (article) => {
    setShowNewsCard((prev) => !prev);
    setSelectedArticle(article);
  };

  return (
    <>
      <main className="w-full flex md:flex-row flex-col ">
        <Sidebar engVersion={engVersion} />
        {isLoading ? (
          <div className="h-full w-screen">loading</div>
        ) : (
          <>
            {tiles ? (
              <News
                engVersion={engVersion}
                articles={data}
                showNewsCard={showNewsCard}
                handleToggle={handleToggle}
                selectedArticle={selectedArticle}
              />
            ) : (
              <NewsLines
                engVersion={engVersion}
                articles={data}
                showNewsCard={showNewsCard}
                handleToggle={handleToggle}
                selectedArticle={selectedArticle}
              />
            )}
          </>
        )}
      </main>
    </>
  );
};

export default Main;
