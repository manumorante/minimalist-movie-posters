import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

export default function Header() {
  function handleMenu() {
    const menu = document.querySelector('.Nav')
    menu.classList.toggle('hidden')
  }

  return (
    <header className='Header fixed z-10 top-0 w-full p-3'>
      <div className='flex gap-2 items-center sm:justify-center'>
        <div onClick={handleMenu}>
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
        </div>

        <div className='title font-bold w-full text-center'>
          Minimalist Movie Posters
        </div>
        <div className='w-6'></div>
      </div>

      <div className='Nav hidden sm:block mt-4'>
        <nav
          onClick={handleMenu}
          className='flex flex-col sm:flex-row justify-center gap-5 transition-colors'>
          <Link to='/' className='flex gap-3'>
            <Icon icon='back' />
            <div>Inicio</div>
          </Link>
          <Link to='/forrest-gump' className='flex gap-3'>
            <Icon icon='cake' />
            <div>Forrest Gump</div>
          </Link>
          <Link to='/the-matrix' className='flex gap-3'>
            <Icon icon='adjust' />
            <div>The Matrix</div>
          </Link>
          <Link to='/kill-bill' className='flex gap-3'>
            <Icon icon='userMinus' />
            <div>Kill Bill</div>
          </Link>
          <Link to='/star-wars' className='flex gap-3'>
            <Icon icon='circleMinus' />
            <div>Star Wars</div>
          </Link>
          <Link to='/up' className='flex gap-3'>
            <Icon icon='home' />
            <div>Up</div>
          </Link>
          <Link to='/titanic' className='flex gap-3'>
            <Icon icon='support' />
            <div>Titanic</div>
          </Link>
          <Link to='/home-alone' className='flex gap-3'>
            <Icon icon='group' />
            <div>Home Alone</div>
          </Link>
        </nav>
      </div>
    </header>
  )
}
