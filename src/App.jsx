import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsCalendar2Check } from "react-icons/bs";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointments";
import AppointmentInfo from "./components/AppointmentInfo";

function App() {
  const [appointmentList, setAppointmentList] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("firstName");
  const [orderBy, setOrderBy] = useState("asc");

  const filteredAppointments = appointmentList
    .filter((item) => {
      return (
        item.firstName.toLowerCase().includes(query.toLowerCase()) ||
        item.lastName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      );
    })
    .sort((a, b) => {
      let order = orderBy === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order;
    });

  const fetchData = useCallback(() => {
    fetch("./data.json")
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
          <AddAppointment
            onSendAppointment={(myAppointment) =>
              setAppointmentList([...appointmentList, myAppointment])
            }
            lastId={appointmentList.reduce(
              (max, item) => (Number(item.id) > max ? Number(item.id) : max), 0
            )}
          />
        </Row>

        <Row className="justify-content-center">
          <Col md="4">
            <Search
              query={query}
              onQueryChange={(myQuery) => setQuery(myQuery)}
              orderBy={orderBy}
              onOrderByChange={(mySort) => setOrderBy(mySort)}
              sortBy={sortBy}
              onSortByChange={(mySort) => setSortBy(mySort)}
            />
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md="8">
            <Card className="mb-3">
              <Card.Header>Appointment</Card.Header>
              <ListGroup variant="flush">
                {filteredAppointments.map((appointment) => (
                  <AppointmentInfo
                    key={appointment.id}
                    appointment={appointment}
                    onDeleteAppointment={(appointmentId) =>
                      setAppointmentList(
                        appointmentList.filter(
                          (appointment) => appointment.id !== appointmentId
                        )
                      )
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
