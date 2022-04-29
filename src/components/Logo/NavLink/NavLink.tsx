import React from 'react'
import Typography from '../../Typography'

interface Props {
  children: string
}

export default function NavLink({ children }: Props) {
  return (
    <a className="text-white cursor-pointer">
      <Typography isNeon>{children}</Typography>
    </a>
  )
}
