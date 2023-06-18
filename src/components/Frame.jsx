import React, { useState, useEffect, useRef } from 'react'
import { useRotateToMouse } from '../utils/useCard3d'
import { usePosters } from '../context/AppProvider'
import { locale } from '../utils/ES'

export default function Frame({ children, position, poster }) {
  const posterRef = useRef(null)
  const { activePosition } = usePosters()
  const [isActiveClass, setIsActiveClass] = useState('default')
  const { id } = poster
  const { title, subtitle } = poster[locale]
  useRotateToMouse(posterRef)

  useEffect(() => {
    function setProperties(el, attrs) {
      for (var key in attrs) {
        el.style.setProperty(`--${key}`, attrs[key])
      }
    }

    setProperties(posterRef.current, poster.colors)
  }, [poster])

  useEffect(() => {
    const active = activePosition === position
    setIsActiveClass(active ? 'active' : 'default')
  }, [activePosition])

  return (
    <div
      ref={posterRef}
      className={`Frame GlossyFrame ${id} ${isActiveClass}`}
      data-poster-position={position}>
      <div className='titles'>
        {title && <div className='title'>{title}</div>}
        {subtitle && <div className='subtitle'>{subtitle}</div>}
      </div>

      {children}
    </div>
  )
}
