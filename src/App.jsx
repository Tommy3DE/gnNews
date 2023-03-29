import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import axios from "axios";
import { API_URL } from "./api/api";
import { useDispatch, useSelector } from "react-redux";
import { getDataFailure, getInitialData, getDataSuccess } from "./store/reducer";


function App() {
  const dispatch = useDispatch()
  const {data, isLoading, error, country } = useSelector((state)=>state) 
  
  
  const [tiles, setTiles] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [articles, setArticles] = useState([]);
  // const [country, setCountry] = useState("us");
  const [engVersion, setEngVersion] = useState(false);



  // console.log(isLoading)
  const handleTiles = () => {
    setTiles((prev) => !prev);
  };

  const handleLang = () => {
    setEngVersion((prev) => !prev);
  };

  const fetchArticles = async () => {
    dispatch(getInitialData())
    const cachedData = sessionStorage.getItem(`articles-${country}`);
    console.log('1')
    if (cachedData) {
      const cachedArticleList = JSON.parse(cachedData)
      dispatch(getDataSuccess(cachedArticleList))
      setArticles(cachedArticleList);
      console.log('2')
      return;
    }

    try {
      const response = await axios.get(
        API_URL(country)
      );
      const articleList = response.data.articles
      dispatch(getDataSuccess(articleList))
      console.log('article success')
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
        handleLang={handleLang}
        engVersion={engVersion}
      />
      {showModal && <Modal />}

      <Main  
        tiles={tiles}
        engVersion={engVersion}
      />
      <Footer articles={articles} engVersion={engVersion} />
    </div>
  );
}

export default App;
