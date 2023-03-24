import React from 'react'
import Sidebar from './Sidebar'

import News from'./News'
import NewsLines from './NewsLines'
const Main = ({articles, setCountry, tiles}) => {
  return (
    <main className='w-full flex flex-row '>
      <Sidebar setCountry={setCountry}/>
      {tiles?<News articles={articles}/>:
      <NewsLines articles={articles}/>}
    </main>
  )
}

export default Main