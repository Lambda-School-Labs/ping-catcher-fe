import React, { useState, useEffect } from "react";
import axios from "axios";
import PingCard from "./PingCard";

const SlackEvents = () => {
  const [event, setEvent] = useState();

  useEffect(() => {
    axios
      .get("https://ping-catcher-be.herokuapp.com/event")

      .then((response) => {
        const eventResponse = response.data.map((item, i) => {
          return (
            <PingCard
              i={i}
              text={item.text}
              type={item.type}
              team={item.team}
            />
          );
        });
        setEvent(eventResponse);
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return <div>{event}</div>;
};

export default SlackEvents;
