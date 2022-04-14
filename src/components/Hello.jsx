import React from 'react'

export default function Hello() {
  return (
    <div className='Hello md:max-w-[320px] h-screen sm:h-auto flex justify-center items-center p-8 sm:p-12 md:fixed md:top-10 md:left-0'>
      <span className='text-4xl md:text-2xl text-center md:text-left leading-snug'>
        <span className='font-thin'>Minimalistic</span>{' '}
        <span className='font-bold'>movie posters</span>{' '}
        <span className='font-light'>created and animated by code</span>
      </span>
    </div>
  )
}
