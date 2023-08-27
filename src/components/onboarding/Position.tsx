import React, {useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card'
import { Separator } from "../ui/separator";
import { Checkbox } from '../ui/checkbox';
import SignUpProgress from "./SignUp/SignUpProgress";


const Position = () => {
    const [selectedPositions, setSelectedPositions] = useState<string[]>([]);

    const handlePositionToggle = (position: string) => {
      if (selectedPositions.includes(position)) {
        setSelectedPositions(selectedPositions.filter((pos) => pos !== position));
      } else if (selectedPositions.length < 3) {
        setSelectedPositions([...selectedPositions, position]);
      }
    };

    const positionsList = [
      'Goalkeeper',
      'Right Fullback',
      'left Fullback',
      'Center Back',
      'attacking Midfielder',
    ];
  return (
    <Card className='w-11/12 md:w-10/12 shadow-lg p-5'>
        <CardHeader>
            <CardTitle className='uppercase'>preffered position</CardTitle>
            <CardDescription>Select 3 (three) options that describes you.  </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent>
    <div className='space-y-1 leading-none'>
    <div className="grid grid-cols gap-2 mt-2">
    {positionsList.map((position) => (
              <label
                key={position}
                className={`border  p-4 rounded-md ${
                  selectedPositions.includes(position) ? ' text-black font-medium italic uppercase' : ' font-medium italic uppercase'
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
    <div className='mt-4'>
    <SignUpProgress firstBtn="back" secondBtn="create profile" progressValue={100} />

    </div>
        </CardContent>
    </Card>
  )
}

export default Position