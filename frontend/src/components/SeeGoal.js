import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import actions from "../api";
import GoalDetail from "./GoalDetails";
// import swal from '@sweetalert/with-react'

function SeeGoal(props) {
  const [goals, setGoals] = useState([]);

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

  const showGoals = () => {
    return goals.map((eachGoal) => {
      return (
        <div className="goaldesc">
          <Link to={`/goals/${eachGoal._id}`}>
            <li className="eachGoalName">Goal: {eachGoal.name}</li>
            <p className="eachGoalDes">Description: {eachGoal.description}</p>
          </Link>
          <div className="buttonbox">
            <button
              id="deletepost"
              onClick={() => actions.DeleteAPost(eachGoal._id)}
            >
              Delete!
            </button>
            <button id="deletepost"> Edit</button>
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
