import React from "react";
import Sidebar from "./Sidebar";

import News from "./News";
import NewsLines from "./NewsLines";
const Main = ({ articles, setCountry, tiles, engVersion }) => {
  return (
    <main className="w-full flex md:flex-row flex-col ">
      <Sidebar setCountry={setCountry} engVersion={engVersion}/>
      {tiles ? <News articles={articles} /> : <NewsLines articles={articles} />}
    </main>
  );
};

export default Main;
