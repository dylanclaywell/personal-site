import React from 'react'

import { useMediaQuery } from '../../hooks/useMediaQuery'
import { Desktop } from './Desktop'
import { Mobile } from './Mobile'

export interface Props {
  href: string
  children: React.ReactNode
  color: 'blue' | 'red'
  transitionDelay: number
  classes?: string
  isOpen: boolean
  shouldExit: boolean
  onAnimationEnd?: () => void
  onClick: () => void
}

export function NavLink(args: Props) {
  const isMediumScreen = useMediaQuery('md')

  return isMediumScreen ? <Desktop {...args} /> : <Mobile {...args} />
}
