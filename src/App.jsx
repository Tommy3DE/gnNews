import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import axios from "axios";

function App() {
  const [tiles, setTiles] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [articles, setArticles] = useState([]);
  const [country, setCountry] = useState("us");
  const [engVersion, setEngVersion] = useState(false);

  const handleTiles = () => {
    setTiles((prev) => !prev);
  };

  const handleLang = () => {
    setEngVersion((prev) => !prev);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=12113e94f90644979de437693a1c9b48`
      );
      setArticles(response.data.articles);
      console.log(response);
    };
    fetchArticles();
    //korzystam z axios poniewaz jest  duzo lepszy od klasycznego fetcha
  }, [country]);

  return (
    <div>
      <Navbar
        handleTiles={handleTiles}
        tiles={tiles}
        setShowModal={setShowModal}
        showModal={showModal}
        handleLang={handleLang}
        engVersion={engVersion}
      />
      {showModal && <Modal />}
      <Main articles={articles} setCountry={setCountry} tiles={tiles} engVersion={engVersion} />
      <Footer articles={articles} engVersion={engVersion} />
    </div>
  );
}

export default App;
