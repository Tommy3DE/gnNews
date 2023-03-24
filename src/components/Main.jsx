import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'

const Main = () => {
  const [articles, setArticles] = useState([])
  const [country, setCountry] = useState('us')
  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=12113e94f90644979de437693a1c9b48`)
    .then(res => res.json())
    .then(data=> setArticles(data.articles))
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