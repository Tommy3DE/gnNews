import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import News from'./News'
const Main = () => {
  const [articles, setArticles] = useState([])
  const [country, setCountry] = useState('us')
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=12113e94f90644979de437693a1c9b48`)
      setArticles(response.data.articles)
      console.log(response)
    }
    fetchArticles()
    //korzystam z axios poniewaz jest szybszy i duzo lepszy od klasycznego fetcha
  }, [country])
  

  return (
    <main className='w-full h-4/5 flex flex-row '>
      <Sidebar setCountry={setCountry}/>
      <div className='w-full bg-pink-100'>

      </div>
    </main>
  )
}

export default Main