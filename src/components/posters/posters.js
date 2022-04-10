import { lazy } from 'react'
export const POSTERS = {
  ForrestGump: {
    id: 'ForrestGump',
    title: 'Forrest Gump',
    subtitle: 'By Robert Zemeckis',
    colors: { wrap: '#77b1c9aa', body: '#77b1c9', text: '#ffffff' },
    component: lazy(() => import('./ForrestGump')),
  },
  HomeAlone: {
    id: 'HomeAlone',
    title: 'Home Alone',
    subtitle: '',
    colors: { wrap: '#000000', body: '#222222', text: '#aaaaaa' },
    component: lazy(() => import('./HomeAlone')),
  },
  KillBill: {
    id: 'KillBill',
    title: 'Kill Bill',
    subtitle: 'By Quentin Tarantino',
    colors: { wrap: '#fac800aa', body: '#fac800', text: '#000000' },
    component: lazy(() => import('./KillBill')),
  },
  StarWars: {
    id: 'StarWars',
    title: 'Star Wars',
    subtitle: 'By George Lucas',
    colors: { wrap: '#111111', body: '#000000', text: '#111111' },
    component: lazy(() => import('./StarWars')),
  },
  TheMatrix: {
    id: 'The Matrix',
    title: 'The Matrix',
    subtitle: 'By Wachowski Brothers',
    colors: { wrap: '#111111', body: '#000000', text: '#32b050' },
    component: lazy(() => import('./TheMatrix')),
  },
  Titanic: {
    id: 'Titanic',
    title: 'Titanic',
    subtitle: '',
    colors: { wrap: '#354463aa', body: '#354463', text: '#cccccc' },
    component: lazy(() => import('./Titanic')),
  },
  Up: {
    id: 'Up',
    title: 'Up',
    subtitle: '',
    colors: { wrap: '#009fe3aa', body: '#009fe3', text: '#ffffff' },
    component: lazy(() => import('./Up')),
  },
}
