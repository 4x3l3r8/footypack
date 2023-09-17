import Image from "next/image";
import React from "react";

interface itemsProp {
    image: string;
    title:string;
    date: string;
    id:string;
}

const ItemsCard = ({image, title, date, id}: itemsProp) => {
  return (
    <>
      <div className="basis-1/4 cursor-pointer p-2">
        <div className="rounded border">
          <Image
            src={image}
            className="rounded"
            width={250}
            height={175}
            alt=""
          />

          <h1 className="my-2 p-2 font-semibold capitalize">
            {title}
          </h1>

          <div className="flex justify-between p-2 text-sm">
            <p className="text-gray-500">{date}</p>
            <p className="font-bold text-blue-500 underline">{id}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsCard;
