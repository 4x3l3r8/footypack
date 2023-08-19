import { Heart, MapPin } from "lucide-react";
import React from "react";

interface turfCardProps {
  address: string;
  turfName: string;
  noOfPitch: number;
  rating: number;
}

const TurfCard = ({ address, turfName, noOfPitch, rating }: turfCardProps) => {
  return (
    <>
      
      <div className="md:w-1/4 w-full mb-4 px-2">
        <div className='relative flex h-[270px] items-center justify-center rounded-xl bg-[url("/images/turfImage.png")] p-4 transition-all delay-100 hover:scale-105'>
          <div className="absolute right-4 top-4 cursor-pointer rounded-full bg-white p-2">
            <Heart size={16} />
          </div>

          <h1 className="flex w-full -skew-x-12 items-center justify-center bg-black/70 p-2 text-xs font-bold uppercase text-white">
            <MapPin className="mr-2" /> {address}
          </h1>
        </div>

        <div className="my-2 flex justify-between text-sm">
          <div>
            <h1 className="font-bold uppercase">{turfName}</h1>
            <p className="font-bold text-gray-500">{noOfPitch} Pitches</p>
          </div>

          <h2 className="font-bold">⭐{rating}</h2>
        </div>
      </div>

    </>
  );
};

export default TurfCard;
