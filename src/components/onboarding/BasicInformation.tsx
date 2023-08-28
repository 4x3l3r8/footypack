import * as React from "react";
import SignUpProgress from "./SignUp/SignUpProgress";
import { Separator } from "../ui/separator";
import Gender from "./SignUp/BasicInfo/Gender";
import AgeRange from "./SignUp/BasicInfo/AgeRange";
import { useRouter } from "next/navigation";

export interface IAppProps {
  st?: string;
}

export function BasicInformation(props: IAppProps) {
  const router = useRouter();

  const basicInfoFunction = () => {
    router.push('/onboarding/becomeAPlayer/preferredPosition')
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

          <Gender />

          <AgeRange />

          <div className="my-4">
            <h3 className="mb-2 text-xs font-semibold">
              Special Age <span className="text-gray-500">(Optional)</span>
            </h3>
            <input
              type="text"
              className="w-full border p-2 focus:outline-none"
            />
          </div>

          <SignUpProgress
            firstBtn="back"
            secondBtn="next"
            progressValue={66}
            onProceed={basicInfoFunction}
          />
        </div>
      </section>
    </>
  );
}
