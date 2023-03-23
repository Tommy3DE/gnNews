import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { useState } from 'react'
import Modal from './components/Modal'
function App() {
  const [tiles, setTiles ] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const handleTiles = () => {
    setTiles(prev => !prev)
  }
  return (
    <div>
      <Navbar handleTiles={handleTiles} tiles={tiles} setShowModal={setShowModal} showModal={showModal}/>
      {showModal && <Modal/>}
      <Routes>
        <Route exact path='/' component={<Main/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
