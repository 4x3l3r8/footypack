"use client";

import { useFormik } from "formik";
import { AlertTriangle, EyeIcon, EyeOffIcon } from "lucide-react";
import * as React from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { Separator } from "../ui/separator";
import FormMain from "./SignUp/FormMain";
import { User } from "~/types";

export interface IAppProps {
  authMethod: string | null;
  user?: User
}

interface formProp {
  firstName: string;
  lastName: string;
  email: string,
  password: string,
  phoneNumber: string,
}

export function SignUpForm(props: IAppProps) {
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
          <FormMain />
        </div>
      </section>
    </>
  )
}
