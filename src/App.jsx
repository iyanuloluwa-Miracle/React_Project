import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsCalendar2Check } from "react-icons/bs";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointments";
// import appointmentList from '../data.json'
import AppointmentInfo from "./components/AppointmentInfo";
import { useCallback, useEffect, useState } from "react";

function App() {
  let [appointmentList, setAppointmentList] = useState([]);

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => {
        setAppointmentList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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
          <AddAppointment />
        </Row>

        <Row className="justify-content-center">
          <Col md="4">
            <Search />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md="8">
            <Card className="mb-3">
              <Card.Header>Appointment</Card.Header>
              <ListGroup variant="flush">
                {appointmentList.map((appointment) => (
                  <AppointmentInfo
                    key={appointment.id}
                    appointment={appointment}
                    onDeleteAppointment={appointmentId =>
                      setAppointmentList(appointmentList.filter(
                        appointment => appointment.id !== appointmentId
                      ))
                    }
                  />
                ))}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
