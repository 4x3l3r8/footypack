import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import PlayerCardBottom from "./PlayerCardBottom";

interface scheduleGameProps {
  stadiumImage: string;
  avatarImage: string;
  organizerName: string;
  stadiumName: string;
  address: string;
  eventTime: string;
  eventDate: string;
}

const PlayerScheduleCard = ({
  stadiumImage,
  avatarImage,
  organizerName,
  stadiumName,
  address,
  eventTime,
  eventDate,
}: scheduleGameProps) => {
  return (
    <div className="p-2 basis-full md:basis-1/4">
        <div className=" rounded bg-white p-3 transition-all delay-100 hover:scale-105 shadow-md">
      <Image src={stadiumImage} width={400} height={120} alt="" />

      <div className="my-4 flex items-center gap-2">
        <div>
          <Avatar className="w-6 h-6">
            <AvatarImage src={avatarImage} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <p className="capitalize text-gray-500">{organizerName}</p>
      </div>

      <h1 className="font-bold uppercase text-sm">
        {stadiumName} <br /> {address}
      </h1>

      <PlayerCardBottom eventTime={eventTime} eventDate={eventDate} />
    </div>
    </div>
  );
};

export default PlayerScheduleCard;
