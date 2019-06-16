import PropTypes from 'prop-types'
import { Container, Header } from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Imagine-a-Company'
      inverted
    />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      inverted
    />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
}

export default HomepageHeading
