import { useEffect } from 'react'

export function useKey(key: string, callback: () => void) {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        callback()
      }
    }

    document.addEventListener('keydown', listener)

    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [callback])
}
