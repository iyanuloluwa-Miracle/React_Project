import {Button, ListGroup} from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";




const AppointmentInfo = ({appointment, onDeleteAppointment}) => {
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
        <Button onClick={() => onDeleteAppointment(appointment.id)} size="sm" variant="danger"><RiDeleteBin6Line/>Delete</Button>
      </ListGroup.Item>
    </>
  );
};

export default AppointmentInfo;
