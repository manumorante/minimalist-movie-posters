import React, { useEffect, useState, Suspense, lazy } from 'react'
import { usePosters } from '../context/AppProvider'
import { useObserver } from '../utils/useObserver'

import Frame from './Frame'

export default function PosterList() {
  const { posters } = usePosters()
  const [components, setComponents] = useState([])

  // TODO: tratar de llevar este state (y su gestion del domlist) a dentro del hook
  const [posterDOMList, setPosterDOMList] = useState(null)
  useObserver(posterDOMList)

  let position = -1

  useEffect(() => {
    let componentsArray = []
    posters.map((poster) => {
      const PosterComponent = lazy(() =>
        import(`./posters/${poster.id}/index.jsx`)
      )
      componentsArray.push(PosterComponent)
    })
    setComponents(componentsArray)
  }, [posters])

  useEffect(() => {
    if (components.length <= 0) return

    const posterDOMList = document.querySelectorAll('.Frame')
    setPosterDOMList(posterDOMList)
  }, [components])

  if (components.length <= 0) return null

  return (
    <div
      id='posters'
      className='PosterList md:max-w-lg xl:max-w-xl mx-auto flex flex-col gap-8 px-4 lg:py-6 xl:py-12 sm:gap-12 items-center'>
      {posters.map((poster) => {
        position++
        const PosterComponent = components[position]

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
