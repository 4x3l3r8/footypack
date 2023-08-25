import React from "react";
import { PopoverContent } from "../ui/popover";
import { RadioGroup, RadioGroupItem } from "../ui/radio";
import { Label } from "../ui/label";
import { X } from "lucide-react";

const FilterPopOver = () => {
  return (
    <>
      <PopoverContent className="mt-3 flex w-[1040px] items-start justify-between">
        <RadioGroup defaultValue="4">
          <div className="flex items-center space-x-2 p-2 hover:bg-slate-200">
            <RadioGroupItem value="4" id="four" />
            <Label htmlFor="r1">4-Aside</Label>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-slate-200">
            <RadioGroupItem value="5" id="five" />
            <Label htmlFor="r2">5-Aside</Label>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-slate-200">
            <RadioGroupItem value="6" id="six" />
            <Label htmlFor="r3">6-Aside</Label>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-slate-200">
            <RadioGroupItem value="7" id="seven" />
            <Label htmlFor="seven">7-Aside</Label>
          </div>
        </RadioGroup>

        <RadioGroup defaultValue="4">
          <div className="flex items-center space-x-2 p-2 hover:bg-slate-200">
            <RadioGroupItem value="4" id="four" />
            <Label htmlFor="r1">Mainland</Label>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-slate-200">
            <RadioGroupItem value="5" id="five" />
            <Label htmlFor="r2">Island</Label>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-slate-200">
            <RadioGroupItem value="6" id="six" />
            <Label htmlFor="r3">Whole Lagos</Label>
          </div>
        </RadioGroup>

        <RadioGroup defaultValue="4">
          <div className="flex items-center space-x-2 p-2 hover:bg-slate-200">
            <RadioGroupItem value="4" id="four" />
            <Label htmlFor="r1">Free</Label>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-slate-200">
            <RadioGroupItem value="5" id="five" />
            <Label htmlFor="r2">Paid</Label>
          </div>
        </RadioGroup>

        <RadioGroup defaultValue="4">
          <div className="flex items-center space-x-2 p-2 hover:bg-slate-200">
            <RadioGroupItem value="4" id="four" />
            <Label htmlFor="r1">⭐⭐⭐⭐⭐5</Label>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-slate-200">
            <RadioGroupItem value="5" id="five" />
            <Label htmlFor="r2">⭐⭐⭐⭐4</Label>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-slate-200">
            <RadioGroupItem value="6" id="six" />
            <Label htmlFor="r3">⭐⭐⭐3</Label>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-slate-200">
            <RadioGroupItem value="7" id="seven" />
            <Label htmlFor="seven">⭐⭐2</Label>
          </div>
          <div className="flex items-center space-x-2 p-2 hover:bg-slate-200">
            <RadioGroupItem value="7" id="seven" />
            <Label htmlFor="seven">⭐1</Label>
          </div>
        </RadioGroup>

        <X />
      </PopoverContent>
    </>
  );
};

export default FilterPopOver;
