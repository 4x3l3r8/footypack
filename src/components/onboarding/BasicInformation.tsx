import { type Gender as GenderType } from "@prisma/client";
import * as React from "react";
import { type updateUserType } from "~/pages/onboarding/becomeaplayer";
import { Separator } from "../ui/separator";
import AgeRange from "./SignUp/BasicInfo/AgeRange";
import Gender from "./SignUp/BasicInfo/Gender";
import SignUpProgress from "./SignUp/SignUpProgress";

export interface IAppProps {
  continueToNextStep: () => void;
  updateUser: updateUserType
}

export type basicInfoType = {
  gender: GenderType,
  ageRange: string,
  age: number
}

export function BasicInformation({ continueToNextStep, updateUser }: IAppProps) {
  const [basicInformation, setBasicInformation] = React.useState<basicInfoType>({
    gender: "MALE",
    ageRange: "",
    age: 0
  })
  const [can_proceed, setCanProceed] = React.useState(false)

  const submitData = updateUser.useMutation({
    onSuccess: (data) => {
      if (data.status === "Ok") {
        continueToNextStep()
      }
    }
  })

  React.useEffect(() => {
    if (basicInformation.ageRange !== "" && basicInformation.gender) {
      setCanProceed(true)
    }
  }, [basicInformation])

  const basicInfoFunction = () => {
    submitData.mutate({
      userType: "PLAYER",
      ...basicInformation
    })
  };

  return (
    <>
      <section className="w-11/12 md:w-10/12">
        <div className="rounded-sm bg-white p-4 shadow-lg">
          <div className="my-4">
            <h1 className="font-extrabold uppercase">basic information</h1>
            <p className="text-gray-500">Select options that describes you.</p>
          </div>
          <Separator />

          <Gender updateParentState={setBasicInformation} />

          <AgeRange updateParentState={setBasicInformation} />

          <div className="my-4">
            <h3 className="mb-2 text-xs font-semibold">
              Actual Age <span className="text-gray-500">(Optional)</span>
            </h3>
            <input
              onChange={(e) => setBasicInformation((prev) => ({ ...prev, age: Number(e.target.value) }))}
              type="text"
              value={basicInformation.age.toString()}
              className="w-full border p-2 focus:outline-none"
            />
          </div>

          <SignUpProgress
            firstBtn="back"
            secondBtn="next"
            canProceed={can_proceed}
            progressValue={75}
            onProceed={basicInfoFunction}
          />
        </div>
      </section>
    </>
  );
}
