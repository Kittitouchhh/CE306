import {Routes, Route } from 'react-router-dom'
import Minigame from './pages/minigame'
import Home from './pages/home'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path ="/" element={< Minigame />} />
        <Route path ="/Home" element={< Home />} />
      </Routes>
    </>
  )
}

export default App
