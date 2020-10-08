import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

function AddAGoal(props) {
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  //
  async function handleSubmit(e) {
    e.preventDefault();
    let res = await axios.post(`http://localhost:5000/AddAGoal`, {
      name,
      start,
      end,
      description,
      status,
    });
    console.log(res);
    console.log(props);
    // props.history.push("/movies"); // Go back to whatever route you give inside the parentheses
  }
  return (
    <div>
      <form onSubmit={handleSubmit} style={{ padding: "80px" }}>
        <label for="Name"> Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="Name"
        />

        <label for="Start Date"> Start Date </label>
        <input
          onChange={(e) => setStart(e.target.value)}
          type="text"
          name="Start"
        />

        <label for="End Date"> End Date</label>
        <input
          onChange={(e) => setEnd(e.target.value)}
          type="text"
          name="End"
        />

        <label for="Description"> Description </label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="Description"
        />
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Status
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Incomplete</Dropdown.Item>
            <Dropdown.Item href="#/action-2">In progress</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Complete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <button>Add Goal</button>
      </form>
    </div>
  );
}

export default AddAGoal;
