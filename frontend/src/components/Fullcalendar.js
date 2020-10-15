import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

export default class DemoApp extends React.Component {
  render() {
    return (
      <div>
        <article id="introbox">
          <h4 class="goalsintro">Welcome to your Calendar page!</h4>
          <span className="goalPageText">
            See your goals and tasks laid organized by your chosen dates!
          </span>
        </article>
        <br/>
        <article id="cal">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={this.props.events}
          
        />
        </article>
      </div>
    );
  }
}
