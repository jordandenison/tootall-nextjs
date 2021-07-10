import { useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Menu, Responsive, Segment, Visibility } from 'semantic-ui-react'

import HomepageHeading from '../HomepageHeading'

import VisibleAnchorChecker from '../VisibleAnchorChecker'

import { getCurrentWindowHeight, getWidth } from '../../lib/util'

const DesktopContainer = ({ children }) => {
  const [menuFixed, setMenuFixed] = useState(false)

  const hideFixedMenu = () => setMenuFixed(false)
  const showFixedMenu = () => setMenuFixed(true)

  const currentVisibleAnchor = VisibleAnchorChecker(getCurrentWindowHeight())

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility once={false} onBottomPassed={showFixedMenu} onBottomPassedReverse={hideFixedMenu}>
        <Segment id='top' inverted textAlign='center' vertical style={{ minHeight: '800px', padding: '1em 0em' }}>
          <Menu fixed={menuFixed ? 'top' : null} inverted={!menuFixed} pointing={!menuFixed} secondary={!menuFixed} size='large'>
            <Container>
              <Menu.Item as='a' active={!menuFixed || currentVisibleAnchor === 'home-anchor'} href='#top'>Home</Menu.Item>
              <Menu.Item as='a' active={menuFixed && currentVisibleAnchor === 'equipment-anchor'} href='#equipment-anchor'>Equipment</Menu.Item>
              <Menu.Item as='a' active={menuFixed && currentVisibleAnchor === 'gallery-anchor'} href='#gallery-anchor'>Gallery</Menu.Item>
              <Menu.Item as='a' active={menuFixed && currentVisibleAnchor === 'contact-anchor'} href='#contact-anchor'>Contact</Menu.Item>
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
