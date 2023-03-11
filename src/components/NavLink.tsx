import React, { useRef } from 'react'
import classnames from 'classnames'
import { CSSTransition } from 'react-transition-group'

import { scrollToElement } from '../utils/scrollToElement'

export interface Props {
  href: string
  children: React.ReactNode
  color: 'blue' | 'red'
  transitionDelay: number
  classes?: string
  isOpen: boolean
  shouldExit: boolean
  onAnimationEnd?: () => void
}

export function NavLink({
  href,
  children,
  color,
  transitionDelay: animationDelay,
  classes,
  isOpen,
  shouldExit,
  onAnimationEnd,
}: Props) {
  const nodeRef = useRef<HTMLAnchorElement>(null)
  const classNames = `
    transition-colors rounded-full border-2 border-black font-[Poppins] 
    px-8 py-4 max-w-[10rem] flex justify-center translate-x-[-120%] 
    md:translate-x-0
  `

  function onClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    if (!(event.target instanceof HTMLAnchorElement)) return

    window.history.pushState({}, document.title, event.target.href)

    scrollToElement()
  }

  return (
    <CSSTransition
      in={isOpen && !shouldExit}
      nodeRef={nodeRef}
      timeout={300 + (animationDelay ?? 0)}
      classNames="nav-link"
      onExited={() => onAnimationEnd?.()}
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className={classnames(`${classNames} absolute top-[0.5rem] left-0`, {
            'bg-dark-blue': color === 'blue',
            'bg-dark-red': color === 'red',
          })}
        >
          {children}
        </div>
        <a
          ref={nodeRef}
          className={classnames(
            `${classNames} md:active:translate-y-[0.5rem]`,
            {
              'bg-blue hover:bg-light-blue': color === 'blue',
              'bg-red hover:bg-light-red': color === 'red',
            },
            classes
          )}
          href={href}
          onClick={onClick}
          style={{
            transitionDelay: animationDelay ? `${animationDelay}ms` : '',
          }}
        >
          {children}
        </a>
      </div>
    </CSSTransition>
  )
}
