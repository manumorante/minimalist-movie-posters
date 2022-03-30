import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Poster from './posters/Poster'
import ForrestGump from './posters/ForrestGump'
import TheMatrix from './posters/TheMatrix'
import KillBill from './posters/KillBill'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/forrest-gump' />} exact />
        <Route path='/' element={<Poster />}>
          <Route path='forrest-gump' element={<ForrestGump />} />
          <Route path='the-matrix' element={<TheMatrix />} />
          <Route path='kill-bill' element={<KillBill />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
