import React, { useEffect, useRef } from 'react'
import { useLocation, useOutlet, Location } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import colors from './colors'

const animationMapping = {
  '/about-me': 'top-page',
  '/': 'center-page',
  '/my-work': 'bottom-page',
}

function getAnimationClass(location: Location) {
  return Object.keys(animationMapping).includes(location.pathname)
    ? animationMapping[location.pathname as keyof typeof animationMapping]
    : 'center-page'
}

export default function App() {
  const ref = useRef(null)
  const outlet = useOutlet()
  const location = useLocation()

  useEffect(function initializeColorVariables() {
    for (const colorName of Object.keys(colors)) {
      const colorKey = colorName as keyof typeof colors
      document.documentElement.style.setProperty(
        `--${colorKey}`,
        colors[colorKey]
      )
    }
  }, [])

  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        nodeRef={ref}
        timeout={300}
        classNames={getAnimationClass(location)}
        unmountOnExit
      >
        <div ref={ref}>{outlet}</div>
      </CSSTransition>
    </SwitchTransition>
  )
}
