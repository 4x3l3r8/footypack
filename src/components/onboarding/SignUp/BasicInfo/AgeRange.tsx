import React from "react";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio";

const AgeRange = () => {
  return (
    <>
      <div className="my-4">
        <h3 className="mb-2 text-xs font-semibold">Age Range</h3>
        <RadioGroup defaultValue="sixteen" className="md:flex gap-3 text-xs">
          <div className="flex -skew-x-12 items-center space-x-2 border px-6 py-2">
            <RadioGroupItem value="sixteen" id="sixteen" />
            <Label htmlFor="sixteen">16-25</Label>
          </div>

          <div className="flex -skew-x-12 items-center space-x-2 border px-6 py-2">
            <RadioGroupItem value="twentyFive" id="twentyFive" />
            <Label htmlFor="twentyFive">25-32</Label>
          </div>

          <div className="flex -skew-x-12 items-center space-x-2 border px-6 py-2">
            <RadioGroupItem value="thirtyThree" id="thirtyThree" />
            <Label htmlFor="thirtyThree">33-45</Label>
          </div>
        </RadioGroup>
        
      </div>
    </>
  );
};

export default AgeRange;
