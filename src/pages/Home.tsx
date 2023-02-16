import React, { useEffect, useState } from 'react'

import { randomGreeting } from '../greetings'
import FullscreenModal from '../component/FullscreenModal'
import TheNineties from '../component/TheNineties'

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
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
      <TheNineties />
      <div className="text-center h-screen flex flex-col justify-center items-center relative z-10">
        <img className="object-contain" src="me.svg" />
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
            onClick={() => setModalIsOpen(true)}
          >
            Dylan Claywell
          </button>
        </p>
      </div>
      <FullscreenModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
      />
    </main>
  )
}
