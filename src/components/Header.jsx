import React from 'react'
import { usePosters } from '../AppProvider'

export default function Header() {
  const { activePosterID } = usePosters()

  return (
    <header className='Header sticky z-50 top-0 w-full p-3 bg-black/50 backdrop-blur-md'>
      <div className='flex gap-2'>
        <div className='title font-bold w-full text-center text-white/80'>
          Minimalist Posters | {activePosterID}
        </div>
      </div>
    </header>
  )
}
