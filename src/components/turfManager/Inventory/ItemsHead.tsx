import React from 'react'
import { Checkbox } from "~/components/ui/checkbox";
import { Popover, PopoverTrigger } from "~/components/ui/popover";
import { Separator } from "~/components/ui/separator";
import { ChevronDown, Filter, MapPin } from "lucide-react";
import FilterPopOver from "~/components/Games/FilterPopOver";

const ItemsHead = () => {
  return (
    <>
       <div className="flex justify-between p-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="font-bold uppercase leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              12,006 items
            </label>
          </div>

          <div className="flex gap-4">
            <div className="flex gap-2 border p-2">
              <Filter /> <Separator orientation="vertical" /> <p>List</p>
              <Popover>
                <PopoverTrigger>
                  <ChevronDown />
                </PopoverTrigger>
                <FilterPopOver />
              </Popover>
            </div>
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
  )
}

export default ItemsHead