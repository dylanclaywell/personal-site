import React from 'react'
import classnames from 'classnames'

import { scrollToElement } from '../utils/scrollToElement'

export interface Props {
  href: string
  children: React.ReactNode
  color: 'blue' | 'red'
}

export function NavLink({ href, children, color }: Props) {
  function onClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    if (!(event.target instanceof HTMLAnchorElement)) return

    window.history.pushState({}, document.title, event.target.href)

    scrollToElement()
  }

  return (
    <a
      className={classnames(
        'transition-colors  inline-block rounded-full border-2 border-black font-[Poppins] px-8 py-4',
        {
          'bg-blue hover:bg-light-blue': color === 'blue',
          'bg-red hover:bg-light-red': color === 'red',
        }
      )}
      href={href}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
