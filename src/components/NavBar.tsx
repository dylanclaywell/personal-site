import React, { useEffect, useState } from 'react'

import { NavLink } from './NavLink/NavLink'
import { useMediaQuery } from '../hooks/useMediaQuery'
import classnames from 'classnames'

export function NavBar() {
  const isMediumScreen = useMediaQuery('md')
  const [shouldExit, setShouldExit] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(
    function closeMenuOnMediumScreen() {
      if (isMediumScreen) {
        setIsOpen(false)
      }
    },
    [isMediumScreen]
  )

  return (
    <nav className="fixed top-4 w-fit md:w-full px-4 space-y-4 md:space-y-0 z-50 md:z-0">
      <button
        onClick={() => (isOpen ? setShouldExit(true) : setIsOpen(true))}
        className="md:hidden rounded-full border-2 border-black w-10 h-10 flex justify-center items-center bg-white z-20 relative"
      >
        <i className="fa-solid fa-bars text-2xl"></i>
      </button>
      <div
        aria-hidden={!isMediumScreen && !isOpen}
        className={classnames(
          'flex flex-col md:flex-row justify-between w-full space-y-4 md:space-y-0 z-10 relative'
        )}
      >
        <NavLink
          href="/#about-me"
          color="blue"
          isOpen={isOpen}
          shouldExit={shouldExit}
          transitionDelay={0}
        >
          About Me
        </NavLink>
        <NavLink
          href="/#my-work"
          color="red"
          isOpen={isOpen}
          transitionDelay={100}
          onAnimationEnd={() => {
            if (shouldExit) {
              setShouldExit(false)
              setIsOpen(false)
            }
          }}
          shouldExit={shouldExit}
        >
          My Work
        </NavLink>
      </div>
    </nav>
  )
}
