import React from 'react'

export default function Frame({
  children = null,
  id = null,
  title = false,
  subtitle = false,
  activePosterID = null,
}) {
  const isMyTurn = id === activePosterID
  const classes = isMyTurn
    ? 'opacity-100 shadow-md scale-110 z-20'
    : 'opacity-50 z-10'

  return (
    <div
      className={`Frame ${id} ${classes} relative w-full max-w-[500px] aspect-poster transition-all duration-1000 overflow-hidden bg-white`}
      data-poster-id={id}>
      <div className='titles'>
        {title && <div className='title'>{title}</div>}
        {subtitle && <div className='subtitle'>{subtitle}</div>}
      </div>

      {children || null}
    </div>
  )
}
