import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import colors from './colors'
import router from './router'

export default function App() {
  useEffect(function initializeColorVariables() {
    for (const colorName of Object.keys(colors)) {
      const colorKey = colorName as keyof typeof colors
      document.documentElement.style.setProperty(
        `--${colorKey}`,
        colors[colorKey]
      )
    }
  }, [])

  return <RouterProvider router={router} />
}
