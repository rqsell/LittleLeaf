import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import actions from '../api'
function SeeTask(props){
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        async function getTasks() {
          let res = await actions.getAllTasks();
          if (res) {
            console.log(res);
            setTasks(res.data);
          } else {
            alert("res is undefined. Sign your butt in!");
          }
        }
        getTasks();
      }, []);

    const showTasks = () => {
        return tasks.map((eachTask) => {
            console.log(eachTask)
          return (
            <Link to={`/tasks/${eachTask._id}`}>
              <li class="eachTaskName">Task: {eachTask.name}</li>
              <p class="eachTaskDes">Description: {eachTask.description}</p>
            </Link>
          );
        });
      };
    return (
        <div>
        <h1>stuff</h1>
            {showTasks()}
        </div>
    );
}

export default SeeTask;