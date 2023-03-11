import React, { useRef, useState, useEffect } from 'react'

import { useScroll } from '../hooks/useScroll'
import { randomGreeting } from '../greetings'
import classNames from 'classnames'

function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max)
}

const maxImageVw = 30
const minImageVw = 10
const defaultPixelSize = 16

export function Hero() {
  const [shouldPeekImages, setShouldPeekImages] = useState(false)
  const [shouldSwitchImages, setShouldSwitchImages] = useState(false)
  const [images, setImages] = useState<('default' | 'focused' | 'test')[]>([
    'default',
    'focused',
    'test',
  ])
  const lastPosition = useRef<number>(0)
  const imageRef = useRef<HTMLAnchorElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const [greeting, setGreeting] = useState('')

  function switchImages() {
    setImages((previousImages) => {
      const newImages = structuredClone(previousImages)
      const image = newImages.pop()

      if (!image) return newImages

      newImages.unshift(image)
      return newImages
    })
  }

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
      image.style.height = `${clamp(newWidth, minImageVw, maxImageVw)}vw`
    }

    if (
      direction === 'up' &&
      position < hero.offsetTop + image.offsetHeight + defaultPixelSize
    ) {
      image.style.width = `${clamp(newWidth, minImageVw, maxImageVw)}vw`
      image.style.height = `${clamp(newWidth, minImageVw, maxImageVw)}vw`
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
      image.style.height = '30vw'
    }

    lastPosition.current = position
  })

  return (
    <div className="text-center h-screen flex flex-col justify-center items-center">
      <a
        onClick={(event) => {
          event.preventDefault()
          window.history.pushState({}, '', '/')
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        href="/"
        ref={imageRef}
        className="absolute top-4 min-h-[5rem] min-w-[5rem] max-w-lg max-h-[32rem] z-50"
        aria-label="Back to home"
      >
        {images
          .slice()
          .reverse()
          .map((image, i) => (
            <img
              key={image}
              aria-hidden={i !== images.length - 1}
              src={`${image}.svg`}
              className={classNames(
                `absolute w-full transition-transform border-2 border-black rounded-full`,
                {
                  swap: shouldSwitchImages && i === 0,
                  'z-0': !shouldSwitchImages,
                }
              )}
              style={{
                zIndex: !shouldSwitchImages ? '0' : '',
                transform:
                  shouldPeekImages && i === 0 && !shouldSwitchImages
                    ? `translateX(${(i + 1) * 10}%)`
                    : 'none',
              }}
              alt="It's me - Dylan!"
              onAnimationEnd={(event) => {
                const target = event.target
                if (target instanceof HTMLImageElement) {
                  const parent = target.parentElement
                  if (parent) {
                    const children = Array.from(parent.children)

                    children.forEach((child) => {
                      if (
                        child instanceof HTMLImageElement &&
                        !target.src.includes(child.src)
                      ) {
                        child.style.zIndex = '-1'
                      }
                    })
                  }
                }

                setShouldSwitchImages(false)
                switchImages()
              }}
            />
          ))}
      </a>
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
          onClick={() => setShouldSwitchImages(true)}
          onMouseOver={() => setShouldPeekImages(true)}
          onMouseOut={() => setShouldPeekImages(false)}
        >
          Dylan Claywell
        </button>
      </p>
    </div>
  )
}
