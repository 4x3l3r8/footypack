import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

const TurfTime = ({ value }: { value: any }) => {
  return (
    <>
      <div className={`absolute right-2 flex ${value ? "block" : "hidden"}`}>
        <Select>
          <SelectTrigger className="me-2 w-[120px] font-bold">
            <SelectValue placeholder="00:00AM" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="font-bold">
              <SelectLabel>Start by:</SelectLabel>
              <SelectItem value="zero">00:00AM</SelectItem>
              <SelectItem value="six">06:00AM</SelectItem>
              <SelectItem value="seven">07:00AM</SelectItem>
              <SelectItem value="eight">08:00AM</SelectItem>
              <SelectItem value="nine">09:00AM</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-[120px] font-bold">
            <SelectValue placeholder="00:00AM" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="font-bold">
              <SelectLabel>Start by:</SelectLabel>
              <SelectItem value="zero">00:00AM</SelectItem>
              <SelectItem value="six">06:00AM</SelectItem>
              <SelectItem value="seven">07:00AM</SelectItem>
              <SelectItem value="eight">08:00AM</SelectItem>
              <SelectItem value="nine">09:00AM</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default TurfTime;
