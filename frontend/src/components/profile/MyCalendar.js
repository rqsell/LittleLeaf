import React, { useEffect, useState } from "react";
import actions from "../../api";
import Fullcalendar from "../Fullcalendar"
import moment from 'moment'
// import AddToCalendar from "react-add-to-calendar";

console.log("yoyoyoyoy")

function MyCalendar(props) {

  const [events, setEvents] = useState([]);
  useEffect(() => {
    console.log('getAllMyEvents')
    async function getAllMyEvents() {
      let res = await actions.getAllMyEvents()
      console.log(res)
      let theEvents = [{ title: 'Ashtyns birthday!', date: '2021-01-19' }]
      setEvents(theEvents)

      console.log(moment('2020-10-09T15:21:55.824Z').format('MMMM Do YYYY, h:mm:ss a'))
    }
    getAllMyEvents()
  }, [])


  return (
    <div>
      <Fullcalendar events={events} />.
      {/* <AddToCalendar event={this.state.event} /> */}
    </div>
  );
}

export default MyCalendar;
