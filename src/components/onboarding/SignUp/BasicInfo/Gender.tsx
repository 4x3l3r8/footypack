import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Label } from '~/components/ui/label'
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio'
import { type basicInfoType } from '../../BasicInformation'
import { type Gender as GenderType } from '@prisma/client'

interface IGender {
  updateParentState: React.Dispatch<React.SetStateAction<basicInfoType>>
}

const Gender: React.FC<IGender> = ({ updateParentState }) => {
  const [selectedOption, setSelectedOption] = useState<GenderType>("MALE")

  useEffect(() => {
    updateParentState((prev) => ({ ...prev, gender: selectedOption }))
  }, [selectedOption, updateParentState])

  return (
    <>
      <div className="my-4">
        <h3 className="font-semibold mb-2 text-xs">Gender</h3>
        <RadioGroup onValueChange={(value: GenderType) => setSelectedOption(value)} value={selectedOption} className="flex md:w-1/2 gap-3 text-xs">
          <div className="basis-1/2 rounded-sm border p-4">
            <div className="mb-4 flex justify-end">
              <RadioGroupItem value="MALE" id="maleOption" />
            </div>

            <Label htmlFor="maleOption">
              <div className="mb-4 flex justify-center">
                <Avatar className="bg-yellow-400">
                  <AvatarImage src="/images/maleAvatar.png" />
                  <AvatarFallback>MA</AvatarFallback>
                </Avatar>
              </div>

              <h1 className="text-center font-semibold uppercase">Male</h1>
            </Label>
          </div>

          <div className="basis-1/2 rounded-sm border p-4">
            <div className="mb-4 flex justify-end">
              <RadioGroupItem value="FEMALE" id="femaleOption" />
            </div>

            <Label htmlFor="femaleOption">
              <div className="mb-4 flex justify-center">
                <Avatar className="bg-yellow-400">
                  <AvatarImage src="/images/femaleAvatar.png" />
                  <AvatarFallback>FE</AvatarFallback>
                </Avatar>
              </div>

              <h1 className="text-center font-semibold uppercase">
                Female
              </h1>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </>
  )
}

export default Gender