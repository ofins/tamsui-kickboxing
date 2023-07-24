import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from './components/HomeLayout'
import Home from './pages/Home'
import About from './pages/About'
import Album from './pages/Album'
import Coaches from './pages/Coaches'
import GymAlbum from './pages/GymAlbum'
import Price from './pages/Price'
import ClassDetails from './pages/ClassDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/album" element={<Album />} />
          <Route path="/gym-album" element={<GymAlbum />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/price" element={<Price />} />
          <Route path="/:id" element={<ClassDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
