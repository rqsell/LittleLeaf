import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddATask from "./AddATask";
import actions from "../api";
import swal from 'sweetalert'

function SeeTask(props) {
  const [tasks, setTasks] = useState([]);

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
        { swal("Sign your butt in!") }
      }
    }
    getTasks();
  }, []);
  console.log(tasks);
  const showTasks = () => {
    return tasks?.map((eachTask) => {
      console.log(eachTask);
      return (
        <div className="goaldesc">
          <li className="eachGoalName">Task: {eachTask.name}</li>
          <p className="eachGoalDes">Description: {eachTask.description}</p>

          <div className="buttonbox">
            <button id="deletepost">Delete!</button>
            <button id="deletepost"> Edit</button>
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
