import { Responsive } from 'semantic-ui-react'

export const getWidth = () => typeof window === 'undefined' ? Responsive.onlyTablet.minWidth : window.innerWidth

export const getCurrentWindowHeight = () =>
  typeof window !== 'undefined' && typeof document !== 'undefined'
    ? (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0)
    : 0
