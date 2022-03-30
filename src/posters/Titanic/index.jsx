import React from 'react'
import css from './styles.css'

export default function Titanic() {
  document.documentElement.style.setProperty('--bg-dark', '#354463aa')
  document.documentElement.style.setProperty('--bg', '#354463')
  document.documentElement.style.setProperty('--text', '#ccc')

  return (
    <>
      <h1>TITANIC</h1>

      <svg class='iceberg'>
        <polygon
          class='top'
          points='12,82.3 42,43.7 54.7,41.7 64.3,20.7 83.3,8.3 144.7,22 163,39 182.3,45.3 209.3,82.3'></polygon>
        <polygon
          class='underwater'
          points='9.7,86.3 211.3,86.3 214.7,90 164.7,227.7 149.7,244.7 136.3,244.7 102.3,283.7 83.7,275 9.7,136.3 0,97.7'></polygon>
      </svg>

      <svg class='ship'>
        <polygon
          class='body'
          points='28.7,9.4 30.8,3.2 32.9,3.8 30.9,10.2 35.4,12.1 3.7,12.1 3.6,11.1 0,2.7 5.2,4.2 6.1,1.5 8.1,1.9 7.3,4.8 10,5.7 11.1,3.8 13.1,2.8 14.5,1.5 17.2,3.3 20.3,3.3 20.8,5.9 22.2,7.3 24.2,0 26.1,0.5 24.2,8.1'></polygon>
      </svg>

      <style type='text/css'>{css}</style>
    </>
  )
}
