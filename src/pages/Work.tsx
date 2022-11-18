import React from 'react'

import Feature from '../component/Feature'

export default function Work() {
  return (
    <main>
      <Feature
        orientation="textRight"
        title="What am I working on?"
        imageUrl="https://via.placeholder.com/500"
        paragraphs={[
          `This website is written in React 18 and Typescript, and is
             styled using Tailwind CSS. It's hosted on Google Cloud Platform
             using App Engine.
            `,
          `I've also been working with Solid JS, a library with inspiration
             from React and Preact, and and Tauri to make desktop applications.
            `,
          `In my spare time I've been working on a game using Tauri and Phaser,
             so stay tuned!
            `,
        ]}
      />
    </main>
  )
}
