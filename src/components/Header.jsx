import React from 'react'

export default function Header() {
  function handleMenu() {
    const menu = document.querySelector('.Nav')
    menu.classList.toggle('hidden')
  }

  return (
    <header className='Header sticky z-10 top-0 w-full p-3 bg-black/50 backdrop-blur-md'>
      <div className='flex gap-2'>
        <div className='title font-bold w-full text-center text-white/80'>
          Minimalist Movie Posters
        </div>
      </div>
    </header>
  )
}
