import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Challenge1 } from './pages/challenge1'
import { Challenge2 } from './pages/challenge2'
import { Challenge3 } from './pages/challenge3'
import { Challenge4 } from './pages/challenge4'
import { Challenge5 } from './pages/challenge5'
import { Challenge6 } from './pages/challenge6'
import { Challenge7 } from './pages/challenge7'
import { Challenge8 } from './pages/challenge8'
import { Home } from './pages/home'


import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/challenge1' element={<Challenge1 />} />
        <Route path='/challenge2' element={<Challenge2 />} />
        <Route path='/challenge3' element={<Challenge3 />} />
        <Route path='/challenge4' element={<Challenge4 />} />
        <Route path='/challenge5' element={<Challenge5 />} />
        <Route path='/challenge6' element={<Challenge6 />} />
        <Route path='/challenge7' element={<Challenge7 />} />
        <Route path='/challenge8' element={<Challenge8 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
