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
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={classnames(
          'fixed transition-opacity top-0 bottom-0 right-0 left-0 z-[45] w-screen h-screen bg-gray-400',
          {
            'opacity-20': isOpen && !isMediumScreen,
            'opacity-0 pointer-events-none': !isOpen || isMediumScreen,
          }
        )}
      ></div>
      <nav className="fixed top-4 w-fit md:w-full px-4 space-y-4 md:space-y-0 z-50 md:z-0">
        <button
          onClick={() => (isOpen ? setShouldExit(true) : setIsOpen(true))}
          className="md:hidden rounded-full w-10 h-10 flex justify-center items-center z-20 relative"
        >
          <img width={20} height={20} src="menu.svg" alt="Menu" />
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
            onClick={() => setIsOpen(false)}
          >
            About Me
          </NavLink>
          <NavLink
            href="/#my-work"
            color="red"
            isOpen={isOpen}
            transitionDelay={100}
            onClick={() => setIsOpen(false)}
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
    </>
  )
}
