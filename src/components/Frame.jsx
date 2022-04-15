import React, { useState, useEffect, useRef } from 'react'

export default function Frame({ children, poster, activePosterID }) {
  const posterRef = useRef(null)
  const { id, title, subtitle } = poster
  const [classID, setClassID] = useState(id)
  const isActive = id === activePosterID

  function setProperties(el, attrs) {
    for (var key in attrs) {
      el.style.setProperty(`--${key}`, attrs[key])
    }
  }

  function resetProperties(el, attrs) {
    for (var key in attrs) {
      el.style.setProperty(`--${key}`, '#444')
    }

    el.style.setProperty('--bg', '#222')
    el.style.setProperty('--text', '#aaa')
  }

  useEffect(() => {
    if (isActive) {
      setProperties(posterRef.current, poster.colors)
    } else {
      resetProperties(posterRef.current, poster.colors)
    }
  }, [poster, isActive])

  return (
    <div
      ref={posterRef}
      className={`Frame ${classID} ${isActive ? 'active' : 'default'}`}
      data-poster-id={id}>
      <div className='titles'>
        {title && <div className='title'>{title}</div>}
        {subtitle && <div className='subtitle'>{subtitle}</div>}
      </div>

      {children}
    </div>
  )
}
