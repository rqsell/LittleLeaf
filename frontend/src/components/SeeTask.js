import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddATask from "./AddATask";
import actions from "../api";
function SeeTask(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getTasks() {
      let res = await actions.getAllTasks({
        taskid: props.match.params.goalid,
      });
      if (res) {
        console.log(res);
        console.log("kittens");
        setTasks(res.data.tasks);
      } else {
        alert("res is undefined. Sign your butt in!");
      }
    }
    getTasks();
  }, []);
  console.log(tasks);
  const showTasks = () => {
    return tasks?.map((eachTask) => {
      console.log(eachTask);
      return (
        <div>
          <li class="eachTaskName">Task: {eachTask.name}</li>
          <p class="eachTaskDes">Description: {eachTask.description}</p>
          </div>
      )
    });
  };
  return (
    <div>
      <h1>Tasks</h1>
      {/* <AddATask /> */}
      {showTasks()}
      {/* <Link to={`/tasks/${tasks._id}`}> */}

      {/* </Link> */}
    </div>
  );
}

export default SeeTask;
