import React from 'react'
import Sidebar from './Sidebar'

import News from'./News'
const Main = ({articles, setCountry, tiles}) => {
  return (
    <main className='w-full flex flex-row '>
      <Sidebar setCountry={setCountry}/>
      <News articles={articles} tiles={tiles}/>
    </main>
  )
}

export default Main