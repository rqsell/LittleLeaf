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
{/* THE MENU */}
      <article id="theMenu">
      <ul className="hamburgerMenu" id={open ? "clickedmenu" : ""}>
        {/* <Menu> */}
        <div className="x" onClick={() => setOpen(!open)}>
          X
        </div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>Home</li>
        </Link>
        <Link to="/AddAGoal" style={{ textDecoration: "none" }}>
          <li>Add a Goal</li>
        </Link>
        <Link style={{ textDecoration: "none" }}>
          <li>Log In</li>
        </Link>
        <li>About Us</li>
        <li>Profile</li>
        {/* </Menu> */}
      </ul>
      {/* ) : null} */}
      </article>
{/* THE MENU/THE LOGO */}
      <div className="addAGoalDiv">
        <div className="goalIntro">
          <article id="logobox2">
            <img
              src="./images/Copy of Little Leaf Big Tree Logo.png"
              alt="our logo"
              id={open ? "clickedlogo" : ""}
              class="logo3"
              onClick={() => setOpen(!open)}
            />
          </article>

{/* WELCOME MESSAGES */}
          <article id="introbox">
            <h4 class="goalsintro">Welcome to your Tasks page!</h4>
            <span className="goalPageText">
              Add a task to help you achieve your goal!
              <br></br>
              The task will assist you in achieving your goal {
                goalDetail.name
              }{" "}
              in which you will {goalDetail.description} by {goalDetail.endDate}
            </span>
            </article>
            </div>
      </div>
{/* HERE'S THE TASKY STUFF! */}
<br/>
           
          <h3 className="taskyHead">Add the Tasks neccessary to achieve {goalDetail.name}</h3>
      <article className="taskArticle">

{/* ADD THE TASK (FORM) */}
        <AddATask {...props} />
{/* SEE TASK FUNX ALLOWS US TO MAP THROUGH THE TASKS IN DB */}
        <SeeTask {...props} />
{/* SHOWMYTASKS ALLOWS US TO LIST THE TASKS ON PAGE */}
        <div className="Taskss">{showMyTasks()}</div>
        </article>
        

        {/* <MyCalendar {...props} /> */}
        {/* <Fullcalendar {...props} /> */}
              
    </div>
  );
}

export default GoalDetails;
