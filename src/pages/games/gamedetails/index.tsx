import React from "react";
import GameDetailsContent from "~/components/Games/gamedetails/GameDetailsContent";
import GameShares from "~/components/Games/gamedetails/GameShares";
import Header from "~/components/Games/gamedetails/Header";
import DashNavBar from "~/components/Player/Dashboard/DashNavBar";
import { Footer } from "~/components/common";

const index = () => {
  return (
    <>
      <DashNavBar />
      <Header />
      <GameShares />
      <GameDetailsContent />
      <Footer />
    </>
  );
};

export default index;
