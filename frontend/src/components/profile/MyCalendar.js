import React, { useEffect, useState } from "react";
import actions from "../../api";
import Fullcalendar from "../Fullcalendar";
import moment from "moment";
// import AddToCalendar from "react-add-to-calendar";
console.log("yoyoyoyoy");
function MyCalendar(props) {
  const [events, setEvents] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  let theEvents = [];
  useEffect(() => {
    console.log("getAllMyEvents");
    async function getAllMyEvents() {
      let res = await actions.getAllMyEvents();
      console.log(res);

      setAllEvents(res.data.goals);
      setEvents(theEvents);
      console.log(
        moment("2020-10-09T15:21:55.824Z").format("MMMM Do YYYY, h:mm:ss a")
      );
    }
    getAllMyEvents();
  }, []);
  allEvents.map((eachevent) => {
    return theEvents.push({
      title: eachevent.name,
      date: moment(eachevent.startDate).format("MMMM Do YYYY, h:mm:ss a"),
    });
  });
  console.log(theEvents);
  return (
    <div>
      <Fullcalendar events={events} />

      {/* <AddToCalendar event={this.state.event} /> */}
    </div>
  );
}
export default MyCalendar;
