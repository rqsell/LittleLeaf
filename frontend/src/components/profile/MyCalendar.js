import React, { useEffect, useState } from "react";
import actions from "../../api";
import Fullcalendar from "../Fullcalendar";
import moment from "moment";
// import AddToCalendar from "react-add-to-calendar";
console.log("yoyoyoyoy");
function MyCalendar(props) {
  const [events, setEvents] = useState([]);
  let theEvents = [];
  useEffect(() => {
    console.log("getAllMyEvents");
    async function getAllMyEvents() {
      let res = await actions.getAllMyEvents();
      console.log(res);

      res.data.goals.map((eachevent) => {
        theEvents.push({
              title: eachevent.name,
              date: moment(eachevent.startDate).format("YYYY-MM-DD")
              })
      })
      res.data.tasks.map((eachevent) => {
        theEvents.push({
              title: eachevent.name,
              date: moment(eachevent.startDate).format("YYYY-MM-DD")
              })
      })

      // for(let i = 0; i<res.data.goals.length; i++){
      //   let eachevent=res.data.goals[i]
      //   theEvents.push(
      //     {
      //     title: eachevent.name,
      //     date: moment(eachevent.startDate).format("YYYY-MM-DD")
      //     }
      //   )
      // }

      // for(let i = 0; i<res.data.tasks.length; i++){
      //   let eachevent=res.data.tasks[i]
      //   theEvents.push(
      //     {
      //     title: eachevent.name,
      //     date: moment(eachevent.startDate).format("YYYY-MM-DD")
      //     }
      //   )
      // }
    
      setEvents(theEvents);
      console.log(
        moment("2020-10-09T15:21:55.824Z").format("YYYY-MM-DD")
      );
      // allEvents.map((eachevent) => {
      //   return theEvents.push({
      //     title: eachevent.name,
      //     date: moment(eachevent.startDate).format("YYYY-MM-DD"),
      //   });
    }
    getAllMyEvents();
  }, []);
  
  return (
    <div>
      <Fullcalendar events={events} />

      {/* <AddToCalendar event={this.state.event} /> */}
    </div>
  );
}
export default MyCalendar;
