import React, { Component, Fragment, useState, useEffect } from "react";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import TheContext from "./TheContext";
import Home from "./components/Home";
import NotFound from "./components/404/NotFound.js";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import Profile from "./components/profile/Profile";
import GoalDetails from "./components/GoalDetails";
import AddAGoal from "./components/AddAGoal";
import actions from "./api/index";
import GoogleAuth from "./components/auth/GoogleAuth";
import GoogleAuthLogin from "./components/auth/GoogleAuthLogin";
import "bootstrap/dist/css/bootstrap.min.css";
import AddATask from "./components/AddATask";
import MyCalendar from "./components/profile/MyCalendar";
// import "bootstrap/scss/bootstrap";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const App = () => {
  let [user, setUser] = useState(null);

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
        {!user && <GoogleAuth setUser={setUser} class="googleAuth" />}
        {!user && <GoogleAuthLogin setUser={setUser} class="googleAuth" />}
      </div>

      <NotificationContainer />
    </TheContext.Provider>
  );
};
export default App;
