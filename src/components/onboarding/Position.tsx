import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Separator } from "../ui/separator";
import { Checkbox } from "../ui/checkbox";
import SignUpProgress from "./SignUp/SignUpProgress";
import { useRouter } from "next/navigation";

const Position = () => {
  const [selectedPositions, setSelectedPositions] = useState<string[]>([]);
  const router = useRouter()

  const handlePositionToggle = (position: string) => {
    if (selectedPositions.includes(position)) {
      setSelectedPositions(selectedPositions.filter((pos) => pos !== position));
    } else if (selectedPositions.length < 3) {
      setSelectedPositions([...selectedPositions, position]);
    }
  };

  const createProfile = () => {
      // function to create profile
      router.push('/')
  }

  const positionsList = [
    "Goalkeeper",
    "Right Fullback",
    "left Fullback",
    "Center Back",
    "attacking Midfielder",
  ];
  return (
    
    <section>
      <Card className="w-11/12 ml-14 shadow-lg md:w-10/12">
        <CardHeader>
          <CardTitle className="uppercase">preferred position</CardTitle>
          <CardDescription>
            Select 3 (three) options that describes you.{" "}
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent>
          <div className="space-y-1 leading-none">
            <div className="grid-cols mt-2 grid gap-2">
              {positionsList.map((position) => (
                <label
                  key={position}
                  className={`rounded-md  border p-4 ${
                    selectedPositions.includes(position)
                      ? " font-medium uppercase italic text-black"
                      : " font-medium uppercase italic"
                  } checkbox-container`}
                >
                  <input
                    type="checkbox"
                    checked={selectedPositions.includes(position)}
                    onChange={() => handlePositionToggle(position)}
                    className="mr-2"
                  />
                  <span className="checkbox-custom mr-2"></span>
                  {position}
                </label>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <SignUpProgress
              firstBtn="back"
              secondBtn="create profile"
              progressValue={100}
              onProceed={createProfile}
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Position;
