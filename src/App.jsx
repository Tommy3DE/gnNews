import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import axios from "axios";
import { API_URL } from "./api/api";
import { useDispatch, useSelector } from "react-redux";
import { getDataFailure, getInitialData, getDataSuccess, getCurrLanguage } from "./store/reducer";

function App() {
  const dispatch = useDispatch()
  const {country } = useSelector((state)=>state)   
  const [tiles, setTiles] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [articles, setArticles] = useState([]);

  const handleTiles = () => {
    setTiles((prev) => !prev);
  };

  const fetchArticles = async () => {
    dispatch(getInitialData())
    const cachedData = sessionStorage.getItem(`articles-${country}`);
    
    if (cachedData) {
      const cachedArticleList = JSON.parse(cachedData)
      dispatch(getDataSuccess(cachedArticleList))
      setArticles(cachedArticleList);
      return;
    }

    try {
      const response = await axios.get(
        API_URL(country)
      );
      const articleList = response.data.articles

      dispatch(getDataSuccess(articleList))
      setArticles(articleList);
      sessionStorage.setItem(`articles-${country}`, JSON.stringify(articleList));
    } catch (error) {
      console.error(error);
      dispatch(getDataFailure(error))
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [country]);
  console.log(articles)


  return (
    <div>
      <Navbar
        handleTiles={handleTiles}
        tiles={tiles}
        setShowModal={setShowModal}
        showModal={showModal}
      />
      {showModal && <Modal />}   
      <Main  
        tiles={tiles}
      />
      <Footer articles={articles} />
    </div>
  );
}

export default App;
