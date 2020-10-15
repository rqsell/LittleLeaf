import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Button from "react-bootstrap/Button";
// import Dropdown from "react-bootstrap/Dropdown";
// import Form from 'react-bootstrap/Form'
import { Link } from "react-router-dom";
import lilTree from "../public/images/Copy of Little Leaf Big Tree Logo.png";
import actions from "../api";
import SeeGoal from "./SeeGoal";
import swal from 'sweetalert';
// import SweetAlert from 'react-bootstrap-sweetalert';

function AddAGoal(props) {
  const [name, setName] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false);
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    async function getGoals() {
      let res = await actions.getAllGoals();
      if (res) {
        console.log(res);
        setGoals(res.data.goals);
      } else {
        {swal("Sign your butt in!")}
      }
    }
    getGoals();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    // let res = await axios.post(`http://localhost:5000/api/AddAGoal`, {

    let res = await actions.addapost({
      name: name,
      start: start,
      end,
      description,
      // goalId: props.match.params._id;
      status,
    });
    console.log(res);
    
    let updatedGoals = [...goals]
    updatedGoals.unshift(res.data.goal)
    console.log(updatedGoals)
    setGoals(updatedGoals)
    // console.log(props);
    // props.history.push("/movies"); // Go back to whatever route you give inside the parentheses
  }
  async function deleteTheGoal(id, i){
   let res = await  actions.DeleteAPost(id)
   let updatedGoals = [...goals]
   updatedGoals.splice(i, 1)
  setGoals(updatedGoals)
  }

  async function editAGoal(data){
    let res = await actions.EditAPost(data);
    let index = data.index
    console.log(res)
    let updatedGoals = [...goals]
    updatedGoals.splice(index, 1, data)
    setGoals(updatedGoals)
  }

  return (
    <div>
      <div className="addAGoalDiv">
        <div className="goalIntro">
          <article id="introbox">
            <h4 class="goalsintro">Welcome to your Goals page!</h4>
            <span className="goalPageText">
              Each goal you add and complete will take you closer to success!
              <br></br>
              Each goal may be stand-alone, or may include several related
              tasks!{" "}
            </span>
            <br></br>
            <h4 class="goalsintro">Add a New Goal to Your List!</h4>
          </article>
        </div>

        <section className="tanAddGoal">
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
            <select name="status" onChange={(e) => setStatus(e.target.value)}>
              <option>Set Status...</option>
              <option>Incomplete</option>
              <option>In Progress</option>
              <option>Complete</option>
            </select>
            <br />
            <button id="addGoalButton">Add Goal</button>
          </form>
          <p className="seeGoalP">
            <SeeGoal goals={goals} deleteTheGoal={deleteTheGoal} editAGoal={editAGoal}/>
          </p>
        </section>
      </div>
    </div>
  );
}

{
  /* <Form class="addGoalForm">
        
          <Form.Group controlId="formName">
          <Form.Label>Goal Name:</Form.Label>
          <Form.Control type="text" placeholder="Name Your Goal" onChange={e.target.value} />
          <Form.Text className="text-muted">
              Be descriptive! (:
          </Form.Text>
          </Form.Group>

          <Form.Group controlId="formStartDate">
          <Form.Control type="date" onChange={e.target.value} />
          <Form.Label>Goal Start Date:</Form.Label>
          <Form.Check type="date"/>
          </Form.Group>

          <Form.Group controlId="formEndDate">
          <Form.Control type="date" onChange={e.target.value} />
          <Form.Label>Goal Due Date:</Form.Label>
          <Form.Check type="date" />
          </Form.Group>

          <Form.Group controlId="form.ControlTextarea1">
          <Form.Control type="text" onChange={e.target.value} />
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Tell us about your Goal! "/>
          </Form.Group>

          <Form.Group controlId="form.ControlTextarea1">      
          <Form.Control as="select" onChange>
            <option>Set Status...</option>
            <option>Incomplete</option>
            <option>In Progress</option>\
            <option>Complete</option>
          </Form.Control>
          </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form> */
}

{
  /* <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Status
          </Dropdown.Toggle>
          <Dropdown.Menu onChange={e.target.value}>
            <Dropdown.Item href="#/action-1">Incomplete</Dropdown.Item>
            <Dropdown.Item href="#/action-2">In progress</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Complete</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */
}

export default AddAGoal;
