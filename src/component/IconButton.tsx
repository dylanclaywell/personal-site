import React from 'react'
import classnames from 'classnames'

export interface Props {
  name: string
}

export default function IconButton({ name }: Props) {
  return (
    <button className="bg-cyan-600 text-white flex justify-center items-center rounded-full p-4">
      <span className="material-symbols-outlined text-2xl">{name}</span>
    </button>
  )
}
