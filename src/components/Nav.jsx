import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='Nav hidden sm:flex fixed z-10 top-0 w-full p-2 justify-center gap-3 transition-colors'>
      <Link to='/forrest-gump'>Forrest Gump</Link>
      <Link to='/the-matrix'>The Matrix</Link>
    </nav>
  )
}
