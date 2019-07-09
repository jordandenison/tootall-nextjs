import { useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Menu, Responsive, Segment, Visibility } from 'semantic-ui-react'

import HomepageHeading from 'components/HomepageHeading'

import VisibleAnchorChecker from 'components/VisibleAnchorChecker'

import { getWidth } from 'lib/util'

const getCurrentWindowHeight = () =>
  typeof window !== 'undefined' && typeof document !== 'undefined'
  ? (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0)
  : 0

const DesktopContainer = ({ children }) => {
  const [menuFixed, setMenuFixed] = useState(false)

  const hideFixedMenu = () => setMenuFixed(false)
  const showFixedMenu = () => setMenuFixed(true)

  const currentVisibleAnchor = VisibleAnchorChecker(getCurrentWindowHeight())

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility once={false} onBottomPassed={showFixedMenu} onBottomPassedReverse={hideFixedMenu}>
        <Segment inverted textAlign='center' vertical style={{ minHeight: '800px', padding: '1em 0em' }}>
          <Menu fixed={menuFixed ? 'top' : null} inverted={!menuFixed} pointing={!menuFixed} secondary={!menuFixed} size='large'>
            <Container>
              <Menu.Item as='a' active={currentVisibleAnchor === 'home-anchor'}>Home</Menu.Item>
              <Menu.Item as='a' active={currentVisibleAnchor === 'equipment-anchor'}>Equipment</Menu.Item>
              <Menu.Item as='a' active={currentVisibleAnchor === 'gallery-anchor'}>Gallery</Menu.Item>
              <Menu.Item as='a' active={currentVisibleAnchor === 'contact-anchor'}>Contact</Menu.Item>
            </Container>
          </Menu>
          <HomepageHeading />
        </Segment>
      </Visibility>

      {children}
    </Responsive>
  )
}

DesktopContainer.propTypes = {
  children: PropTypes.node
}

export default DesktopContainer
