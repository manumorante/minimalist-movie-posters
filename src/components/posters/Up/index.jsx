import React from 'react'
import './styles.css'

export default function Up() {
  return (
    <>
      <div className='scene'>
        <div className='globes'>
          <div className='pack green'>
            <div className='rope'></div>
            <div className='globe '></div>
          </div>
          <div className='pack yellow'>
            <div className='rope'></div>
            <div className='globe '></div>
          </div>
          <div className='pack pink'>
            <div className='rope'></div>
            <div className='globe '></div>
          </div>
        </div>
        <div className='UP'>UP</div>
      </div>
    </>
  )
}
