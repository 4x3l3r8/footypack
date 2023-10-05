import React, { useEffect, useState } from "react";
import { type updateUserType } from "~/pages/onboarding/becomeaplayer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";
import OtpInput from "./SignUp/OtpInput";

const Otp: React.FC<{ continueToNextStep: () => void; updateUser: updateUserType }> = ({ continueToNextStep }) => {
  const [otp,] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);


  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        setResendDisabled(false);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const handleOtpChange = (otp: string) => {
    console.log("OTP entered:", otp); // You can perform any action with the OTP value
  };
  const handleSubmit = () => {
    continueToNextStep()

    // Here you can perform actions with the submitted OTP, such as sending it to a server
    console.log("Submitted OTP:", otp);
  };
  const handleResend = () => {
    setResendDisabled(true);
    setCountdown(30);
    // You can trigger actions to resend the code here
  };

  return (
    <Card className="w-11/12 p-5 shadow-lg md:w-10/12">
      <CardHeader className="mt-3">
        <CardTitle className="uppercase">account Verification</CardTitle>
        <CardDescription>
          We sent a 5 digit verification code to{" "}
          <b className="text-[#F18322]">name@domain.com.</b> Kindly enter code
          below.{" "}
        </CardDescription>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col items-center">
        <div className="mt-4 flex flex-col items-center gap-1">
          <p className="mb-4 font-medium">Verification Code</p>
          <OtpInput length={5} onChange={handleOtpChange} />
          <button
            className="mt-4 rounded bg-[#006716] px-28 py-2 uppercase text-white hover:bg-[#006716] focus:outline-none"
            onClick={handleSubmit}
          // disabled={otp.length !== 5}
          >
            verify account
          </button>
        </div>
        <div className="mt-4 w-[360px] text-center">
          {resendDisabled ? (
            <span>
              Resend code in <b className="text-[#006716]">{countdown}</b>{" "}
              seconds
            </span>
          ) : (
            <button
              className=" hover:underline focus:outline-none"
              onClick={handleResend}
            >
              <span>
                Resend code in <b className="text-[#006716]">{countdown}</b>{" "}
                seconds
              </span>
            </button>
          )}
          <div className="mt-2">
            <a className="font-medium text-[#1974EE] underline" href="">
              Change Verification Option
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Otp;
