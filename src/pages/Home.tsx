import React, { useEffect, useState } from 'react'
import IconButton from '../component/IconButton'

import { randomGreeting } from '../greetings'

export default function Home() {
  const [greeting, setGreeting] = useState('')

  useEffect(function generateGreeting() {
    setGreeting(randomGreeting())
  }, [])

  return (
    <>
      <header className="flex items-center flex-wrap">
        <nav className="flex grow justify-center space-x-8"></nav>
      </header>
      <main>
        <div className="text-center h-screen flex flex-col justify-center items-center">
          <h1 className="text-[10vw] w-fit space-x-[2vw]">
            <span className="slidein-right inline-block font-lighter">
              {greeting}
            </span>
            <span className="wave inline-block before:pt-[100%]">👋</span>
          </h1>
          <p className="font-[Poppins] w-fit">
            My name is <a href="#about-me">Dylan Claywell</a>
          </p>
        </div>
      </main>
    </>
  )
}
