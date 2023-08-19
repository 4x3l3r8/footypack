import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import PlayerCardBottom from "./PlayerCardBottom";

const PlayerEventCard = () => {
  return (
    <>
      <div className="basis-full md:basis-1/4 p-2">
        <div className=" rounded bg-white p-3 transition-all delay-100 hover:scale-105">
          <div className="flex items-center justify-between">
            <div className="my-4 flex items-center gap-2">
              <div>
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/images/maleAvatar.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>

              <p className="capitalize text-gray-500">Adesanya Daniel</p>
            </div>

            <div className="text-xs">
              <p className="text-gray-500">Prize</p>
              <h2 className="font-bold">N50,000</h2>
            </div>
          </div>

          <div className="flex gap-4 rounded my-4 items-center justify-between border-2 border-dashed border-primary bg-green-50 p-4">
            <div className="text-xs">
              <Avatar className="mb-2">
                <AvatarImage src="/images/maleAvatar.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <h1 className="font-bold uppercase">
                The Big Boys
              </h1>
            </div>
            <h1 className="font-bold uppercase text-primary text-2xl">vs</h1>
            <div className="text-xs">
              <Avatar className="mb-2">
                <AvatarImage src="/images/maleAvatar.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <h1 className="font-bold uppercase">
                Lagos Player
              </h1>
            </div>
          </div>

          <PlayerCardBottom eventTime='12:30PM' eventDate='12/23/2023' />
        </div>
      </div>
    </>
  );
};

export default PlayerEventCard;
