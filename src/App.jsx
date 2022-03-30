import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Poster from './posters/Poster'
import ForrestGump from './posters/ForrestGump'
import TheMatrix from './posters/TheMatrix'
import KillBill from './posters/KillBill'
import StarWars from './posters/StarWars'
import Up from './posters/Up'
import Titanic from './posters/Titanic'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/forrest-gump' />} exact />
        <Route path='/' element={<Poster />}>
          <Route path='forrest-gump' element={<ForrestGump />} />
          <Route path='the-matrix' element={<TheMatrix />} />
          <Route path='kill-bill' element={<KillBill />} />
          <Route path='star-wars' element={<StarWars />} />
          <Route path='titanic' element={<Titanic />} />
          <Route path='up' element={<Up />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
