import React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import ForrestGump from './pages/ForrestGump'
import TheMatrix from './pages/TheMatrix'

function App() {
  return (
    <BrowserRouter>
      <div className='w-screen h-screen flex items-center justify-center p-3'>
        <nav className='fixed top-0 flex gap-3'>
          <Link to='forrest-gump'>Forrest Gump</Link>
          <Link to='/the-matrix'>The Matrix</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Navigate to='/forrest-gump' />} exact />
          <Route path='/forrest-gump' element={<ForrestGump />} />
          <Route path='/the-matrix' element={<TheMatrix />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
