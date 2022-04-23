import React, { useState, useEffect } from 'react'
import './css/index.css'
import { usePosters, usePosterToggle } from './context/AppProvider'
import { myObserver } from './utils/myObserver'
import PostersList from './components/PosterList'
import Hello from './components/Hello'

export default function App() {
  const [envStyles, setEnvStyles] = useState({})
  const { posters, activePosition } = usePosters()
  const togglePoster = usePosterToggle()

  useEffect(() => {
    // When there is no active position, we need to set the initial styles
    const pos = activePosition < 0 ? 0 : activePosition
    setEnvStyles({
      backgroundColor: posters[pos].colors['wrap'],
      color: posters[pos].colors['text'],
    })
  }, [activePosition])

  useEffect(() => {
    const posterDomElements = document.querySelectorAll('.Frame')
    myObserver(posterDomElements, togglePoster)
  }, [])

  return (
    <div
      className='App bg-neutral-200 transition-colors duration-1000 pb-[30vh]'
      style={envStyles}>
      <Hello />
      <div className='max-w-[500px] mx-auto p-10'>
        <PostersList />
      </div>
    </div>
  )
}
