import React from 'react'

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const numberOfCircles = 6
const numberOfTriangles = 6
const numberOfZigzags = 6

function TheNinties() {
  const circlesToRender = Array.from({ length: numberOfCircles }).reduce<
    { top: number; left: number }[]
  >((acc, val, i) => {
    const top = random(i * (100 / 6), (i + 1) * (100 / 6))
    let left = random(0, 100)

    while (acc.some((v) => v.left <= left + 5 && v.left >= left - 5)) {
      left = random(0, 100)
    }

    return [...acc, { top, left }]
  }, [])

  const trianglesToRender = Array.from({ length: numberOfTriangles }).reduce<
    { top: number; left: number }[]
  >((acc, val, i) => {
    const top = random(i * (100 / 6), (i + 1) * (100 / 6))
    let left = random(0, 100)

    while (acc.some((v) => v.left <= left + 5 && v.left >= left - 5)) {
      left = random(0, 100)
    }

    return [...acc, { top, left }]
  }, [])

  const zigzagsToRender = Array.from({ length: numberOfZigzags }).reduce<
    { top: number; left: number }[]
  >((acc, val, i) => {
    const top = random(i * (100 / 6), (i + 1) * (100 / 6))
    let left = random(0, 100)

    while (acc.some((v) => v.left <= left + 5 && v.left >= left - 5)) {
      left = random(0, 100)
    }

    return [...acc, { top, left }]
  }, [])

  const circles = circlesToRender.map((c, i) => {
    return (
      <div
        key={`circle-${i}`}
        className="absolute"
        style={{
          top: `${c.top}vh`,
          left: `${c.left}vw`,
          width: random(10, 20) + 'vw',
          transform: `rotate(${random(0, 360)}deg)`,
        }}
      >
        <img src="circle.svg" />
      </div>
    )
  })

  const triangles = trianglesToRender.map((t, i) => {
    return (
      <div
        key={`triangle-${i}`}
        className="absolute"
        style={{
          top: `${t.top}vh`,
          left: `${t.left}vw`,
          width: random(10, 20) + 'vw',
          transform: `rotate(${random(0, 360)}deg)`,
        }}
      >
        <img src="triangle.svg" />
      </div>
    )
  })

  const zigzags = zigzagsToRender.map((z, i) => {
    return (
      <div
        key={`zigzag-${i}`}
        className="absolute"
        style={{
          top: `${z.top}vh`,
          left: `${z.left}vw`,
          width: random(10, 20) + 'vw',
          transform: `rotate(${random(0, 360)}deg)`,
        }}
      >
        <img src="zigzag.svg" />
      </div>
    )
  })

  return (
    <div className="pointer-events-none absolute top-0 bottom-0 left-0 right-0 overflow-hidden opacity-50">
      {circles}
      {triangles}
      {zigzags}
    </div>
  )
}

export default React.memo(TheNinties)
