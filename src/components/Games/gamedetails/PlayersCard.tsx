import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

interface PlayersCardProps {
    playerImg: string;
    playerName: string;
    playerPosition: string;
}

const PlayersCard = ({playerImg, playerName, playerPosition }: PlayersCardProps) => {
  return (
    <>
      <div className="my-8 flex items-center gap-2">
        <div>
          <Avatar className="h-10 w-10 bg-blue-700">
            <AvatarImage src={playerImg} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div>
          <p className="text-sm font-bold uppercase">{playerName}</p>
          <p className="capitalize text-gray-500">{playerPosition}</p>
        </div>
      </div>
    </>
  );
};

export default PlayersCard;
