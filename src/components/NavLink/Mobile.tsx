import React, { useRef } from 'react'
import classnames from 'classnames'
import { CSSTransition } from 'react-transition-group'

import { Props } from './NavLink'
import { onClick } from './onClick'

export function Mobile({
  href,
  children,
  color,
  transitionDelay,
  classes,
  isOpen,
  shouldExit,
  onAnimationEnd,
  onClick: onClickProp,
}: Props) {
  const nodeRef = useRef<HTMLAnchorElement>(null)

  return (
    <CSSTransition
      in={isOpen && !shouldExit}
      nodeRef={nodeRef}
      timeout={300 + (transitionDelay ?? 0)}
      classNames={'nav-link-mobile'}
      onExited={() => onAnimationEnd?.()}
    >
      <div className="relative">
        <a
          ref={nodeRef}
          className={classnames(
            `
              transition-colors rounded-full border-2 border-black font-[Poppins] 
              px-8 py-4 max-w-[10rem] flex justify-center translate-x-[-120%]
            `,
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
    </CSSTransition>
  )
}
