import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";

const SignUpProgress = () => {
  return (
    <>
      <div className="my-4">
        <Progress value={33} className="mb-4 h-1" />

        <div className="my-4 flex justify-between">
          <Button
            variant={"ghost"}
            className="rounded-none border uppercase text-blue-700"
          >
            Login Instead
          </Button>
          <Button className="rounded-none uppercase" type="submit">signup</Button>
        </div>

        <p className="px-8 text-center  tracking-wide text-gray-500">
          By clicking sign up, you agree to{" "}
          <Link href="#" className="text-blue-700">
            Terms Of Use
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-blue-700">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </>
  );
};

export default SignUpProgress;
