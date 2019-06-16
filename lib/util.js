import { Responsive } from 'semantic-ui-react'

export const getWidth = () => typeof window === 'undefined' ? Responsive.onlyTablet.minWidth : window.innerWidth
