import React from 'react'
import css from './styles.css'

export default function StarWars() {
  document.documentElement.style.setProperty('--bg-dark', '#111')
  document.documentElement.style.setProperty('--bg', '#000')
  document.documentElement.style.setProperty('--text', '#aaa')

  return (
    <>
      <h1>Star Wars</h1>
      <h4>By George Lucas</h4>
      <div className='space-ship'></div>
      <div className='cube'>
        <div className='death-ray'></div>
        <div className='side front'></div>
        <div className='side back'></div>
        <div className='side right'></div>
        <div className='side left'></div>
        <div className='side top'></div>
        <div className='side bottom'></div>
      </div>
      <style type='text/css'>{css}</style>
    </>
  )
}
