import { lazy } from 'react'
export const data = [
  {
    id: 'KillBill',
    title: 'Kill Bill',
    subtitle: '2003, Quentin Tarantino',
    colors: {
      wrap: '#987a00',
      bg: '#fac800',
      text: '#000000',
      blood: '#ee0000',
    },
    component: lazy(() => import('./components/posters/KillBill')),
  },
  {
    id: 'StarWars',
    title: 'Star Wars',
    subtitle: '1977, George Lucas',
    colors: { wrap: '#000000', bg: '#222222', text: '#ffffff' },
    component: lazy(() => import('./components/posters/StarWars')),
  },
  {
    id: 'TheMatrix',
    title: 'The Matrix',
    subtitle: '1999, Wachowski Brothers',
    colors: { wrap: '#024412', bg: '#000000', text: '#32b050' },
    component: lazy(() => import('./components/posters/TheMatrix')),
  },
  {
    id: 'ForrestGump',
    title: 'Forrest Gump',
    subtitle: '1994, Robert Zemeckis',
    colors: { wrap: '#407e97', bg: '#77b1c9', text: '#ffffff' },
    component: lazy(() => import('./components/posters/ForrestGump')),
  },
  {
    id: 'HomeAlone',
    title: 'Home Alone',
    subtitle: '1990, Chris Columbus',
    colors: { wrap: '#1E5824', bg: '#8d1200', text: '#ffffff' },
    component: lazy(() => import('./components/posters/HomeAlone')),
  },
  {
    id: 'Titanic',
    title: 'Titanic',
    subtitle: '1997, James Cameron',
    colors: { wrap: '#151c29', bg: '#354463', text: '#ffffff' },
    component: lazy(() => import('./components/posters/Titanic')),
  },
  {
    id: 'Up',
    title: 'Up',
    subtitle: '2009, Pete Docter',
    colors: {
      wrap: '#009fe3aa',
      bg: '#009fe3',
      text: '#ffffff',
      green: '#9c3',
      yellow: '#ff0',
      pink: '#f06',
    },
    component: lazy(() => import('./components/posters/Up')),
  },
  {
    id: 'MonstersInc',
    title: 'Monsters, Inc',
    subtitle: '2002, Pete Docter',
    colors: { wrap: '#451a43', bg: '#70346e', text: '#ffffff' },
    component: lazy(() => import('./components/posters/MonstersInc')),
  },
  {
    id: 'TheTrumanShow',
    title: 'The Truman Show',
    subtitle: '1998, Peter Weir',
    colors: { wrap: '#2e3551', bg: '#53629b', text: '#cdcfd7' },
    component: lazy(() => import('./components/posters/TheTrumanShow')),
  },
  // ASpaceOdyssey2001: {
  //   id: 'ASpaceOdyssey2001',
  //   title: '2001: A Space Odyssey',
  //   subtitle: '1968, Stanley Kubrick',
  //   slogan: '1968, Stanley Kubrick',
  //   colors: { wrap: '#000000', bg: '#555555', text: '#111111' },
  //   component: lazy(() => import('./components/posters/ASpaceOdyssey2001')),
  // },
]
