import React, { useState, Suspense, useEffect } from 'react'
import '../css/index.css'
import { POSTERS } from './posters/posters.js'
import Frame from './Frame'

const firstPosterID = Object.keys(POSTERS)[0]
const DISPLAYED = [firstPosterID]

export default function Home() {
  const [activePosterID, setActivePosterID] = useState(firstPosterID)
  const [envStyles, setEnvStyles] = useState({})

  function isMyTurn(posterID, activePosterID) {
    // If the poster is already displayed, show it
    if (DISPLAYED.includes(posterID)) return true

    // If not, check if it's my turn
    if (posterID !== activePosterID) return false

    // If it is, include it in the displayed list and show it
    DISPLAYED.push(posterID)
    return true
  }

  useEffect(() => {
    const colors = POSTERS[activePosterID]?.colors
    if (!colors) return {}

    setEnvStyles({
      backgroundColor: colors['wrap'],
      color: colors['text'],
    })
  }, [activePosterID])

  return (
    <div
      className='Home bg-neutral-200 transition-colors duration-500'
      style={envStyles}>
        


      <div className='p-6 flex flex-col gap-8'>
        {Object.keys(POSTERS).map((posterID) => {
          const poster = POSTERS[posterID]
          const PosterComponent = poster.component
          return (
            <Suspense key={posterID} fallback={null}>
              <button onClick={() => setActivePosterID(posterID)}>
                {isMyTurn(posterID, activePosterID) ? (
                  <Frame
                    id={posterID}
                    title={poster.title}
                    subtitle={poster.subtitle}>
                    <PosterComponent />
                  </Frame>
                ) : (
                  // Print a empty frame as placeholder
                  <Frame id='Frame' />
                )}
              </button>
            </Suspense>
          )
        })}
      </div>
    </div>
  )
}
