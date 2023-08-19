import React from "react";
import TurfHeader from "./TurfHeader";
import PlayerEventCard from "./PlayerEventCard";

const PlayerEvent = () => {
  return (
    <div className="p-4 md:px-24">
      <TurfHeader title="Event" linkTo="see more" />

      <div className="flex flex-wrap my-4">
        <PlayerEventCard />
        <PlayerEventCard />
        <PlayerEventCard />
        <PlayerEventCard />
        <PlayerEventCard />
        <PlayerEventCard />
        <PlayerEventCard />
        <PlayerEventCard />

      </div>
    </div>
  );
};

export default PlayerEvent;
