import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import actions from "../api";
import GoalDetail from "./GoalDetails";

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
        <Link to={`/goals/${eachGoal._id}`}>
          <li class="eachGoalName">Goal: {eachGoal.name}</li>
          <p class="eachGoalDes">Description: {eachGoal.description}</p>
        </Link>
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
