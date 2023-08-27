import { AvatarImage } from "@radix-ui/react-avatar";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import React from "react";
import GameDetailsLeft from "~/components/Games/gamedetails/GameDetailsLeft";
import GameShares from "~/components/Games/gamedetails/GameShares";
import Header from "~/components/Games/gamedetails/Header";
import PlayersCard from "~/components/Games/gamedetails/PlayersCard";
import DashNavBar from "~/components/Player/Dashboard/DashNavBar";
import { Footer } from "~/components/common";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";

const index = () => {
  return (
    <>
      <DashNavBar />
      <Header />
      <GameShares />

      <div className="flex flex-col gap-4 p-4 md:flex-row md:px-24">
        <GameDetailsLeft />
        <div className="basis-1/2">
          <Image
            src="/images/gameDetailsMap.png"
            width={550}
            height={300}
            alt=""
          />

          <div className="my-4 flex items-center justify-between font-bold uppercase">
            <h1 className="">players</h1>
            <div className="flex items-center gap-2">
              <ChevronLeft /> Set 1 <ChevronRight />
            </div>
          </div>

          <div className="flex gap-8 my-8 px-4">
            <div className="basis-1/2">
              <h1 className="-skew-x-12 bg-blue-700 p-2 text-center font-bold uppercase text-white">
                team blue
              </h1>

              <div className="my-4">
                <PlayersCard playerImg="/images/femaleAvatar.png" playerName='Empty Spot' playerPosition='Goalkeeper' />   
                <PlayersCard playerImg="/images/femaleAvatar.png" playerName='Samuel A' playerPosition='F.Attacking Midfielder' />            
                <PlayersCard playerImg="/images/femaleAvatar.png" playerName='Damilola A' playerPosition='C.Attacking Midfielder' />
                <PlayersCard playerImg="/images/femaleAvatar.png" playerName='Empty Spot' playerPosition='Left Back' />
                <PlayersCard playerImg="/images/femaleAvatar.png" playerName='Daniel M' playerPosition='RightBack' />
              </div>
            </div>


            <div className="basis-1/2">
              <h1 className="-skew-x-12 bg-yellow-500 p-2 text-center font-bold uppercase text-white">
                team yellow
              </h1>
              <div className="my-4">
                <PlayersCard playerImg="/images/maleAvatar.png" playerName='Empty Spot' playerPosition='Goalkeeper' />   
                <PlayersCard playerImg="/images/maleAvatar.png" playerName='Samuel A' playerPosition='F.Attacking Midfielder' />            
                <PlayersCard playerImg="/images/maleAvatar.png" playerName='Damilola A' playerPosition='C.Attacking Midfielder' />
                <PlayersCard playerImg="/images/maleAvatar.png" playerName='Empty Spot' playerPosition='Left Back' />
                <PlayersCard playerImg="/images/maleAvatar.png" playerName='Daniel M' playerPosition='RightBack' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default index;
