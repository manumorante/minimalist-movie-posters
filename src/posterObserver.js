export function posterObserver(elements, callback) {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  }

  const ob = new IntersectionObserver((entries) => {
    entries.forEach((el) => {
      if (el.isIntersecting) {
        callback(el.target.dataset.posterPosition)
      }
    })
  }, options)

  elements.forEach((el) => ob.observe(el))
}
