import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  function handleMenu() {
    const menu = document.querySelector('.Nav')
    menu.classList.toggle('hidden')
  }

  return (
    <header className='Header fixed z-10 top-0 w-full p-4 cursor-pointer'>
      <div
        onClick={handleMenu}
        className='flex gap-2 items-center sm:justify-center'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 sm:hidden'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>

        <div className='title font-bold'>Minimalist Movie Posters</div>
      </div>

      <div className='Nav hidden sm:block mt-4'>
        <nav
          onClick={handleMenu}
          className='flex flex-col sm:flex-row justify-center gap-5 transition-colors'>
          <Link to='/forrest-gump'>Forrest Gump</Link>
          <Link to='/the-matrix'>The Matrix</Link>
          <Link to='/kill-bill'>Kill Bill</Link>
          <Link to='/star-wars'>Star Wars</Link>
          <Link to='/up'>Up</Link>
          <Link to='/titanic'>Titanic</Link>
        </nav>
      </div>
    </header>
  )
}
