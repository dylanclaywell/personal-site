import React from 'react'

import Feature from '../component/Feature'

export default function Work() {
  return (
    <main>
      <Feature
        orientation="textRight"
        title="What am I working on?"
        imageUrl="https://via.placeholder.com/500"
      >
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
