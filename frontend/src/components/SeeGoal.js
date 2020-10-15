import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import actions from "../api";
import GoalDetail from "./GoalDetails";
import swal from "sweetalert";
import Modal from "react-modal";

function SeeGoal(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [index, setIndex] = useState(0);
  const [id, setId] = useState("");

  async function handleSubmit(e) {
    console.log(name, start, end, status, description);
    e.preventDefault();
    props.editAGoal({
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

  const showGoals = () => {
    return props.goals.map((eachGoal, i) => {
      return (
        <div className="goaldesc">
        <br/>
          <Link to={`/goals/${eachGoal._id}`}>
            <li className="eachGoalName">Goal: {eachGoal.name}</li>
            <li className="eachGoalDes">Description: {eachGoal.description}</li>
            <li className="eachGoalDes">Status: {eachGoal.status}</li>
          </Link>
          
          <div className="buttonbox">
            <button
              id="deletepost"
              onClick={() => props.deleteTheGoal(eachGoal._id, i)}
            >
              Delete!
            </button>
            <button id="deletepost" onClick={() => edit(eachGoal, i)}>
              {" "}
              Edit
            </button>
            
            <Modal isOpen={modalIsOpen}>
              <form
                onSubmit={handleSubmit}
                style={{ padding: "80px" }}
                class="vanillaForm"
              >
                <label for="Name">Goal Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                  name="Name"
                />
                <label for="Start Date">Goal Start Date </label>
                <input
                  onChange={(e) => setStart(e.target.value)}
                  type="date"
                  required
                  name="Start"
                />
                <label for="End Date">Goal Due Date</label>
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
                <button id="addGoalButton">Edit Goal</button>
              </form>
            </Modal>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <h5 className="goalsHere">Here, we've listed your Goals!</h5>
      {showGoals()}
    </div>
  );
}

export default SeeGoal;
