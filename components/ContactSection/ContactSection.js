import { Header, Segment } from 'semantic-ui-react'

const ContactSection = () => (
  <Segment id='contact-anchor' style={{ margin: '0em', padding: '0em', minHeight: '600px' }}>
    <Header as='h1' textAlign='center' style={{ margin: '100px 0 100px 0', fontSize: '3em' }}>Contact Us</Header>
    <Header as='h2' textAlign='center'>John Denison, Owner</Header>
    <Header as='h2' textAlign='center'>Phone: 250-718-0975</Header>
    <Header as='h2' textAlign='center'>E-mail: <a href='mailto:j_denison@telus.net?subject=Too Tall Equipment Rental'>j_denison@telus.net</a></Header>
  </Segment>
)

export default ContactSection
