import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsCalendar2Check } from "react-icons/bs";
import { Button, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <h1 className="text-center fw-light mt-3">
          <BsCalendar2Check/>
           Appointment
        </h1>
        <div className="d-grid gap-2">
          <Button size="sm" >
            Button as link
          </Button>

        </div>
       

        <Row>
          <Col></Col>
        </Row>
        <Row md={3}>
          <Col>
            <h2>Hello Bootstrap</h2>
          </Col>
        </Row>
        <Row md={3}>
          <Col>
            <h2>Hello Bootstrap</h2>
          </Col>
        </Row>
        <Row md={3}>
          <Col>
            <h2>Hello Bootstrap</h2>
          </Col>
        </Row>
        <Row md={3}>
          <Col>
            <h2>Hello Bootstrap</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
