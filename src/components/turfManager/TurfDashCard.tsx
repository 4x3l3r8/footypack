import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import PlayerCardBottom from "../Player/PlayerCardBottom";

interface scheduleGameProps {
  stadiumImage: string;
  avatarImage: string;
  organizerName: string;
  stadiumName: string;
  eventTime: string;
  eventDate: string;
}

const TurfDashCard = ({
  stadiumImage,
  avatarImage,
  organizerName,
  stadiumName,
  eventTime,
  eventDate,
}: scheduleGameProps) => {
  return (
    <div className="basis-full px-2 md:basis-1/3">
      <div className=" rounded bg-white h-full p-3 shadow-md transition-all delay-100 hover:scale-105">
        <h1 className="text-sm font-bold uppercase">
          {stadiumName}
        </h1>

        <div className="my-4 flex items-center gap-2">
          <div>
            <Avatar className="h-6 w-6">
              <AvatarImage src={avatarImage} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <p className="capitalize text-gray-500">{organizerName}</p>
        </div>

        <Image src={stadiumImage} width={400} height={120} alt="" />

        <PlayerCardBottom eventTime={eventTime} eventDate={eventDate} />
      </div>
    </div>
  );
};

export default TurfDashCard;
