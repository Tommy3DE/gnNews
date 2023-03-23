import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { useState } from 'react'
function App() {
  const [tiles, setTiles ] = useState(true)
  const handleTiles = () => {
    setTiles(prev => !prev)
  }
  return (
    <div>
      <Navbar handleTiles={handleTiles} tiles={tiles}/>
      <Routes>
        <Route exact path='/' component={<Main/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
