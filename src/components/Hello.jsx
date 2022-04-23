import React, { useState, useEffect } from 'react'
import { usePosters } from '../context/AppProvider'
import { ES } from '../utils/ES'

export default function Hello() {
  const { activePosition } = usePosters()
  const [arrowClass, setArrowClass] = useState('')

  useEffect(() => {
    if (activePosition >= 0) {
      setArrowClass('opacity-0')
    } else {
      setArrowClass('opacity-100')
    }
  }, [activePosition])

  return (
    <div className='Hello flex justify-center items-center h-[75vh] lg:max-w-[300px] lg:h-auto lg:fixed lg:top-10 lg:left-0'>
      <div className='flex flex-col items-center justify-between h-full '>
        <div className='h-full p-8 md:p-24 lg:p-12 flex items-center'>
          <span className='text-4xl font-light lg:text-2xl leading-snug'>
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

        <a
          href='#posters'
          className={`lg:hidden flex flex-col rounded-full p-6 items-center transition-opacity duration-1000 ${arrowClass}`}>
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
          {/* {ES ? <>Baja para ver</> : <>Scroll down</>} */}
        </a>
      </div>
    </div>
  )
}
