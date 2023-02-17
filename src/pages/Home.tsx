import React, { useEffect, useState, useRef } from 'react'

import { randomGreeting } from '../greetings'
import TheNineties from '../component/TheNineties'
import { useScroll } from '../hooks/useScroll'

function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max)
}

const defaultPixelSize = 16

export function Home() {
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
    const widthSpeed = deltaY / 10
    const translateSpeed = deltaY / 4

    const newWidth = Number(image.style.width.split('vw')[0]) - widthSpeed

    const translateAmount =
      image.style.transform.split('translateX(')?.[1] ?? '0vw'
    const newTranslateAmount =
      Number(translateAmount.split('vw')[0]) - translateSpeed

    const direction = deltaY > 0 ? 'down' : 'up'

    if (
      direction === 'down' &&
      position > image.offsetHeight - hero.offsetHeight - defaultPixelSize
    ) {
      image.style.width = `${clamp(newWidth, 10, 30)}vw`
      image.style.transform = `translateX(${clamp(
        newTranslateAmount,
        -44,
        0
      )}vw)`
    }

    if (
      direction === 'up' &&
      position < image.offsetHeight + hero.offsetHeight + defaultPixelSize
    ) {
      image.style.width = `${clamp(newWidth, 10, 30)}vw`
      image.style.transform = `translateX(${clamp(
        newTranslateAmount,
        -45,
        0
      )}vw)`
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
      image.style.transform = 'translateX(0vw)'
    }

    lastPosition.current = position
  })

  return (
    <main>
      <TheNineties />
      <div className="text-center h-screen flex flex-col justify-center items-center relative z-10">
        <img
          ref={imageRef}
          className="transition-all duration-100 ease-linear sticky top-0 min-w-[10vw] max-w-[30vw] object-contain"
          src="me.svg"
        />
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
      <div className="h-screen"></div>
    </main>
  )
}
