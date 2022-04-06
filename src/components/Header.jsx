import React from 'react'
import Icon from './Icon'
import Nav from './Nav'

export default function Header() {
  function handleMenu() {
    const menu = document.querySelector('.Nav')
    menu.classList.toggle('hidden')
  }

  return (
    <header className='Header fixed z-10 top-0 w-full p-3'>
      <div className='flex gap-2 items-center sm:justify-center'>
        <div onClick={handleMenu}>
          <Icon icon='burger' />
        </div>

        <div className='title font-bold w-full text-center'>
          Minimalist Movie Posters
        </div>
        <div className='w-6'></div>
      </div>

      <div className='Nav hidden sm:block mt-4' onClick={handleMenu}>
        <Nav />
      </div>
    </header>
  )
}
