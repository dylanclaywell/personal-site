import { scrollToElement } from '../../utils/scrollToElement'

export function onClick(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
  if (!(event.target instanceof HTMLAnchorElement)) return

  window.history.pushState({}, document.title, event.target.href)

  scrollToElement()
}
