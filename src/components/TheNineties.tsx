import React from 'react'

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const numberOfCircles = 6
const numberOfTriangles = 6
const numberOfZigzags = 6

const minDistanceApart = 5

const minWidth = 10
const maxWidth = 20

function generateShapePositions(numberOfShapes: number, minDistance: number) {
  return Array.from({ length: numberOfShapes }).reduce<
    { top: number; left: number }[]
  >((acc, val, i) => {
    const top = random(
      i * (100 / numberOfShapes),
      (i + 1) * (100 / numberOfShapes)
    )
    let left = random(0, 100)

    while (
      acc.some(
        (v) => v.left <= left + minDistance && v.left >= left - minDistance
      )
    ) {
      left = random(0, 100)
    }

    return [...acc, { top, left }]
  }, [])
}

function renderShapes(
  name: string,
  positions: { top: number; left: number }[]
) {
  return positions.map((c, i) => {
    const width = random(minWidth, maxWidth)

    return (
      <div
        key={`${name}-${i}`}
        className="absolute"
        style={{
          top: `${c.top}vh`,
          left: `${c.left}vw`,
          width: `${width}vw`,
          transform: `rotate(${random(0, 360)}deg)`,
        }}
      >
        <img src={`${name}.svg`} />
      </div>
    )
  })
}

function TheNintiesBase() {
  const circlesToRender = generateShapePositions(
    numberOfCircles,
    minDistanceApart
  )

  const trianglesToRender = generateShapePositions(
    numberOfTriangles,
    minDistanceApart
  )

  const zigzagsToRender = generateShapePositions(
    numberOfZigzags,
    minDistanceApart
  )

  const circles = renderShapes('circle', circlesToRender)
  const triangles = renderShapes('triangle', trianglesToRender)
  const zigzags = renderShapes('zigzag', zigzagsToRender)

  return (
    <div
      aria-hidden="true"
      className="-z-10 pointer-events-none fixed top-0 bottom-0 left-0 right-0 overflow-hidden opacity-50"
    >
      {circles}
      {triangles}
      {zigzags}
    </div>
  )
}

export const TheNineties = React.memo(TheNintiesBase)
