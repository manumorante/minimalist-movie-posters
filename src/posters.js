import { lazy } from 'react'
export const POSTERS = {
  ForrestGump: {
    id: 'ForrestGump',
    title: 'Forrest Gump',
    subtitle: '1994, Robert Zemeckis',
    colors: { wrap: '#407e97', body: '#77b1c9', text: '#ffffff' },
    component: lazy(() => import('./components/posters/ForrestGump')),
  },
  HomeAlone: {
    id: 'HomeAlone',
    title: 'Home Alone',
    subtitle: '1990, Chris Columbus',
    colors: { wrap: '#1E5824', body: '#8d1200', text: '#aaaaaa' },
    component: lazy(() => import('./components/posters/HomeAlone')),
  },
  KillBill: {
    id: 'KillBill',
    title: 'Kill Bill',
    subtitle: '2003, Quentin Tarantino',
    colors: { wrap: '#987a00', body: '#fac800', text: '#000000' },
    component: lazy(() => import('./components/posters/KillBill')),
  },
  StarWars: {
    id: 'StarWars',
    title: 'Star Wars',
    subtitle: '1977, George Lucas',
    colors: { wrap: '#000000', body: '#222222', text: '#ffffff' },
    component: lazy(() => import('./components/posters/StarWars')),
  },
  TheMatrix: {
    id: 'The Matrix',
    title: 'The Matrix',
    subtitle: '1999, Wachowski Brothers',
    colors: { wrap: '#024412', body: '#000000', text: '#ffffff' },
    component: lazy(() => import('./components/posters/TheMatrix')),
  },
  Titanic: {
    id: 'Titanic',
    title: 'Titanic',
    subtitle: '1997, James Cameron',
    colors: { wrap: '#151c29', body: '#354463', text: '#cccccc' },
    component: lazy(() => import('./components/posters/Titanic')),
  },
  Up: {
    id: 'Up',
    title: 'Up',
    subtitle: '2009, Pete Docter',
    colors: { wrap: '#009fe3aa', body: '#009fe3', text: '#ffffff' },
    component: lazy(() => import('./components/posters/Up')),
  },
}
