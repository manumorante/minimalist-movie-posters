import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Poster from './posters/Poster'
import All from './posters/All'
import ForrestGump from './posters/ForrestGump'
import TheMatrix from './posters/TheMatrix'
import KillBill from './posters/KillBill'
import StarWars from './posters/StarWars'
import Up from './posters/Up'
import Titanic from './posters/Titanic'
import HomeAlone from './posters/HomeAlone'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<All />} exact />
        <Route path='/' element={<Poster />}>
          <Route path='forrest-gump' element={<ForrestGump />} />
          <Route path='the-matrix' element={<TheMatrix />} />
          <Route path='kill-bill' element={<KillBill />} />
          <Route path='star-wars' element={<StarWars />} />
          <Route path='titanic' element={<Titanic />} />
          <Route path='up' element={<Up />} />
          <Route path='home-alone' element={<HomeAlone />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
