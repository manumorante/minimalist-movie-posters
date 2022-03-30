import React from 'react'
import './styles.css'

export default function ForrestGump() {
  document.documentElement.style.setProperty('--bg-dark', '#77b1c9aa')
  document.documentElement.style.setProperty('--bg', '#77b1c9')
  document.documentElement.style.setProperty('--text', '#fff')

  return (
    <>
      <h1>Forrest Gump</h1>
      <h4>By Robert Zemeckis</h4>
      <div className='park-bench'>
        <div className='plank plank-1'></div>
        <div className='plank plank-2'></div>
        <div className='plank plank-3'></div>
        <div className='plank plank-4'></div>
        <div className='leg leg-1'></div>
        <div className='leg leg-2'></div>
        <div className='leg leg-3'></div>
        <div className='leg leg-4'></div>
        <div className='side front'></div>
        <div className='side back'></div>
        <div className='side right'></div>
        <div className='side left'></div>
        <div className='side top'></div>
        <div className='side bottom'></div>
      </div>
    </>
  )
}
