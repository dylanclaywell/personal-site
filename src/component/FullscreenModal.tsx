import React, { useContext } from 'react'
import classnames from 'classnames'

import { ModalContext } from '../contexts/ModalContext'

export interface Props {
  isOpen: boolean
  children: React.ReactNode
}

export default function FullscreenModal({
  isOpen,
  children,
}: Props): JSX.Element {
  const [, dispatch] = useContext(ModalContext)

  return (
    <div
      className={classnames('absolute top-0 bottom-0 left-0 right-0', {
        'pointer-events-none': !isOpen,
      })}
    >
      <div
        className={classnames(
          'absolute w-full h-full bg-gray-800 opacity-30 transition-all',
          {
            'opacity-0': !isOpen,
          }
        )}
        onClick={() => dispatch({ type: 'close' })}
      />
      {isOpen && <div className="absolute">{children}</div>}
    </div>
  )
}
