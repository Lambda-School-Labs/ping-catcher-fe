import React, { useState, useEffect } from "react";
import axios from "axios";

const SlackEvents = () => {
  const [event, setEvent] = useState();

  useEffect(() => {
    axios
      .get("https://ping-catcher-be.herokuapp.com/event")
      .then((response) =>
        setEvent(
          response.data.map((item) => {
            return (
              <h1>
                {item.text}, {item.type}, {item.team}
              </h1>
            );
          })
        )
      )

      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>{event}</h1>
    </div>
  );
};

export default SlackEvents;
