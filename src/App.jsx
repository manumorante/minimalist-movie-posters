import React, { useState, useEffect } from 'react'
import './css/index.css'
import { usePosters, usePosterToggle } from './AppProvider'
import { posterObserver } from './posterObserver'
import Header from './components/Header'
import PostersList from './components/PosterList'
import Hello from './components/Hello'
import Bye from './components/Bye'

export default function App() {
  const [envStyles, setEnvStyles] = useState({})
  const { activePoster } = usePosters()
  const togglePoster = usePosterToggle()

  useEffect(() => {
    setEnvStyles({
      backgroundColor: activePoster.colors['wrap'],
      color: activePoster.colors['text'],
    })
  }, [activePoster])

  useEffect(() => {
    const posterDomElements = document.querySelectorAll('.Frame')
    posterObserver(posterDomElements, togglePoster)
  }, [])

  return (
    <div
      className='App bg-neutral-200 transition-colors duration-1000'
      style={envStyles}>
      <Header />
        <Hello />
      <div className='max-w-[500px] mx-auto p-10'>
        <PostersList />
        <Bye />
      </div>
    </div>
  )
}
