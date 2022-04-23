import React, { Suspense } from 'react'
import { usePosters } from '../context/AppProvider'
import Frame from './Frame'

export default function PosterList() {
  const { posters } = usePosters()
  let position = -1

  return (
    <div className='PosterList flex flex-col gap-12 sm:gap-24 items-center md:mt-12'>
      {posters.map((poster) => {
        position++
        const PosterComponent = poster.component

        return (
          <Suspense key={poster.id} fallback={null}>
            <Frame position={position} poster={poster}>
              <PosterComponent />
            </Frame>
          </Suspense>
        )
      })}
    </div>
  )
}
