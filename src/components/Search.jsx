import { FormControl, InputGroup, Dropdown } from "react-bootstrap";

const DropDown = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
const Search = () => {
  return (
    <>
      <InputGroup className="mb-3">
        <FormControl placeholder="Search"></FormControl>
        <DropDown />
      </InputGroup>
    </>
  );
};

export default Search;
