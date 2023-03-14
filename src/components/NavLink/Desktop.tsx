import React from 'react'
import classnames from 'classnames'

import { Props } from './NavLink'
import { onClick } from './onClick'

export function Desktop({
  href,
  children,
  color,
  transitionDelay,
  classes,
  onClick: onClickProp,
}: Props) {
  const classNames = `
    transition-colors rounded-full border-2 border-black font-[Poppins] 
    px-8 py-4 max-w-[10rem] flex justify-center translate-x-[-120%] 
    md:translate-x-0
  `

  return (
    <div
      className={`relative nav-link`}
      style={{
        animationDelay: transitionDelay ? `${transitionDelay}ms` : '',
      }}
    >
      <div
        aria-hidden="true"
        className={classnames(classNames, 'absolute top-[0.5rem] left-0', {
          'bg-dark-blue': color === 'blue',
          'bg-dark-red': color === 'red',
        })}
      >
        {children}
      </div>
      <a
        className={classnames(
          `${classNames} active:translate-y-[0.5rem]`,
          {
            'bg-blue hover:bg-light-blue': color === 'blue',
            'bg-red hover:bg-light-red': color === 'red',
          },
          classes
        )}
        href={href}
        onClick={(event) => {
          onClick(event)
          onClickProp()
        }}
        style={{
          transitionDelay: transitionDelay ? `${transitionDelay}ms` : '',
        }}
      >
        {children}
      </a>
    </div>
  )
}
