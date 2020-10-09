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
          <li>{eachGoal.name}</li>
        </Link>
      );
    });
  };
  return <div>{showGoals()}</div>;
}

export default SeeGoal;
