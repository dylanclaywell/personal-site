import React from 'react'
import { Link } from 'react-router-dom'

export interface Props {
  name: string
  label: string
  url: string
}

export default function IconLink({ name, label, url }: Props) {
  return (
    <Link
      aria-label={label}
      className="bg-cyan-600 text-white flex justify-center items-center rounded-full p-4"
      to={url}
    >
      <span className="material-symbols-outlined text-[2rem] flex justify-center items-center w-4 h-4">
        {name}
      </span>
    </Link>
  )
}
