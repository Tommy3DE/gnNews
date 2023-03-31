import React, { useState } from "react";
import Sidebar from "./Sidebar";
import News from "./News";
import NewsLines from "./NewsLines";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const Main = ({ tiles }) => {
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
        <Sidebar />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {tiles ? (
              <News
                articles={data}
                showNewsCard={showNewsCard}
                handleToggle={handleToggle}
                selectedArticle={selectedArticle}
              />
            ) : (
              <NewsLines
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
