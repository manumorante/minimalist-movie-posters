import { useEffect } from 'react'

export function useRotateToMouse(cardRef) {
  function rotateToMouse(e) {
    const mouseX = e.clientX
    const mouseY = e.clientY
    const bounds = cardRef.current.getBoundingClientRect()
    const leftX = mouseX - bounds.x
    const topY = mouseY - bounds.y
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    }
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2)

    cardRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `

    cardRef.current.querySelector('.glow').style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x * 2 + bounds.width / 2}px
        ${center.y * 2 + bounds.height / 2}px,
        #ffffff30,
        #0000000f
      )
    `
  }

  useEffect(() => {
    // Create a div called .glow and insert into cardRef
    const glow = document.createElement('div')
    glow.classList.add('glow')
    cardRef.current.appendChild(glow)

    function handleMouseEnter() {
      document.addEventListener('mousemove', rotateToMouse)
    }

    function handleMouseLeave() {
      document.removeEventListener('mousemove', rotateToMouse)
      cardRef.current.style.transform = ''
      cardRef.current.style.background = ''
    }

    cardRef.current.addEventListener('mouseenter', handleMouseEnter)
    cardRef.current.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cardRef.current.removeEventListener('mouseenter', handleMouseEnter)
      cardRef.current.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousemove', rotateToMouse)
    }
  }, [cardRef])
}
