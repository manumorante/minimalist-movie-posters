import React from 'react'
import './styles.css'

export default function Titanic() {
  document.documentElement.style.setProperty('--bg-dark', '#354463aa')
  document.documentElement.style.setProperty('--bg', '#354463')
  document.documentElement.style.setProperty('--text', '#ccc')

  return (
    <>
      <h1>TITANIC</h1>

      <div className='scene'>
        <svg className='iceberg' width='200' height='83'>
          <polygon points='9,82 42,44 54,40 64,20 83,8 144.7,20 163,40 182,45 200,82' />
        </svg>

        <svg className='underwater' width='200' height='194'>
          <polygon points='9,0 210,0 200,04 164,142 150,158 136,158 100,194 83,190 9,50 0,11' />
        </svg>

        <svg className='transatlantic' width='80' height='24'>
          <polygon points='56 16, 60 7, 64 8, 60 18, 76 24, 8 24, 6 21, 0 6, 9 9, 12 2, 16 3, 13 10, 18 12, 20 8, 24 6, 27 2, 39 6, 39 9, 43 12, 48 0, 52 2, 48 14, 56 17' />
        </svg>
      </div>
    </>
  )
}
