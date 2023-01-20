import React from 'react'
import { Container, Card, ListGroup, Badge, Form, Button, ButtonGroup } from 'react-bootstrap'

const HomePage = () => {
  return (
    <Container as="div">
        <Card className='m-5 p-3'>
            <Card.Header className="d-flex justify-content-between align-items-start">
                <h5>List of To-Do's :</h5>
            <Badge bg="primary" pill>4</Badge>
            </Card.Header>
            <Button variant="outline-dark">Add new item</Button>
            <ButtonGroup>
                <Button variant="outline-secondary">select all</Button>
                <Button variant="outline-danger">Delete</Button>
            </ButtonGroup>
            <ListGroup variant="flush" as="ol" >

                {/* <ListGroup.Item as="li" action className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio...
                    </div>
                </ListGroup.Item> */}
                
                <ListGroup.Item as="li" action className="d-flex align-items-start"> 
                    <Form>
                        <Form.Check type='checkbox'
                        label={(
                            <div className="ms-2 me-auto">
                            <div className="fw-bold">Subheading</div>
                            You have 3 checklist items here.
                            </div>
                        )}/>
                    </Form>
                </ListGroup.Item>

                <ListGroup.Item as="li" action> 
                    <Form>
                    <Form.Check 
                    type='checkbox'
                    label="Porta ac consectetur ac"
                    />
                    </Form>
                </ListGroup.Item>
                <ListGroup.Item as="li" action> Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item as="li" action> Vestibulum at eros</ListGroup.Item>

            </ListGroup>
        </Card>        
    </Container>
  )
}

export default HomePage