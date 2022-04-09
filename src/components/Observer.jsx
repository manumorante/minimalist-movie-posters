import React, { useEffect } from 'react'

export default function Observer() {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    }

    const ob = new IntersectionObserver((entries) => {
      entries.forEach((el) => {
        if (el.isIntersecting) {
          el.target.classList.add('bg-red-500')
        } else {
          el.target.classList.remove('bg-red-500')
        }
      })
    }, options)

    const elements = document.querySelectorAll('.element')
    elements.forEach((el) => {
      ob.observe(el)
    })
  }, [])

  return (
    <div>
      {[...Array(10).keys()].map((i) => (
        <div key={i} className='element py-60 transition-colors'></div>
      ))}
    </div>
  )
}
