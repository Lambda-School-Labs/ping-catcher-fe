import React, { useEffect } from "react";
import Axios from "axios";
import Button from "@material-ui/core/Button";

const Snooze = ({ slackState, setSlackState }) => {
  const token = slackState?.authed_user?.access_token;
  const minutes = 5;
  const handleClick = (e) => {
    e.preventDefault();

    Axios.get(
      `https://slack.com/api/dnd.setSnooze&token=${token}&num_minutes=${minutes}`
    )
      //console.logs snooze response from slack
      .then((res) => console.log(res.data))
      .catch((err) => console.log("error getting snooze", err));
  };
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Snooze 5 mins
      </Button>
    </div>
  );
};

export default Snooze;
