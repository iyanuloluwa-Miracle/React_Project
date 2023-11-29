import React from "react";
import { FormControl, InputGroup, Dropdown, DropdownDivider } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const DropDown = ({ sortBy, onSortByChange, orderBy, onOrderByChange }) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" title="Sort">
          Sort
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            href="#/action-1"
            onClick={() => onSortByChange("firstName")}
          >
            First Name {sortBy === "firstName" && <FaCheck className="float-end" />}
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-1"
            onClick={() => onSortByChange("lastName")}
          >
            Last Name {sortBy == "lastName" && <FaCheck className="float-end" />}
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-1"
            onClick={() => onSortByChange("aptDate")}
          >
            Date {sortBy == "aptDate" && <FaCheck className="float-end" />}
          </Dropdown.Item>

          <DropdownDivider/>

          <Dropdown.Item
            href="#"
            onClick={() => onOrderByChange("asc")}
          >
            ASC {orderBy == "asc" && <FaCheck className="float-end" />}
          </Dropdown.Item>

          <Dropdown.Item
            href="#"
            onClick={() => onOrderByChange("desc")}
          >
            DSC {orderBy == "desc" && <FaCheck className="float-end" />}
          </Dropdown.Item>
          
          
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
        <DropDown sortBy={sortBy} onSortByChange={(mySort) => onSortByChange(mySort)} />
      </InputGroup>
    </>
  );
};

export default Search;
