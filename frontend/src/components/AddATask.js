import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Dropdown from "react-bootstrap/Dropdown";
import actions from "../api";
import SeeTask from "./SeeTask";
import swal from "sweetalert";

import Modal from "react-modal";

function AddATask(props) {
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const [tasks, setTasks] = useState([]);

  async function editATask(data) {
    let res = await actions.EditAPost(data);
    let index = data.index;
    console.log(res);
    let updatedTasks = [...tasks];
    updatedTasks.splice(index, 1, data);
    setTasks(updatedTasks);
  }

  async function deleteTheTask(id, i) {
    let res = await actions.DeleteAPost(id)
    let updatedTasks = [...tasks]
    updatedTasks.splice(i, 1)
    setTasks(updatedTasks)
  }

  useEffect(() => {
    async function getTasks() {
      console.log(props.match.params.goalid, " debug 1");
      let res = await actions.getAllTasks({
        goalid: props.match.params.goalid,
      });
      if (res) {
        console.log(res);
        console.log("kittens");
        setTasks(res.data.tasks);
      } else {
        {
          swal("Sign your butt in!");
        }
      }
    }
    getTasks();
  }, []);

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
    let updatedTasks = [...tasks];
    updatedTasks.unshift(res.data.task);
    setTasks(updatedTasks);
  }
  return (
    <div>
      <section className="tanAddGoal">
        <form
          onSubmit={handleSubmit}
          style={{ padding: "80px" }}
          class="vanillaForm"
        >
          <label for="Name">Task Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
            name="Name"
          />

          <label for="Start Date">Task Start Date </label>
          <input
            onChange={(e) => setStart(e.target.value)}
            type="date"
            required
            name="Start"
          />

          <label for="End Date">Task Due Date</label>
          <input
            onChange={(e) => setEnd(e.target.value)}
            type="date"
            required
            name="End"
          />

          <label for="Description">Description</label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            required
            name="Description"
            id="descriptBox"
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
        <SeeTask {...props} tasks={tasks} deleteTheTask={deleteTheTask} editATask={editATask} />
      </section>
    </div>
  );
}

export default AddATask;
