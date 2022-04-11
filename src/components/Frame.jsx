import React from 'react'

export default function Frame({
  children = null,
  id = null,
  title = false,
  subtitle = false,
  activePosterID = null,
}) {
  const isMyTurn = id === activePosterID
  const opacity = isMyTurn ? 'opacity-100' : 'opacity-50'

  return (
    <div
      className={`Frame ${id} ${opacity} relative w-full max-w-[500px] aspect-poster transition-all duration-1000 overflow-hidden bg-white shadow-md`}
      data-poster-id={id}>
      <div className='titles'>
        {title && <div className='title'>{title}</div>}
        {subtitle && <div className='subtitle'>{subtitle}</div>}
      </div>

      {children || null}
    </div>
  )
}
