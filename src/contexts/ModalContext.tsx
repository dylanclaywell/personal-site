import React, { createContext, useReducer, useEffect } from 'react'

import FullscreenModal from '../component/FullscreenModal'

export interface State {
  isOpen: boolean
  content: React.ReactNode
}

export type Action =
  | {
      type: 'open'
      content: React.ReactNode
    }
  | {
      type: 'close'
    }

const initialState: State = {
  isOpen: false,
  content: null,
}

export const ModalContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => undefined,
])

export interface Props {
  children: React.ReactNode
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'open':
      return {
        ...state,
        isOpen: true,
        content: action.content,
      }
    case 'close':
      return {
        ...state,
        isOpen: false,
        content: null,
      }
  }
}

export function ModalProvider({ children }: Props): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(function registerEscapeHandler() {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        dispatch({ type: 'close' })
      }
    }

    document.addEventListener('keydown', handleEscape)

    return function cleanup() {
      document.removeEventListener('keydown', handleEscape)
    }
  })

  return (
    <ModalContext.Provider value={[state, dispatch]}>
      {children}
      <FullscreenModal isOpen={state.isOpen}>{state.content}</FullscreenModal>
    </ModalContext.Provider>
  )
}
