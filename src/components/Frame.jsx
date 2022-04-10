import React from 'react'

export default function Frame({
  children = null,
  id = null,
  title = false,
  subtitle = false,
}) {
  return (
    <div
      className={`Frame ${id} relative w-full max-w-[500px] aspect-poster transition-colors overflow-hidden bg-white shadow-md`}
      data-poster-id={id}>
      {title && <div className='title'>{title}</div>}
      {subtitle && <div className='subtitle'>{subtitle}</div>}

      {children || null}
    </div>
  )
}
