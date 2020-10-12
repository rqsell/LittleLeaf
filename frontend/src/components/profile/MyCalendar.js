import React, { useState } from "react";
import Calendar from "react-calendar";

// import AddToCalendar from "react-add-to-calendar";

console.log("yoyoyoyoy")

function MyCalendar(props) {
  
  const [date, setDate] = useState();
 
  const handleChange= (newDate) => {

    setDate(newDate)
      console.log(newDate)
  }
  console.log(`to go the db atn update goal with id = ${props.match.params.goalid} with`, date )

  return (
    <div>
      <Calendar onChange={handleChange} value={date}/>.
      {/* <AddToCalendar event={this.state.event} /> */}
    </div>
  );
}

export default MyCalendar;
