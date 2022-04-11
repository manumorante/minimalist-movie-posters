import React, { useState, Suspense, useEffect } from 'react'
import './css/index.css'
import { POSTERS } from './posters.js'
import Header from './components/Header'
import Frame from './components/Frame'

const firstPosterID = Object.keys(POSTERS)[0]

export default function Home() {
  const [activePosterID, setActivePosterID] = useState(firstPosterID)
  const [envStyles, setEnvStyles] = useState({})

  useEffect(() => {
    const colors = POSTERS[activePosterID]?.colors

    setEnvStyles({
      backgroundColor: colors['wrap'],
      color: colors['text'],
    })
  }, [activePosterID])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '30% 0px',
      threshold: 1,
    }

    const ob = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          setActivePosterID(el.target.dataset.posterId)
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
      <div className='PosterList p-6 flex flex-col gap-8 items-center'>
        {Object.keys(POSTERS).map((posterID) => {
          const poster = POSTERS[posterID]
          const PosterComponent = poster.component
          return (
            <Suspense key={posterID} fallback={null}>
              <Frame
                id={posterID}
                title={poster.title}
                subtitle={poster.subtitle}
                activePosterID={activePosterID}>
                <PosterComponent />
              </Frame>
            </Suspense>
          )
        })}
      </div>
    </div>
  )
}
