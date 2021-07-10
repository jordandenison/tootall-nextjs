import { useState } from 'react'
import PropTypes from 'prop-types'
import { Container, Icon, Menu, Responsive, Segment, Sidebar } from 'semantic-ui-react'

import HomepageHeading from '../HomepageHeading'

import VisibleAnchorChecker from '../VisibleAnchorChecker'

import { getCurrentWindowHeight, getWidth } from '../../lib/util'

const MobileContainer = ({ children }) => {
  const [sidebarOpened, setSideBarOpened] = useState(false)

  const handleSidebarHide = () => setSideBarOpened(false)
  const handleToggle = () => setSideBarOpened(true)

  const currentVisibleAnchor = VisibleAnchorChecker(getCurrentWindowHeight())

  return (
    <Responsive as={Sidebar.Pushable} getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
      <Sidebar as={Menu} animation='push' inverted onHide={handleSidebarHide} vertical visible={sidebarOpened}>
        <Menu.Item as='a' active={currentVisibleAnchor === 'home-anchor'} href='#home'>Home</Menu.Item>
        <Menu.Item as='a' active={currentVisibleAnchor === 'equipment-anchor'} href='#equipment-anchor'>Equipment</Menu.Item>
        <Menu.Item as='a' active={currentVisibleAnchor === 'gallery-anchor'} href='#gallery-anchor'>Gallery</Menu.Item>
        <Menu.Item as='a' active={currentVisibleAnchor === 'contact-anchor'} href='#contact-anchor'>Contact</Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={sidebarOpened}>
        <Segment id='home' inverted textAlign='center' vertical style={{ minHeight: '360px' }}>
          <Container>
            <Menu inverted pointing secondary size='large'>
              <Menu.Item onClick={handleToggle}>
                <Icon name='sidebar' />
              </Menu.Item>
            </Menu>
          </Container>
          <HomepageHeading mobile />
        </Segment>
        {children}
      </Sidebar.Pusher>
    </Responsive>
  )
}

MobileContainer.propTypes = {
  children: PropTypes.node
}

export default MobileContainer
