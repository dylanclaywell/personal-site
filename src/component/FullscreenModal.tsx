import React from 'react'
import classnames from 'classnames'

import IconLink from './IconLink'
import { useEscapeKey } from '../hooks/useEscapeKey'

export interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function FullscreenModal({
  isOpen,
  onClose,
}: Props): JSX.Element {
  useEscapeKey(onClose)

  return (
    <div
      className={classnames('absolute top-0 bottom-0 left-0 right-0', {
        'pointer-events-none': !isOpen,
      })}
    >
      <div
        className={classnames('absolute w-full h-full', {
          'opacity-0': !isOpen,
        })}
        onClick={onClose}
      />
      <div className="absolute overflow-hidden" onClick={onClose}>
        <div
          className={classnames(
            'h-[calc(100vh_-_4rem)] justify-between flex flex-col m-8 transition-all',
            {
              'scale-125': !isOpen,
              'scale-100': isOpen,
            }
          )}
        >
          <IconLink name="face" label="About Me" url="/about-me" />
          <IconLink name="work" label="Work" url="/my-work" />
        </div>
      </div>
    </div>
  )
}
