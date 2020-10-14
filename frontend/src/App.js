import React, { Component, Fragment, useState, useEffect } from "react";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import TheContext from "./TheContext";
import Home from "./components/Home";
import { Link } from "react-router-dom";
import NotFound from "./components/404/NotFound.js";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/profile/Login";
import Profile from "./components/profile/Profile";
import GoalDetails from "./components/GoalDetails";
import AddAGoal from "./components/AddAGoal";
import actions from "./api/index";
import GoogleAuth from "./components/auth/GoogleAuth";
import GoogleAuthLogin from "./components/auth/GoogleAuthLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import AddATask from "./components/AddATask";
import MyCalendar from "./components/profile/MyCalendar";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
const App = () => {
  let [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    async function getUser() {
      let user = await actions.getUser();
      console.log("user is", user);
      setUser(user?.data);
    }
    getUser();
  }, []);
  const logOut = async () => {
    let res = await actions.logOut();
    setUser(null);
  };
  const history = useHistory();
  return (
    <TheContext.Provider value={{ history, user, setUser }}>
      <nav>
        <img
          src="./images/Copy of Little Leaf Big Tree Logo.png"
          alt="our logo"
          id={open ? "clickedlogo" : ""}
          class="logo"
          onClick={() => setOpen(!open)}
        />

        <ul className="hamburgerMenu" id={open ? "clickedmenu" : ""}>
          <div className="x" onClick={() => setOpen(!open)}>
            X
          </div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/AddAGoal" style={{ textDecoration: "none" }}>
            <li>Add a Goal</li>
          </Link>
          <Link to="/MyCalendar" style={{ textDecoration: "none" }}>
            <li>My Calendar</li>
          </Link>
        </ul>
      </nav>

      {user?.email}
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route
          exact
          path="/sign-up"
          render={(props) => <SignUp {...props} setUser={setUser} />}
        />
        <Route
          exact
          path="/log-in"
          render={(props) => <LogIn {...props} setUser={setUser} />}
        />
        <Route
          exact
          path="/profile"
          render={(props) => <Profile {...props} />}
        />
        <Route
          exact
          path="/AddAGoal"
          render={(props) => <AddAGoal {...props} />}
        />
        <Route
          exact
          path="/goals/:goalid"
          render={(props) => <GoalDetails {...props} />}
        />
        <Route
          exact
          path="/AddATask"
          render={(props) => <AddATask {...props} />}
        />
        <Route
          exact
          path="/MyCalendar"
          render={(props) => <MyCalendar {...props} />}
        />
      </Switch>
      <div id="google-auth">
        {!user && <GoogleAuth setUser={setUser} className="googleAuth" />}
        {!user && <GoogleAuthLogin setUser={setUser} className="googleAuth" />}
      </div>
      <NotificationContainer />
    </TheContext.Provider>
  );
};
export default App;
