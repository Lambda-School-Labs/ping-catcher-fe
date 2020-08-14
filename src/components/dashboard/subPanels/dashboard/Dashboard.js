import React from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import Snooze from "../../../slackInfo/snooze";
import EventCard from "../../../EventCard";

const Dashboard = ({ slackState, setSlackState, darkMode, setDarkMode }) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div
      style={
        matches ? { marginLeft: "25%", marginTop: "5%" } : { display: "none" }
      }
    >
      <h1>Dashboard</h1>
      <Snooze slackState={slackState} setSlackState={setSlackState} />
      <EventCard />
    </div>
  );
};

export default Dashboard;
