import { useState, useEffect } from 'react'

import screens from '../screens'

type Breakpoint = keyof typeof screens

export function useMediaQuery(breakpoint: Breakpoint) {
  const mediaQuery = `(min-width: ${screens[breakpoint]})`
  const [matchesBreakpoint, setMatchesBreakpoint] = useState(
    () => window.matchMedia(mediaQuery).matches
  )

  useEffect(
    function registerEventListener() {
      function onResize() {
        setMatchesBreakpoint(window.matchMedia(mediaQuery).matches)
      }

      window.addEventListener('resize', onResize)

      return function cleanup() {
        window.removeEventListener('resize', onResize)
      }
    },
    [mediaQuery]
  )

  return matchesBreakpoint
}
