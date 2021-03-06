import axios from "axios";
import baseURL from "./config.js";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

console.log(baseURL);

const token = window.localStorage.getItem("token");
let t = token ? token.substring(0, 15) : null;

console.log("TOKEN", t, "NODE_ENV", process.env.NODE_ENV);

let resetHead = () => {
  return {
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  };
};

const API = axios.create({
  withCredentials: true,
  baseURL,
  headers: { Authorization: `Bearer ${token}` },
});

const actions = {
  getAllMyEvents: async () => {
    return await API.get(`/getAllEvents`, resetHead());
  },

  getUser: async () => {
    return await API.get(`/user`, resetHead());
  },
  signUp: async (user) => {
    let res = await API.post("/signup", user, resetHead());
    window.localStorage.setItem("token", res?.data?.token);
    return res;
  },
  logIn: async (user) => {
    let res = await API.post("/login", user, resetHead());
    window.localStorage.setItem("token", res?.data?.token);
    return res;
  },
  logOut: async () => {
    window.localStorage.removeItem("token");
    return await API.get("/logout", resetHead());
  },
  addapost: async (data) => {
    return await API.post("/AddAPost", data, resetHead());
  },
  DeleteAPost: async (id) => {
    return await API.post("/DeleteAPost", { id }, resetHead());
  },
  EditAPost: async (data) => {
    return await API.post("/EditAPost", data, resetHead());
  },
  EditATask: async (data) => {
    return await API.post("/EditAPost", data, resetHead());
  },
  getAllGoals: async (goal) => {
    return await API.get(`/GetAllGoal`, resetHead());
  },
  getGoalDetails: async (goalid) => {
    return await API.get(`/GetGoals/${goalid}`, resetHead());
  },
  getTasks: async (goalid) => {
    return await API.get(`/GetTasksDB/${goalid}`, resetHead());
  },
  AddTaskDB: async (data) => {
    return await API.post("/AddTaskDB", data, resetHead());
  },
  getAllTasks: async (tasks) => {
    console.log(tasks, " debug 2");
    return await API.post("/getAllTasks", tasks, resetHead());
  },
};

API.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(error?.response?.data);
    if (error?.response?.data.name !== "JsonWebTokenError")
      NotificationManager.error(String(error?.response?.data.message));
    else NotificationManager.error("Please signup or login");
  }
);

export default actions;
