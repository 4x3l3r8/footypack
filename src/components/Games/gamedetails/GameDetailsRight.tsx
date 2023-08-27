import React from "react";
import PlayersCard from "./PlayersCard";
import { Separator } from "~/components/ui/separator";
import { ChevronRight, ClipboardCopy } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

const GameDetailsRight = () => {
  return (
    <>
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

        <div className="flex gap-8 px-4">
          <div className="basis-1/2">
            <h1 className="-skew-x-12 bg-blue-700 p-2 text-center font-bold uppercase text-white">
              team blue
            </h1>

            <div className="my-4">
              <PlayersCard
                playerImg="/images/femaleAvatar.png"
                playerName="Empty Spot"
                playerPosition="Goalkeeper"
              />
              <PlayersCard
                playerImg="/images/femaleAvatar.png"
                playerName="Samuel A"
                playerPosition="F.Attacking Midfielder"
              />
              <PlayersCard
                playerImg="/images/femaleAvatar.png"
                playerName="Damilola A"
                playerPosition="C.Attacking Midfielder"
              />
              <PlayersCard
                playerImg="/images/femaleAvatar.png"
                playerName="Empty Spot"
                playerPosition="Left Back"
              />
              <PlayersCard
                playerImg="/images/femaleAvatar.png"
                playerName="Daniel M"
                playerPosition="RightBack"
              />
            </div>
          </div>

          <div className="basis-1/2">
            <h1 className="-skew-x-12 bg-yellow-500 p-2 text-center font-bold uppercase text-white">
              team yellow
            </h1>
            <div className="my-4">
              <PlayersCard
                playerImg="/images/maleAvatar.png"
                playerName="Empty Spot"
                playerPosition="Goalkeeper"
              />
              <PlayersCard
                playerImg="/images/maleAvatar.png"
                playerName="Samuel A"
                playerPosition="F.Attacking Midfielder"
              />
              <PlayersCard
                playerImg="/images/maleAvatar.png"
                playerName="Damilola A"
                playerPosition="C.Attacking Midfielder"
              />
              <PlayersCard
                playerImg="/images/maleAvatar.png"
                playerName="Empty Spot"
                playerPosition="Left Back"
              />
              <PlayersCard
                playerImg="/images/maleAvatar.png"
                playerName="Daniel M"
                playerPosition="RightBack"
              />
            </div>
          </div>
        </div>
        <Separator />

        <div className="my-4">
          <p className="text-gray-500">Match Link</p>
          <div className="relative my-4 border bg-gray-200 p-4">
            <p className="text-blue-700">
              https://footypack_match.com/ew399q003d3902kf2
            </p>

            <div className="absolute right-0 top-0 h-full bg-gray-200 p-4">
              <ClipboardCopy />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetailsRight;
