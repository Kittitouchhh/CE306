import {Routes, Route } from 'react-router-dom'
import Minigame from './pages/Minigame'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path ="/" element={< Minigame />} />
        <Route path ="/Home" element={< Home />} />
        <Route path ="/Profile" element={<Profile/>} />
        <Route path ="/Contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
