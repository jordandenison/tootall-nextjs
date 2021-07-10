import { Card, Grid, Header, Image, Segment } from 'semantic-ui-react'

import equipment from '../../data/equipment'

const EquipmentSection = () => (
  <Segment id='equipment-anchor' style={{ margin: '0', padding: '0 0 100px 0' }}>
    <Header as='h1' textAlign='center' style={{ margin: '100px', fontSize: '3em' }}>This equipment is available for bare rental by the hour.</Header>
    <Header as='h2' textAlign='center' style={{ fontSize: '2em', marginBottom: '100px' }}>Please contact me for more details.</Header>
    <Grid columns={2} stackable centered>
      <Grid.Row>
        { equipment.map(equipmentItem => (
          <Grid.Column key={equipmentItem.name} width={8} style={{ padding: '1.5em 0' }}>
            <Card centered style={{ width: '80%' }}>
              <Image src={`static/images/equipment/${equipmentItem.image}`} style={{ height: '400px' }} />
              <Card.Content>
                <Card.Header>{ equipmentItem.name }</Card.Header>
                <Card.Description>{ equipmentItem.description }</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))
        }
      </Grid.Row>
    </Grid>
  </Segment>
)

export default EquipmentSection
