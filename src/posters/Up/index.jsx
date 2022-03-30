import React from 'react'
import './styles.css'

export default function Up() {
  document.documentElement.style.setProperty('--bg-dark', '#009fe3aa')
  document.documentElement.style.setProperty('--bg', '#009fe3')
  document.documentElement.style.setProperty('--text', '#fff')

  return (
    <>
      <div className='home'>
        <div className='title'>UP</div>
        <div className='globes'>
          <div className='globe green'></div>
          <div className='globe yellow'></div>
          <div className='globe pink'></div>
        </div>
      </div>
    </>
  )
}
