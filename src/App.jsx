import React, { useState, useEffect } from 'react'
import './css/index.css'
import { usePosters } from './context/AppProvider'
import PostersList from './components/PosterList'
import Hello from './components/Hello'

export default function App() {
  const [envStyles, setEnvStyles] = useState({})
  const { posters, activePosition } = usePosters()

  useEffect(() => {
    // When there is no active poster we use the first one
    const pos = activePosition < 0 ? 0 : activePosition
    setEnvStyles({
      backgroundColor: posters[pos].colors['wrap'],
      color: posters[pos].colors['text'],
    })
  }, [activePosition])

  return (
    <div
      className='App h-full bg-neutral-200 transition-colors duration-1000 pb-6'
      style={envStyles}>
      <Hello />
      <PostersList />
    </div>
  )
}
