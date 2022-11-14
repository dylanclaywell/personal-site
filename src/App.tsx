import React, { useEffect } from 'react'

import colors from './colors'
import Feature from './component/Feature'

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
        <nav className="flex grow justify-center space-x-8"></nav>
      </header>
      <main>
        <div className="text-center h-screen flex flex-col justify-center">
          <h1 className="text-[10vw]">Howdy! 👋</h1>
          <p className="font-[Poppins]">
            My name is <a href="#about-me">Dylan Claywell</a>
          </p>
        </div>
        <Feature
          id="about-me"
          title="Who am I?"
          imageUrl="https://via.placeholder.com/500"
          paragraphs={[
            `I'm a software engineer by trade, and a creator by passion. I
            love making something new with my own two hands, from games to web
            applications.`,
            `I love React and Typescript, and I'm passionate about making
            interfaces that are easy to use and look great in the process.`,
          ]}
        />
        <Feature
          id="my-work"
          title="What am I working on?"
          imageUrl="https://via.placeholder.com/500"
          paragraphs={[
            `This website is written in React 18 and Typescript, and is
             styled using Tailwind CSS. It's hosted on Google Cloud Platform
             using App Engine.
            `,
          ]}
        />
      </main>
    </>
  )
}

export default App
