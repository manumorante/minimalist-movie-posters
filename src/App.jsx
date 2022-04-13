import React, { useState, useEffect } from 'react'
import './css/index.css'
import { usePosters, usePosterToggle } from './AppProvider'
import { posterObserver } from './posterObserver'
import Header from './components/Header'
import PostersList from './components/PosterList'

export default function App() {
  const [envStyles, setEnvStyles] = useState({})
  const { posters, activePosterID } = usePosters()
  const togglePoster = usePosterToggle()

  useEffect(() => {
    const colors = posters[activePosterID]?.colors

    setEnvStyles({
      backgroundColor: colors['wrap'],
      color: colors['text'],
    })
  }, [activePosterID])

  useEffect(() => {
    const posterDomElements = document.querySelectorAll('.Frame')
    posterObserver(posterDomElements, togglePoster)
  }, [])

  return (
    <div
      className='Home bg-neutral-200 transition-colors duration-1000'
      style={envStyles}>
      <Header />
      <PostersList />
    </div>
  )
}
