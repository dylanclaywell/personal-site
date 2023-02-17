import { useState, useEffect } from 'react'

export function useScrollbarWidth() {
  const [scrollbarWidth, setScrollbarWidth] = useState(0)

  useEffect(() => {
    const scrollDiv = document.createElement('div')
    scrollDiv.style.width = '100px'
    scrollDiv.style.height = '100px'
    scrollDiv.style.position = 'absolute'
    scrollDiv.style.top = '-9999px'
    scrollDiv.style.overflow = 'scroll'
    document.body.appendChild(scrollDiv)
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    document.body.removeChild(scrollDiv)
    setScrollbarWidth(scrollbarWidth)
  }, [])

  return scrollbarWidth
}
