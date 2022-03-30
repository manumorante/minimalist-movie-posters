import React from 'react'
import './styles.css'

export default function HomeAlone() {
  document.documentElement.style.setProperty('--bg-dark', '#000')
  document.documentElement.style.setProperty('--bg', '#222')
  document.documentElement.style.setProperty('--text', '#aaa')

  return (
    <>
      <div className='title'>Home Alone</div>
      <div className='pack Harry'>
        <div className='rope'></div>
        <div className='paint'>
          <svg width='81' height='51' fill='none'>
            <path d='M0 0C0 0 12.6562 8.63815 39.8672 8.81481C68.3438 8.9997 81 0 81 0V40.2963C69.6094 40.2963 72.1406 18.8889 67.0781 18.8889C62.4813 18.8889 60.75 27.7037 56.9531 27.7037C51.7166 27.7037 52.0647 22.6667 46.8281 22.6667C41.7656 22.6667 43.8204 38.014 36.7031 38.4074C30.073 38.7739 32.5857 28.963 25.9453 28.963C18.3516 28.963 25.3125 51 17.0859 51C7.59375 51 16.9136 15.9532 5.69531 23.9259C1.26562 27.0741 0 17 0 17V0Z' />
          </svg>
        </div>
      </div>

      <div className='pack Marv'>
        <div className='rope'></div>
        <div className='paint'>
          <svg width='81' height='51' fill='none'>
            <path d='M0 0C0 0 12.6562 8.63815 39.8672 8.81481C68.3438 8.9997 81 0 81 0V40.2963C69.6094 40.2963 72.1406 18.8889 67.0781 18.8889C62.4813 18.8889 60.75 27.7037 56.9531 27.7037C51.7166 27.7037 52.0647 22.6667 46.8281 22.6667C41.7656 22.6667 43.8204 38.014 36.7031 38.4074C30.073 38.7739 32.5857 28.963 25.9453 28.963C18.3516 28.963 25.3125 51 17.0859 51C7.59375 51 16.9136 15.9532 5.69531 23.9259C1.26562 27.0741 0 17 0 17V0Z' />
          </svg>
        </div>
      </div>
    </>
  )
}
