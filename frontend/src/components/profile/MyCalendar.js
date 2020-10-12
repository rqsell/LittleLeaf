import React, { useState } from "react";
import Calendar from "react-calendar";
import onChange from "react-calendar";
import onClickDay from "react-calendar";
import AddToCalendar from "react-add-to-calendar";

function MyCalendar(props) {
  const [newDate, setNewDate] = useState();
  const [newEvent, setNewEvent] = useState();
  onChange = (date) => this.setState({ date });
  // onClickDay =

  class Example extends React.Component {
    static displayName = "Example";
    state = {
      event: {
        title: "Sample Event",
        description: "This is the sample event provided as an example only",
        location: "Portland, OR",
        startTime: "2016-09-16T20:15:00-04:00",
        endTime: "2016-09-16T21:45:00-04:00",
      },
    };
  }

  return (
    <div>
      <Calendar onChange={this.onChange} value={this.state.date} />
      <AddToCalendar event={this.state.event} />
    </div>
  );
}

export default Calendar;
