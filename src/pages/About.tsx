import React from 'react'

import Feature from '../component/Feature'

export default function About() {
  return (
    <main className="overflow-x-hidden">
      <Feature
        title="Who am I?"
        imageUrl="me.svg"
        paragraphs={[
          `I'm a software engineer by trade, and a creator by passion. I
            love making something new with my own two hands, from games to web
            applications.`,
          `I love React and Typescript, and I'm passionate about making
            interfaces that are easy to use, look great, and are written with 
            with clean code in the process.`,
        ]}
      />
    </main>
  )
}
