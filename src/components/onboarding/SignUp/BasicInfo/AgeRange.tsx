import React, { useState, useEffect } from "react";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio";
import { api } from "~/utils/api";
import { type basicInfoType } from "../../BasicInformation";
import { Skeleton } from "~/components/ui/skeleton";

interface IAgeRangeProps {
  updateParentState: React.Dispatch<React.SetStateAction<basicInfoType>>
}

const AgeRange: React.FC<IAgeRangeProps> = ({ updateParentState }) => {
  const { data: ageRanges, isLoading } = api.utils.getAllAgeRanges.useQuery()

  const [selectedAgeRange, setSelectedAgeRange] = useState<string>()

  useEffect(() => {
    if (selectedAgeRange) {
      updateParentState((prev) => ({ ...prev, ageRange: selectedAgeRange }))
    }
  }, [selectedAgeRange, updateParentState])

  return (
    <>
      <div className="my-4">
        <h3 className="mb-2 text-xs font-semibold">Age Range</h3>
        {!isLoading ?
          <RadioGroup value={selectedAgeRange} className="grid md:grid-rows-2 md:grid-cols-3 grid-rows-3 grid-cols-2 gap-3 text-xs">
            {ageRanges?.map((ageRange) => {
              return (
                <div onClick={() => setSelectedAgeRange(ageRange.id)} key={ageRange.id} className="flex -skew-x-12 items-center space-x-2 border px-6 py-2 cursor-pointer">
                  <RadioGroupItem value={ageRange.id} id={ageRange.id} />
                  <Label htmlFor={ageRange.id}>{ageRange.min}-{ageRange.max}</Label>
                </div>
              )
            })}
          </RadioGroup>
          :
          <div className="grid grid-rows-1 md:grid-cols-3 h-auto grid-cols-2 gap-3 text-xs">
            <Skeleton className="w-[36rem] h-14" />
          </div>
        }
      </div>
    </>
  );
};

export default AgeRange;
