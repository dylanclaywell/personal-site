import classnames from 'classnames'
import React from 'react'

type Component = 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'li'

interface Props {
  className?: string
  component?: Component
  children: string
  isNeon?: boolean
}

function getTypographyComponent({
  component,
  text,
  className,
  isNeon,
}: {
  component: Component | undefined
  text: string
  className: string | undefined
  isNeon: boolean | undefined
}) {
  const props = {
    className,
    ...(isNeon && {
      'data-before': text,
      className: classnames(className, 'neon'),
    }),
  }

  switch (component) {
    case 'h1':
      return <h1 {...props}>{text}</h1>
    case 'h2':
      return <h2 {...props}>{text}</h2>
    case 'h3':
      return <h3 {...props}>{text}</h3>
    case 'h4':
      return <h4 {...props}>{text}</h4>
    case 'h5':
      return <h5 {...props}>{text}</h5>
    case 'h6':
      return <h6 {...props}>{text}</h6>
    case 'p':
      return <p {...props}>{text}</p>
    case 'li':
      return <li {...props}>{text}</li>
    default:
      return <span {...props}>{text}</span>
  }
}

export default function Typography({
  children,
  component,
  className,
  isNeon,
}: Props) {
  return getTypographyComponent({
    component,
    text: children,
    className,
    isNeon,
  })
}
