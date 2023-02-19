import React from 'react'

import { TheNineties } from '../components/TheNineties'
import { Feature } from '../components/Feature'
import { NavBar } from '../components/NavBar'
import { Hero } from '../components/Hero'
import { useSmoothScrolling } from '../hooks/useSmoothScrolling'

export function Home() {
  useSmoothScrolling()

  return (
    <main>
      <TheNineties />
      <NavBar />
      <Hero />
      <Feature color="blue" id="about-me" title="Who am I?">
        <p className="font-light">
          I&apos;m a software engineer by trade, and a creator by passion. I
          love making something new with my own two hands, from games to web
          applications.
        </p>
        <p className="font-light">
          I love React and Typescript, and I&apos;m passionate about making
          interfaces that are easy to use, look great, and are written with with
          clean code in the process.
        </p>
      </Feature>
      <Feature color="red" id="my-work" title="What am I working on?">
        <p>
          This website is written in React 18 and Typescript, and is styled
          using Tailwind CSS. It&apos;s hosted on Google Cloud Platform using
          App Engine.
        </p>
        <p>
          I&apos;ve also been working with Solid JS, a library with inspiration
          from React and Preact, and Tauri to make desktop applications.
        </p>
        <p>
          In my spare time I&apos;ve been working on a game using Tauri and
          Phaser, so stay tuned!
        </p>
      </Feature>
    </main>
  )
}
