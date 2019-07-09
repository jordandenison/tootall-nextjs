import { Card, Grid, Header, Image, Segment } from 'semantic-ui-react'

import equipment from 'data/equipment'

const EquipmentSection = () => (
  <Segment id='equipment-anchor' style={{ margin: '0em', padding: '0em' }}>
    <Header as='h1' textAlign='center' style={{ margin: '100px', fontSize: '3em' }}>Equipment Available for Rent</Header>
    <Grid columns={2} stackable centered>
      <Grid.Row>
        { equipment.map(equipmentItem => (
          <Grid.Column key={equipmentItem.name} width={8} style={{ padding: '1.5em 0' }}>
            <Card centered style={{ width: '80%' }}>
              <Image src={`static/images/equipment/${equipmentItem.image}`} size='huge' />
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
