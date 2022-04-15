import React, { useState, useEffect } from 'react'

export default function Frame({ children, poster, activePosterID }) {
  const { id, title, subtitle } = poster
  const [classID, setClassID] = useState(id)
  const classes = id === activePosterID ? 'active' : 'default'

  return (
    <div className={`Frame ${classID} ${classes}`} data-poster-id={id}>
      <div className='titles'>
        {title && <div className='title'>{title}</div>}
        {subtitle && <div className='subtitle'>{subtitle}</div>}
      </div>

      {children}
    </div>
  )
}
