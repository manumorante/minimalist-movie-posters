import React, { Suspense } from 'react'
import { usePosters } from '../AppProvider'
import Frame from './Frame'

export default function PosterList() {
  const { posters, activePosterID } = usePosters()

  return (
    <div className='PosterList p-10 flex flex-col gap-8 items-center'>
      {Object.keys(posters).map((posterID) => {
        const poster = posters[posterID]
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
  )
}
