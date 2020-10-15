import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddATask from "./AddATask";
import actions from "../api";
import swal from "sweetalert";
import Modal from "react-modal";

function SeeTask(props) {
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [index, setIndex] = useState(0);
  const [id, setId] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  async function handleSubmit(e) {
    console.log(name, start, end, status, description);

    e.preventDefault();
    props.editATask({
      name: name,
      startDate: start,
      endDate: end,
      description,
      status,
      index,
      id: id,
    });
    console.log("Editing!");
    setModalIsOpen(false);
    // console.log(props);
    // props.history.push("/movies"); // Go back to whatever route you give inside the parentheses
  }

  async function edit(each, i) {
    setModalIsOpen(true);
    setIndex(i);
    setId(each._id);
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
  console.log(tasks);
  const showTasks = () => {
    return props.tasks.map((eachTask, i) => {
      console.log(eachTask);
      return (
        <div className="goaldesc">
          <li className="eachGoalName">Task: {eachTask.name}</li>
          <p className="eachGoalDes">Description: {eachTask.description}</p>

          <div className="buttonbox">
            <button id="deletepost">Delete!</button>
            <button id="deletepost" onClick={() => edit(eachTask, i)}>
              {" "}
              Edit
            </button>
            <Modal isOpen={modalIsOpen}>
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
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  required
                  name="Description"
                />
                <br />
                {/* <label>Set Status</label> */}
                <select
                  name="status"
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option>Set Status...</option>
                  <option>Incomplete</option>
                  <option>In Progress</option>
                  <option>Complete</option>
                </select>
                <br />
                <button id="addGoalButton">Edit Task</button>
              </form>
            </Modal>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <h5 className="goalsHere"> Here we have listed your tasks</h5>
      {/* <AddATask /> */}
      <div className="showingTasks">
        {showTasks()}
        {/* <Link to={`/tasks/${tasks._id}`}> */}
      </div>
      {/* </Link> */}
    </div>
  );
}

export default SeeTask;
