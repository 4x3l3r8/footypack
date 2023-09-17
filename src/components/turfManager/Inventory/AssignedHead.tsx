import React from "react";
import { Popover, PopoverTrigger } from "~/components/ui/popover";
import { Separator } from "~/components/ui/separator";
import { ChevronDown, Filter, MapPin } from "lucide-react";
import FilterPopOver from "~/components/Games/FilterPopOver";

const AssignedHead = () => {
  return (
    <>
      <div className="flex items-center justify-between p-2">
        <h1 className="font-bold uppercase">10 assigned items</h1>

        <div className="flex gap-4">
          <div className="flex gap-2 border p-2">
            <MapPin /> <Separator orientation="vertical" />{" "}
            <input
              type="text"
              className="w-80 border-0 outline-0 focus:outline-0"
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
        </div>
      </div>
    </>
  );
};

export default AssignedHead;
