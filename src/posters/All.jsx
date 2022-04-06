import React, { useEffect } from 'react'
import { POSTERS } from '../posters'

function Poster({ poster }) {
  // Poster wrapper classes
  const classes = `${poster.slug} relative w-full max-w-[500px] aspect-poster transition-colors overflow-hidden`
  const title = `<div class="title">${poster.title}</div>`
  const subtitle = `<div class="subtitle">${poster.subtitle}</div>`
  const html = title + subtitle + poster.html

  return (
    <div
      className={classes}
      dangerouslySetInnerHTML={{
        __html: html,
      }}></div>
  )
}

export default function All() {
  return (
    <div className='All mt-11 p-6 flex items-center justify-center flex-col gap-6 snap-y'>
      {POSTERS.map((poster) => {
        return <Poster key={poster.slug} poster={poster} />
      })}
    </div>
  )
}
