import React from "react";
import Snooze from "../../../../components/slackInfo/Snooze";

const Dashboard = ({ slackState, setSlackState }) => {
  return (
    <>
      <div style={{ marginLeft: "25%", marginTop: "5%" }}>
        <h1>Dashboard</h1>
        <Snooze slackState={slackState} setSlackState={setSlackState} />
      </div>
    </>
  );
};

export default Dashboard;
