import React from "react";
import Hero from "~/components/Player/Hero";
import PlayerEvent from "~/components/Player/PlayerEvent";
import PlayerScheduleGame from "~/components/Player/PlayerScheduleGame";
import TurfSect from "~/components/Player/TurfSect";
import { Footer, NavBar } from "~/components/common";

const index = () => {
  return (
    <>
      <div className="bg-slate-50">
        <NavBar />
        <Hero />
        <TurfSect />
        <PlayerScheduleGame />
        <PlayerEvent />
        <Footer />
      </div>
    </>
  );
};

export default index;
