import { useEffect } from 'react'
import { usePosterToggle } from '../context/AppProvider'

/**
 * Recibe un DOMlist que son los posters marcados con la clase '.Frame'
 * los recorre y lo conecta al observer para saber cuando son visible.
 * Al verse se llama handleEntry la cual ejecuta setActivePoster para activar el poster visible.
 */
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1,
}

export function useObserver(DOMlist) {
  const setActivePoster = usePosterToggle()

  const handleEntry = (el) => {
    if (el.isIntersecting) {
      const posterID = el.target.dataset.posterPosition
      if (!posterID) {
        console.log(
          `Element does not have the attribute data-poster-position.`,
          el.target
        )
        return
      }

      setActivePoster(posterID)
    }
  }

  useEffect(() => {
    if (!DOMlist) return

    const observerObj = new IntersectionObserver((entries) => {
      entries.forEach(handleEntry)
    }, options)

    DOMlist.forEach((el) => observerObj.observe(el))
  }, [DOMlist])
}
