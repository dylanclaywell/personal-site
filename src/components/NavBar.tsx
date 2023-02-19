import React from 'react'

import { NavLink } from './NavLink'

export function NavBar() {
  return (
    <nav className="fixed top-4 flex justify-between w-full px-4">
      <NavLink href="/#about-me" color="blue">
        About Me
      </NavLink>
      <NavLink href="/#my-work" color="red">
        My Work
      </NavLink>
    </nav>
  )
}
