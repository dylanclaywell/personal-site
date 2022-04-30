import React from 'react'

import colors from '../../colors'
import Typography from '../Typography'

interface Props {
  children: string
}

export default function NavLink({ children }: Props) {
  return (
    <a className="text-white cursor-pointer text-4xl">
      <Typography neonLevel="2" isNeon color={colors['neon-teal']}>
        {children}
      </Typography>
    </a>
  )
}
