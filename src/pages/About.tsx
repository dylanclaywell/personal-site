import React from 'react'

import Feature from '../component/Feature'

export default function About() {
  return (
    <main className="overflow-x-hidden">
      <div className="text-center h-screen flex flex-col justify-center items-center">
        <h1 className="text-[10vw] w-fit space-x-[2vw]">
          <span className="inline-block font-lighter">Who am I?</span>
        </h1>
        <div className="text-left max-w-xl space-y-4 text-lg">
          <p className="font-light">
            I&apos;m a software engineer by trade, and a creator by passion. I
            love making something new with my own two hands, from games to web
            applications.
          </p>
          <p className="font-light">
            I love React and Typescript, and I&apos;m passionate about making
            interfaces that are easy to use, look great, and are written with
            with clean code in the process.
          </p>
        </div>
      </div>
      <div className="absolute top-0 w-screen h-screen pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-600 w-[40vw] h-[40vw] rounded-full border-2 border-black opacity-25"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-600 w-[40vw] h-[40vw] rounded-full border-2 border-black opacity-25"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-600 w-[40vw] h-[40vw] rounded-full border-2 border-black opacity-25"></div>
      </div>
      {/* <Feature title="Who am I?" imageUrl="me.svg"></Feature> */}
    </main>
  )
}
