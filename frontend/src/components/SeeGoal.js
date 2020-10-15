import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import actions from "../api";
import GoalDetail from "./GoalDetails";
import swal from "sweetalert";
import Modal from "react-modal";

function SeeGoal(props) {
  const [goals, setGoals] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    async function getGoals() {
      let res = await actions.getAllGoals();
      if (res) {
        console.log(res);
        setGoals(res.data.goals);
      } else {
        alert("res is undefined. Sign your butt in!");
      }
    }
    getGoals();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    let res = await actions.EditAPost({
      name: name,
      start: start,
      end,
      description,
      status,
    });
    console.log("Editing!");
    // console.log(props);
    // props.history.push("/movies"); // Go back to whatever route you give inside the parentheses
  }
  const showGoals = () => {
    return goals.map((eachGoal) => {
      return (
        <div className="goaldesc">
          <Link to={`/goals/${eachGoal._id}`}>
            <li className="eachGoalName">Goal: {eachGoal.name}</li>
            <p className="eachGoalDes">Description: {eachGoal.description}</p>
            <p className="eachGoalDes">status: {eachGoal.status}</p>
          </Link>
          <div className="buttonbox">
            <button
              id="deletepost"
              onClick={() => actions.DeleteAPost(eachGoal._id)}
            >
              Delete!
            </button>
            <button id="deletepost" onClick={() => setModalIsOpen(true)}>
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
                <button
                  id="addGoalButton"
                  onClick={() => setModalIsOpen(!modalIsOpen)}
                >
                  Edit Goal
                </button>
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
