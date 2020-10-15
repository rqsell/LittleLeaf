import React, { useState, useEffect } from "react";
import actions from "../api";
import MyCalendar from "./profile/MyCalendar";
import AddATask from "./AddATask";
import SeeTask from "./SeeTask.js";
import { Link } from "react-router-dom";
import Fullcalendar from "./Fullcalendar";

function GoalDetails(props) {
  const [goalDetail, setGoalDetail] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  // put goal id in url
  // display details on individual page

  useEffect(() => {
    async function getGoalDetails() {
      //connecting front to back end IDs
      let res = await actions.getGoalDetails(props.match.params.goalid);
      console.log(res.data.goal);
      setGoalDetail(res.data.goal);

      let res2 = await actions.getTasks(props.match.params.goalid);
      console.log(res2);
      // console.log(res2.data.tasks)
      // setTasks(res2.data.tasks)
    }
    getGoalDetails();
  }, []);
  console.log(props);

  const showMyTasks = () => {
    return tasks.map((eachTask) => {
      return <li>{eachTask.name}</li>;
    });
  };

  return (
    <div>
      {/* WELCOME MESSAGES */}
      <article id="introbox">
        <h4 class="goalsintro">Welcome to your Tasks page!</h4>
        <span className="goalPageText">
          Add tasks to help you achieve your goal!
          <br></br>
          The task(s) will assist you in achieving your goal: {goalDetail.name}
          {/* in which you will {goalDetail.description} by {goalDetail.endDate} */}
        </span>
        <br></br>
        <h4 class="goalsintro">Add a New Task to Your List!</h4>
      </article>
      <section className="tanAddGoal">
        <AddATask {...props} />

        <SeeTask {...props} />
      </section>
      {/* <div className="Taskss">{showMyTasks()}</div> */}
      {/**Update end dates onChange of calandar */}

      {/* <MyCalendar {...props} /> */}
      {/* <Fullcalendar {...props} /> */}
    </div>
  );
}
export default GoalDetails;
