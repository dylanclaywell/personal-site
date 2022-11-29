import React, { useEffect, useState, useContext } from 'react'

import NavigationMenu from '../component/NavigationMenu'
import { ModalContext } from '../contexts/ModalContext'
import { randomGreeting } from '../greetings'

export default function Home() {
  const [, dispatch] = useContext(ModalContext)
  const [greeting, setGreeting] = useState('')

  useEffect(function generateGreeting() {
    setGreeting(randomGreeting())

    const interval = setInterval(() => {
      setGreeting(randomGreeting())
    }, 2000)

    return function cleanup() {
      clearInterval(interval)
    }
  }, [])

  return (
    <main>
      <div className="text-center h-screen flex flex-col justify-center items-center">
        <h1 className="text-[10vw] w-fit space-x-[2vw]">
          <span
            key={greeting}
            className="slidein-right inline-block font-lighter"
          >
            {greeting}
          </span>
          <span className="wave inline-block before:pt-[100%]">👋</span>
        </h1>
        <p className="font-[Poppins] w-fit">
          My name is{' '}
          <button
            className="text-blue hover:text-light-blue"
            onClick={() =>
              dispatch({ type: 'open', content: <NavigationMenu /> })
            }
          >
            Dylan Claywell
          </button>
        </p>
      </div>
    </main>
  )
}
