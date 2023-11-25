import { Form, Col, Row, Card, Button } from "react-bootstrap";

const AddAppointment = () => {
  return (
    <>
      <Col md="8">
        <Card className="mb-3">
          <Card.Header>Add Appointment</Card.Header>
          <Card.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>
              </Row>

              <Form.Group>
                <Form.Label>Appointment Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Appointment Time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Comments</Form.Label>
                <Form.Control as="textarea" placeholder="Comments" />
              </Form.Group>

              <Button variant="primary">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default AddAppointment;
