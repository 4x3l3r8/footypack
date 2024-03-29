"use client";

import * as React from "react";

import { type updateUserType } from "~/pages/onboarding/becomeaplayer";
import { Separator } from "../ui/separator";
import FormMain from "./SignUp/FormMain";

export interface IAppProps {
  continueToNextStep: () => void;
  updateUser: updateUserType
}

export const SignUpForm: React.FC<IAppProps> = ({ continueToNextStep, updateUser }) => {

  return (
    <>
      <section className="w-11/12 md:w-10/12">
        {/* <Button variant={"secondary"} className="my-3 rounded-none">
            <ArrowLeft size={18} /> Go Back
          </Button> */}

        <div className="rounded-sm bg-white p-4 shadow-lg">
          <div className="my-4">
            <h1 className="font-extrabold uppercase">Welcome To FootyPark</h1>
            <p className="text-gray-500">
              Enter your personal details and click next to proceed.
            </p>
          </div>

          <Separator />
          <FormMain continueToNextStep={continueToNextStep} updateUser={updateUser} />
        </div>
      </section>
    </>
  )
}
