import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import actions from "../api";

function AddATask(props) {
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);
  console.log(props);
  async function handleSubmit(e) {
    e.preventDefault();

    console.log(status);

    let res = await actions.AddTaskDB({
      name,
      start,
      end,
      description,
      goalId: props.match.params.goalid,
      status,
    });
    console.log(res);
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ padding: "80px" }}
        class="vanillaForm"
      >
        <label for="Name">Task Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="Name"
        />

        <label for="Start Date">Task Start Date </label>
        <input
          onChange={(e) => setStart(e.target.value)}
          type="date"
          name="Start"
        />

        <label for="End Date">Task Due Date</label>
        <input
          onChange={(e) => setEnd(e.target.value)}
          type="date"
          name="End"
        />

        <label for="Description">Description</label>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          name="Description"
        />
        <br />
        {/* <label>Set Status</label> */}
        <select name="status" onChange={(e) => setStatus(e.target.value)}>
          <option>Set Status...</option>
          <option>Incomplete</option>
          <option>In Progress</option>
          <option>Complete</option>
        </select>
        <br />
        <button id="addGoalButton">Add Task</button>
      </form>
    </div>
  );
}

export default AddATask;
