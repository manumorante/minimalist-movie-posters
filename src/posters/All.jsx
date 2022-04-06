import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ForrestGump from './ForrestGump'
import HomeAlone from './HomeAlone'
import KillBill from './KillBill'
import StarWars from './StarWars'
import TheMatrix from './TheMatrix'
import Titanic from './Titanic'
import Up from './Up'

export default function All() {
  const POSTERS = [
    {
      title: 'Forrest Gump',
      slug: 'forrest-gump',
      poster: <ForrestGump />,
    },
    {
      title: 'Home Alone',
      slug: 'home-alone',
      poster: <HomeAlone />,
    },
    {
      title: 'Kill Bill',
      slug: 'kill-bill',
      poster: <KillBill />,
    },
    {
      title: 'Star Wars',
      slug: 'star-wars',
      poster: <StarWars />,
    },
    {
      title: 'The Matrix',
      slug: 'the-matrix',
      poster: <TheMatrix />,
    },
    {
      title: 'Titanic',
      slug: 'titanic',
      poster: <Titanic />,
    },
    {
      title: 'Up',
      slug: 'up',
      poster: <Up />,
    },
  ]
  useEffect(() => {
    document.documentElement.style.setProperty('--bg-dark', '')
    document.documentElement.style.setProperty('--bg', '')
    document.documentElement.style.setProperty('--text', '')
  }, [])

  return (
    <>
      <div className='All mt-11 p-6 flex items-center justify-center flex-col gap-6 snap-y'>
        {POSTERS.map(({ title, slug, poster }) => (
          <Link
            key={slug}
            to={`/${slug}`}
            title={title}
            className={`${slug} snap-start relative w-full max-w-[500px] aspect-poster transition-colors overflow-hidden`}>
            {poster}
          </Link>
        ))}
      </div>
    </>
  )
}
