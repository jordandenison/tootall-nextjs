import { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Container, Menu, Responsive, Segment, Visibility } from 'semantic-ui-react'

import HomepageHeading from '../components/HomepageHeading'

import { getWidth } from '../lib/util'

const DesktopContainer = ({ children }) => {
  const [menuFixed, setMenuFixed] = useState(false)

  const hideFixedMenu = () => setMenuFixed(false)
  const showFixedMenu = () => setMenuFixed(true)

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility once={false} onBottomPassed={showFixedMenu} onBottomPassedReverse={hideFixedMenu}>
        <Segment inverted textAlign='center' vertical>
          <Menu fixed={menuFixed ? 'top' : null} inverted={!menuFixed} pointing={!menuFixed} secondary={!menuFixed} size='large'>
            <Container>
              <Menu.Item as='a' active>
                Home
              </Menu.Item>
              <Menu.Item as='a'>Work</Menu.Item>
              <Menu.Item as='a'>Company</Menu.Item>
              <Menu.Item as='a'>Careers</Menu.Item>
              <Menu.Item position='right'>
                <Button as='a' inverted={!menuFixed}>
                  Log in
                </Button>
                <Button as='a' inverted={!menuFixed} primary={menuFixed} style={{ marginLeft: '0.5em' }}>
                  Sign Up
                </Button>
              </Menu.Item>
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
