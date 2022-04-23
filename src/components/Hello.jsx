import React, { useState, useEffect } from 'react'
import { usePosters } from '../AppProvider'

export default function Hello() {
  const { activePosition } = usePosters()
  const [arrowClass, setArrowClass] = useState('')
  const userLang = navigator.language || navigator.userLanguage
  const ES = userLang.includes('es')

  useEffect(() => {
    if (activePosition >= 0) {
      setArrowClass('opacity-0')
    } else {
      setArrowClass('opacity-100')
    }
  }, [activePosition])

  return (
    <div className='Hello md:max-w-[300px] h-[75vh] sm:h-auto flex justify-center items-center md:fixed md:top-10 md:left-0'>
      <div className='flex flex-col justify-between h-full '>
        <div className='h-full p-8 md:p-12 flex items-center'>
          <span className='text-4xl font-light md:text-2xl leading-snug'>
            {ES ? (
              <>
                Carteles de cine <span className='font-bold'>minimalistas</span>{' '}
                creados y animados por código
              </>
            ) : (
              <>
                Minimalistic <span className='font-bold'>movie posters</span>{' '}
                created and animated by code
              </>
            )}
          </span>
        </div>

        <div
          className={`md:hidden flex flex-col items-center transition-opacity duration-1000 ${arrowClass}`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='animate-bounce h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19 13l-7 7-7-7m14-8l-7 7-7-7'
            />
          </svg>
          {ES ? <>Baja para ver</> : <>Scroll down</>}
        </div>
      </div>
    </div>
  )
}
