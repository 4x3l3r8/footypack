import React from "react";
import SectHeader from "./SectHeader";
import { Heart, MapPin } from "lucide-react";

const TurfSect = () => {
  return (
    <>
      <section className="p-4 md:px-24">
        <SectHeader />

        <div className="my-4 flex gap-3">
          <div className="w-[280px]">
            <div className='relative flex h-[270px] items-center justify-center rounded-xl bg-[url("/images/turfImage.png")] p-4'>
              <div className="absolute right-4 top-4 rounded-full bg-white p-2">
                <Heart size={16} />
              </div>

              <h1 className="flex w-full -skew-x-12 items-center justify-center bg-black/70 p-2 text-xs font-bold uppercase text-white">
                <MapPin className="mr-2" /> Adekunle 101245, Lagos
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TurfSect;
