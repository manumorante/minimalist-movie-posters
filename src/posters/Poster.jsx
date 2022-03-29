import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from '../components/Nav'

export default function Poster() {
  const location = useLocation()
  const cssName = location.pathname.replace('/', '')

  /*
  .poster {
  width: 500px;
  height: 760px;
}

  */

  return (
    <div className='PosterLayout w-screen h-screen flex items-center justify-center p-3 sm:p-0'>
      <Nav />
      <div
        className={`${cssName} poster w-full h-full sm:w-[500px] sm:h-[760px] transition-colors`}>
        <Outlet />
      </div>
    </div>
  )
}
