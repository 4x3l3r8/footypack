import React, {useState,useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card'
import { Separator } from "../ui/separator";
import OtpInput from './SignUp/OtpInput';

const Otp = () => {
    const [otp, setOtp] = useState('');
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
        console.log('OTP entered:', otp); // You can perform any action with the OTP value
      };
      const handleSubmit = () => {
        // Here you can perform actions with the submitted OTP, such as sending it to a server
        console.log('Submitted OTP:', otp);
      };
      const handleResend = () => {
        setResendDisabled(true);
        setCountdown(30);
        // You can trigger actions to resend the code here
      };

  return (
    <Card className='w-11/12 md:w-10/12 shadow-lg p-5'>
        <CardHeader className='mt-3'>
            <CardTitle className='uppercase'>account Verification</CardTitle>
            <CardDescription>We sent a 5 digit verification code to <b className='text-[#F18322]'>name@domain.com.</b> Kindly enter code below. </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent>
            <div className='mt-4'>
                <p className='font-medium mb-4'>Verification Code</p>
                <OtpInput length={5} onChange={handleOtpChange}/>
                <button
          className="mt-4 px-28 py-2 uppercase bg-[#006716] text-white rounded hover:bg-[#006716] focus:outline-none"
          onClick={handleSubmit}
          disabled={otp.length !== 5}
        >
          verify account
        </button>
            </div>
            <div className="mt-4 text-center w-[360px]">
          {resendDisabled ? (
            <span>Resend code in <b className='text-[#006716]'>{countdown}</b>  seconds</span>
          ) : (
            <button
              className=" hover:underline focus:outline-none"
              onClick={handleResend}
            >
                          <span>Resend code in <b className='text-[#006716]'>{countdown}</b>  seconds</span>

            </button>
          )}
        <div className='mt-2'>
            <a className='underline text-[#1974EE] font-medium' href="">Change Verification Option</a>
        </div>
        </div>
        </CardContent>
    </Card>
  )
}

export default Otp