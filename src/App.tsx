import React, { useEffect } from 'react'

import colors from './colors'
import Logo from './components/Logo'
import NavLink from './components/NavLink'

function App() {
  // Set all color variables from the shared colors file
  useEffect(() => {
    for (const colorName of Object.keys(colors)) {
      const colorKey = colorName as keyof typeof colors
      document.documentElement.style.setProperty(
        `--${colorKey}`,
        colors[colorKey]
      )
    }
  }, [])

  return (
    <>
      <header className="flex items-center flex-wrap">
        <div>
          <Logo />
        </div>
        <nav className="flex grow justify-center space-x-8">
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
        </nav>
      </header>
      <main></main>
    </>
  )
}

export default App
