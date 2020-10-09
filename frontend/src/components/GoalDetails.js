import React, { useState, useEffect } from "react";
import actions from "../api";

function GoalDetails(props) {
  const [goalDetail, setGoalDetail] = useState([]);

  // put goal id in url
  // display details on individual page

  useEffect(() => {
    async function getGoalDetails() {
      //connecting front to back end IDs
      let res = await actions.getGoalDetails(props.match.params.goalid);
      console.log(res.data.goal);
      setGoalDetail(res.data.goal);
    }
    getGoalDetails();
  }, []);
  console.log(props);

  return (
    <div>
      <h1>{goalDetail.name}</h1>
      <p>{goalDetail.description}</p>
      <p>{goalDetail.startDate}</p>
      <p>{goalDetail.endDate}</p>
    </div>
  );
}

export default GoalDetails;
