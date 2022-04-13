import React, { useState, useEffect } from 'react'
import './css/index.css'
import { usePosters, usePosterToggle } from './AppProvider'
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
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    }

    const ob = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          togglePoster(el.target.dataset.posterId)
        }
      })
    }, options)

    document.querySelectorAll('.Frame').forEach((el) => ob.observe(el))
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
