import { useEffect, useState } from 'react'

const anchorIds = [
  'equipment-anchor',
  'gallery-anchor',
  'contact-anchor'
]

const checkIfElementInViewport = el => {
  const rect = el.getBoundingClientRect()

  return typeof window !== 'undefined' && typeof document !== 'undefined' ? (
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.left < (window.innerWidth || document.documentElement.clientWidth),
    rect.top < (window.innerHeight || document.documentElement.clientHeight)
  ) : false
}

const VisibleAnchorChecker = () => {
  const [currentAnchor, setCurrentAnchor] = useState('home-anchor')

  useEffect(() => {
    const handleScrollEvent = () => {
      const newCurrentVisibleAnchor = anchorIds.reduce((result, anchorId) => {
        const el = document.getElementById(anchorId)

        return checkIfElementInViewport(el) ? anchorId : result
      }, 'home-anchor')

      if (newCurrentVisibleAnchor !== currentAnchor) {
        setCurrentAnchor(newCurrentVisibleAnchor)
      }
    }

    window.addEventListener('scroll', handleScrollEvent)
    return () => { window.removeEventListener('scroll', handleScrollEvent) }
  }, [])

  return currentAnchor
}

export default VisibleAnchorChecker
