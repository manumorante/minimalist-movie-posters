import React from 'react'
import './styles.css'

export default function TheMatrix() {
  document.documentElement.style.setProperty('--wrapper-bg-color', '#111')
  document.documentElement.style.setProperty('--wrapper-text-color', '#2b8f42')
  document.documentElement.style.setProperty('--poster-bg-color', '#000')
  document.documentElement.style.setProperty('--poster-text-color', '#32b050')

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
    </>
  )
}
