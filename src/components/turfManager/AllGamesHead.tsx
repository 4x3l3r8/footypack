import React from "react";
import { Popover, PopoverTrigger } from "~/components/ui/popover";
import { Separator } from "~/components/ui/separator";
import { ChevronDown, Filter, MapPin } from "lucide-react";
import FilterPopOver from "~/components/Games/FilterPopOver";

const AllGamesHead = () => {
  return (
    <>
      <div className="flex justify-between items-center p-2">
        <h1 className="font-bold uppercase">
          all games
        </h1>

        <div className="flex gap-4">
          <div className="flex gap-2 border p-2">
            <MapPin /> <Separator orientation="vertical" />{" "}
            <input
              type="text"
              className="w-80 border-0 bg-transparent outline-0 focus:outline-0"
              placeholder="Search your turf"
            />
          </div>
          <div className="flex gap-2 border p-2">
            <Filter /> <Separator orientation="vertical" /> <p>Filter By</p>
            <Popover>
              <PopoverTrigger>
                <ChevronDown />
              </PopoverTrigger>
              <FilterPopOver />
            </Popover>
          </div>
          <div className="flex gap-2 border p-2">
            <Filter /> <Separator orientation="vertical" /> <p>List</p>
            <Popover>
              <PopoverTrigger>
                <ChevronDown />
              </PopoverTrigger>
              <FilterPopOver />
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllGamesHead;
