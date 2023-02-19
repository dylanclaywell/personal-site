import { useEffect } from 'react'
import { scrollToElement } from '../utils/scrollToElement'

export function useSmoothScrolling() {
  useEffect(scrollToElement, [])
}
