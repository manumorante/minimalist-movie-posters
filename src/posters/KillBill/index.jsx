import React from 'react'
import css from './styles.css'

export default function KillBill() {
  document.documentElement.style.setProperty('--bg-dark', '#bf9903')
  document.documentElement.style.setProperty('--bg', '#fac800')
  document.documentElement.style.setProperty('--text', '#000')

  return (
    <>
      <h1>Kill Bill</h1>
      <h4>By Quentin Tarantino</h4>
      <svg className='sword'>
        <path d='M0,0h423c0,0-32.5,66.5-157,71.5H0V0z'></path>
      </svg>
      <style type='text/css'>{css}</style>
    </>
  )
}
