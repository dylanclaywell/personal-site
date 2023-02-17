import { useEffect, useRef } from 'react'

export function useScroll(callback: (position: number) => void) {
  const scrollPosition = useRef<number>(-1)
  const stop = useRef<boolean>(false)

  useEffect(function handleScroll() {
    console.log(scrollPosition)
    scrollPosition.current = -1
    stop.current = false
    const animate = () => {
      requestAnimationFrame(onScroll)
    }

    function onScroll() {
      if (stop.current) return

      if (scrollPosition.current !== window.pageYOffset) {
        window.removeEventListener('scroll', animate)
        scrollPosition.current = window.pageYOffset
        callback(scrollPosition.current)
        animate()
      } else {
        window.addEventListener('scroll', animate)
      }
    }

    animate()

    return function cleanup() {
      stop.current = true
      window.removeEventListener('scroll', animate)
    }
  }, [])
}
