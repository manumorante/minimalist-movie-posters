import React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Poster from './posters/Poster'
import ForrestGump from './posters/ForrestGump'
import TheMatrix from './posters/TheMatrix'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Poster />}>
          <Route path='forrest-gump' element={<ForrestGump />} />
          <Route path='the-matrix' element={<TheMatrix />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
