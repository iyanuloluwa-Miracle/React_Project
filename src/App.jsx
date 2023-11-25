import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsCalendar2Check } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointments";
function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center fw-light mt-3">
              <BsCalendar2Check />
              Appointment
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <AddAppointment/>
        </Row>

        <Row className="justify-content-center">
          <Col md="4">
            <Search />
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default App;
