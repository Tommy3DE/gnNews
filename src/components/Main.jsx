import React from 'react'
import Sidebar from './Sidebar'

import News from'./News'
const Main = ({articles, setCountry}) => {

  

  return (
    <main className='w-full h-4/5 flex flex-row '>
      <Sidebar setCountry={setCountry}/>
      <div className=' bg-pink-100'>
          <News articles={articles}/>
      </div>
    </main>
  )
}

export default Main