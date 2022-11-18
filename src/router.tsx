import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about-me',
    element: <About />,
  },
  {
    path: '/my-work',
    element: <Work />,
  },
])
