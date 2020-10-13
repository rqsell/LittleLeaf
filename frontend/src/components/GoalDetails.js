import React, { useState, useEffect } from "react";
import actions from "../api";
import MyCalendar from "./profile/MyCalendar";
import AddATask from "./AddATask";
import SeeTask from "./SeeTask.js";
import Fullcalendar from "./Fullcalendar";

function GoalDetails(props) {
  const [goalDetail, setGoalDetail] = useState([]);
  const [tasks, setTasks] = useState([]);

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
      
      <h3 className="taskyHead">Add the Tasks neccessary to achieve {goalDetail.name}</h3>
      <article className="taskArticle">
        <AddATask {...props} />
        <SeeTask {...props} />
        <div className="Taskss">{showMyTasks()}</div>
        </article>

      {/* <MyCalendar {...props} /> */}
      {/* <Fullcalendar {...props} /> */}

    </div>
  );
}

export default GoalDetails;
