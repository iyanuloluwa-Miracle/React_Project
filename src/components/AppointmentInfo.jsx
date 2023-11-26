import {ListGroup} from "react-bootstrap";
const AppointmentInfo = ({appointment}) => {
  return (
    <>
      <ListGroup.Item>
        <p>
          <small>Date: {appointment.aptDate}</small>
        </p>
        <p>
          <strong>First Name: {appointment.firstName}</strong>
        </p>
        <p>
          <strong>Last Name: {appointment.lastName}</strong>
        </p>
        <p>
          <strong>aptNotes: {appointment.aptDate}</strong>
        </p>
      </ListGroup.Item>
    </>
  );
};

export default AppointmentInfo;
