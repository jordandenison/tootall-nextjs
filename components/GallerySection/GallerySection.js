import { Grid, Header, Image, Modal, Segment } from 'semantic-ui-react'

import gallery from 'data/gallery'

const GallerySection = () => (
  <Segment id='gallery-anchor' style={{ margin: '0em', padding: '0em', backgroundColor: '#b8bcc2' }}>
    <Header as='h1' textAlign='center' style={{ margin: '100px 0 100px 0', fontSize: '3em' }}>Gallery</Header>
    <Grid columns={4} stackable centered>
      <Grid.Row>
        { gallery.map(image => (
          <Grid.Column key={image} width={4} style={{ padding: '1.5em 0' }}>
            <Modal trigger={<Image className='galleryImage' src={`static/images/${image}`} style={{ width: '300px', height: '80%', cursor: 'pointer', boxShadow: '-5px 5px 5px' }} centered />}>
              <Modal.Content image>
                <Image src={`static/images/${image}`} style={{ maxHeight: '500px' }} centered />
              </Modal.Content>
            </Modal>
          </Grid.Column>
        ))
        }
      </Grid.Row>
    </Grid>
  </Segment>
)

export default GallerySection
