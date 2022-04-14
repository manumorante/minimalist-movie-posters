import React, { Suspense } from 'react'
import { usePosters } from '../AppProvider'
import Frame from './Frame'

export default function PosterList() {
  const { posters, activePoster } = usePosters()

  return (
    <div className='PosterList flex flex-col gap-8 items-center'>
      {Object.keys(posters).map((posterID) => {
        const poster = posters[posterID]
        const PosterComponent = poster.component
        return (
          <Suspense key={posterID} fallback={null}>
            <Frame poster={poster} activePosterID={activePoster.id}>
              <PosterComponent />
            </Frame>
          </Suspense>
        )
      })}
    </div>
  )
}
