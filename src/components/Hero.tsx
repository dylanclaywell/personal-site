import React, { useRef, useState, useEffect } from 'react'

import { useScroll } from '../hooks/useScroll'
import { randomGreeting } from '../greetings'

function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max)
}

const maxImageVw = 30
const minImageVw = 10
const defaultPixelSize = 16

export function Hero() {
  const lastPosition = useRef<number>(0)
  const imageRef = useRef<HTMLImageElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
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

  useScroll(function handleScroll(position: number) {
    const image = imageRef.current
    const hero = heroRef.current
    if (!image || !hero) return

    const deltaY = position - lastPosition.current

    const widthSpeed = deltaY / (maxImageVw - minImageVw)
    const newWidth = Number(image.style.width.split('vw')[0]) - widthSpeed

    const direction = deltaY > 0 ? 'down' : 'up'

    if (
      direction === 'down' &&
      position > hero.offsetTop - image.offsetHeight - defaultPixelSize
    ) {
      image.style.width = `${clamp(newWidth, minImageVw, maxImageVw)}vw`
    }

    if (
      direction === 'up' &&
      position < hero.offsetTop + image.offsetHeight + defaultPixelSize
    ) {
      image.style.width = `${clamp(newWidth, minImageVw, maxImageVw)}vw`
    }

    if (position > hero.offsetTop + hero.offsetHeight) {
      image.style.position = 'fixed'
      image.style.top = '1rem'
    }

    if (position < hero.offsetTop) {
      image.style.position = 'sticky'
      image.style.top = '1rem'
      image.style.left = 'auto'
    }

    if (position === 0) {
      image.style.width = '30vw'
    }

    lastPosition.current = position
  })

  return (
    <div className="text-center h-screen flex flex-col justify-center items-center z-10">
      <div
        ref={imageRef}
        className="absolute origin-top-left top-4 w-[30vw] min-w-[5rem] max-w-lg object-contain"
      >
        <img src="me.svg" />
      </div>
      <h1 ref={heroRef} className="text-[10vw] w-fit space-x-[2vw]">
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
          onClick={() => undefined}
        >
          Dylan Claywell
        </button>
      </p>
    </div>
  )
}
