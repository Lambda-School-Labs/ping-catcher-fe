import React from "react";
import eventMock from "../mockData/events.json";
import PingCard from "./PingCard";

const EventCard = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexFlow: "row wrap",
        width: "60vw",
      }}
    >
      {eventMock.map((event, idx) => (
        <PingCard key={idx} {...event} />
      ))}
    </div>
  );
};

export default EventCard;
