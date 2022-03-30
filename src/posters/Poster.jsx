import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

export default function Poster() {
  const location = useLocation()
  const cssName = location.pathname.replace('/', '')

  return (
    <div className='PosterLayout w-screen h-screen flex items-center justify-center p-5 sm:p-0'>
      <div
        className={`${cssName} poster w-full h-full sm:w-[500px] sm:h-[760px] transition-colors`}>
        <Outlet />
      </div>
    </div>
  )
}
