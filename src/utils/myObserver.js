// Esto es un observer "medio" global... pero en realidad está pensado para los Posters
// ya que lee una propiedad concreta 'posterPosition'...
export function myObserver(
  elements,
  callback,
  options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  }
) {
  const ob = new IntersectionObserver((entries) => {
    entries.forEach((el) => {
      if (el.isIntersecting) {
        callback(el.target.dataset.posterPosition)
      }
    })
  }, options)

  elements.forEach((el) => ob.observe(el))
}
