import React from 'react'
import classnames from 'classnames'

interface Props {
  id: string
  title: string
  children: React.ReactNode
  color: 'blue' | 'red'
}

export function Feature({ id, title, children, color }: Props) {
  return (
    <section
      id={id}
      className={classnames(
        'max-w-xl m-auto h-screen flex flex-col justify-center items-center',
        {}
      )}
    >
      <h1
        className={classnames(
          'rounded-full px-8 py-4 border-2 border-black -mb-8 z-10 text-4xl',
          {
            'bg-blue': color === 'blue',
            'bg-red': color === 'red',
          }
        )}
      >
        {title}
      </h1>
      <div className="pt-16 px-4 pb-8 rounded-xl bg-white border-2 border-black space-y-4">
        {children}
      </div>
    </section>
  )
}
