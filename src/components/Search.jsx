import { FormControl, InputGroup, Dropdown } from "react-bootstrap";
import { BsCheck2 } from "react-icons/bs";

const DropDown = ({sortBy, onSortByChange, orderBy, onQueryChange}) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" title="Sort">
          Sort
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={() => onSortByChange("firstName") && <BsCheck2 className="float-end"/>}>First Name{((sortBy == 'firstName')}</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
const Search = ({
  query,
  onQueryChange,
  sortBy,
  onSortByChange,
  orderBy,
  onOrderByChange,
}) => {
  return (
    <>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search"
          onChange={(event) => {
            onQueryChange(event.target.value);
          }}
          value={query}
        />
        <DropDown
          sortBy={sortBy}
          onSortByChange={(mySort) => onSortByChange(mySort)}
          orderBy={orderBy}
          onOrderByChange={(myOrder) => onOrderByChange(myOrder)}
        />
      </InputGroup>
    </>
  );
};

export default Search;
