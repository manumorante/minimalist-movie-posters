import React from 'react'
import css from './styles.css'

export default function TheMatrix() {
  document.documentElement.style.setProperty('--bg-dark', '#111')
  document.documentElement.style.setProperty('--bg', '#000')
  document.documentElement.style.setProperty('--text', '#32b050')

  return (
    <>
      <p className='title'>The Matrix</p>
      <p className='subtitle'>By Wachowski Brothers</p>
      <div className='canvas'>
        <div className='col'></div>
        <div className='col'></div>
        <div className='col'></div>
        <div className='col'></div>
        <div className='col'></div>
        <div className='col'></div>
        <div className='col'></div>
        <div className='col'></div>
      </div>
      <style type='text/css'>{css}</style>
    </>
  )
}
