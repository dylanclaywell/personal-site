export function scrollToElement() {
  const hash = window.location.hash

  if (!hash) return

  const element = document.getElementById(hash.replace('#', ''))

  element?.scrollIntoView({ behavior: 'smooth' })
}
