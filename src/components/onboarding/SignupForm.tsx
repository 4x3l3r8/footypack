"use client";

import * as React from "react";
import { useState } from "react";
import { Button } from "../ui/button";
import { AlertTriangle, ArrowLeft, EyeIcon, EyeOffIcon } from "lucide-react";
import { Separator } from "../ui/separator";
import { Label } from "../ui/label";
import SignUpButton from "./SignUp/SignUpButton";
import { useFormik } from "formik";
import SignUpProgress from "./SignUp/SignUpProgress";
import * as Yup from "yup";

export interface IAppProps {
  st?: string;
}

export function SignUpForm(props: IAppProps) {
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const phoneRegex = /^(?:\+?(?:[0-9] ?){6,14}[0-9])$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(30, "Must be less than 30 characters")
        .min(3, "Must be more than 3 characters")
        .required("This cant be empty"),
      lastName: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("This cant be empty"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .matches(
          passwordRegex,
          "Password must contain at least 8 characters, one uppercase letter, and one special character"
        )
        .required("This cant be empty"),
      phoneNumber: Yup.string()
        .matches(phoneRegex, "Invalid phone number")
        .required("This cant be empty"),
      email: Yup.string()
        .email("Invalid email address")
        .matches(emailRegex, "Invalid email address")
        .required("This cant be empty"),
    }),
    onSubmit: (values) => {
      // submit form
    },
  });

  const handlePasswordShow = () => {
    setIsPasswordOpen(!isPasswordOpen);
  };

  return (
    <>
      <section className="w-11/12 md:w-10/12">
        <Button variant={"secondary"} className="my-3 rounded-none">
          <ArrowLeft size={18} /> Go Back
        </Button>

        <div className="rounded-sm bg-white p-4 shadow-lg">
          <div className="my-4">
            <h1 className="font-extrabold uppercase">Welcome To FootyPark</h1>
            <p className="text-gray-500">
              Enter your personal details and click next to proceed.
            </p>
          </div>

          <Separator />

          <form className="w-full">
            <div className="py-4">
              <div className="items-start gap-3 md:flex">
                <SignUpButton
                  title="First Name"
                  idName="firstName"
                  inpType="text"
                  placeholder="Damilola"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  handleTouch={formik.touched.firstName}
                  handleErrors={formik.errors.firstName}
                  value={formik.values.firstName}
                />

                <SignUpButton
                  title="Last Name"
                  idName="lastName"
                  inpType="text"
                  placeholder="Onyekachi"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  handleTouch={formik.touched.lastName}
                  handleErrors={formik.errors.lastName}
                  value={formik.values.lastName}
                />
              </div>

              <div className="items-start gap-3 md:flex">
                <SignUpButton
                  title="Email"
                  idName="email"
                  inpType="email"
                  placeholder="domain@gmail.com"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  handleTouch={formik.touched.email}
                  handleErrors={formik.errors.email}
                  value={formik.values.email}
                />

                <SignUpButton
                  title="Phone Number"
                  idName="phoneNumber"
                  inpType="text"
                  placeholder="080123456"
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  handleTouch={formik.touched.phoneNumber}
                  handleErrors={formik.errors.phoneNumber}
                  value={formik.values.phoneNumber}
                />
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="password">
                  Password <span className="text-red-500">*</span>
                </Label>
                <div className="relative">
                  <input
                    className={`w-full border p-2 outline-none focus:border-primary focus:outline-none ${
                      formik.touched.password && formik.errors.password
                        ? "border-red-700"
                        : ""
                    }`}
                    type={!isPasswordOpen ? "password" : "text"}
                    id="password"
                    name="password"
                    placeholder="************"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  
                  <div
                    className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={handlePasswordShow}
                  >
                    {!isPasswordOpen ? <EyeIcon /> : <EyeOffIcon />}
                  </div>
                </div>
                {formik.touched.password && formik.errors.password ? (
                    <div className="flex items-center gap-2 text-xs text-red-700">
                      <AlertTriangle size={10} />
                      {formik.errors.password}
                    </div>
                  ) : null}
              </div>
            </div>
            <SignUpProgress firstBtn='Login Instead' secondBtn='signup' progressValue={33} />
          </form>
        </div>
      </section>
    </>
  );
}
