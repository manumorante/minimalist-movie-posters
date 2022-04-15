import React, { useState, useEffect } from 'react'

export default function Frame({ children, poster, activePosterID }) {
  const { id, title, subtitle } = poster
  const [classID, setClassID] = useState(id)
  const classes =
    id === activePosterID
      ? 'active opacity-100 shadow-md scale-[1.15] z-20'
      : 'opacity-50 z-10'

  return (
    <div
      className={`Frame ${classID} ${classes} relative w-full aspect-poster transition-all duration-1000 rounded-md overflow-hidden`}
      data-poster-id={id}>
      <div className='titles'>
        {title && <div className='title'>{title}</div>}
        {subtitle && <div className='subtitle'>{subtitle}</div>}
      </div>

      {children}
    </div>
  )
}
