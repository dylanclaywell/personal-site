import React from 'react'
import classnames from 'classnames'

interface Props {
  title: string
  imageUrl: string
  orientation?: 'textLeft' | 'textRight'
  children: React.ReactNode
}

export default function Feature({
  title,
  imageUrl,
  orientation = 'textLeft',
  children,
}: Props) {
  return (
    <section
      className={classnames(
        'flex flex-col md:flex-row p-4 space-y-2 md:space-y-0 md:space-x-4 md:h-screen',
        {
          'md:flex-row-reverse md:space-x-reverse': orientation === 'textRight',
        }
      )}
    >
      <div
        className={classnames('space-y-4 basis-1/2', {
          'slidein-left': orientation === 'textLeft',
          'slidein-right': orientation === 'textRight',
        })}
      >
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="[&>*]:basis-1/2 [&>*]:font-[Poppins] space-y-4">
          {children}
        </div>
      </div>
      <img
        className={classnames('basis-1/2 w-full md:w-1/2 object-contain', {
          'slidein-right': orientation === 'textLeft',
          'slidein-left': orientation === 'textRight',
        })}
        src={imageUrl}
      />
    </section>
  )
}
