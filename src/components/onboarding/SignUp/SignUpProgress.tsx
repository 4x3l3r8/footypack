import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";

interface progressBtnProps {
  firstBtn: string;
  secondBtn: string;
  progressValue: number | null | undefined;
  onProceed?: () => void
}

const SignUpProgress = ({ firstBtn, secondBtn, progressValue, onProceed }: progressBtnProps) => {
  return (
    <>
      <div className="my-4 bg-white">
        <Progress value={progressValue} className="mb-4 h-1" />

        <div className="my-4 flex justify-between">
          <Button
            variant={"ghost"}
            className="rounded-none border uppercase text-blue-700"
          >
            {firstBtn}
          </Button>
          <Button onClick={onProceed} className="rounded-none uppercase" type="submit">{secondBtn}</Button>
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
