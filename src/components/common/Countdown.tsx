import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: number;
}

const Countdown = ({ targetDate }: CountdownProps) => {
    
    const getTimeLeft = (targetDate: number) => {
        const now = new Date().getTime();
        const difference = targetDate - now;
    
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
        return {
          days,
          hours,
          minutes,
          seconds,
        };
      };
    
      const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

       const [isClient, setIsClient] = useState(false)

       useEffect(() => {
         setIsClient(true)
         }, [])
       
      useEffect(() => {
        const interval = setInterval(() => {
          setTimeLeft(getTimeLeft(targetDate));
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, [targetDate]);

  return (
    <div>
      {isClient && (timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0) ? (
        <div className="flex gap-2 font-bold leading-4 text-white px-2">
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">{timeLeft.days}</span>
          <span className="uppercase text-xs">Days</span>
        </div>{" "}
        :
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">{timeLeft.hours}</span>
          <span className="uppercase text-xs">Hrs</span>
        </div>{" "}
        :
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">{timeLeft.minutes}</span>
          <span className="uppercase text-xs">mins</span>
        </div>{" "}
        :
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">{timeLeft.seconds}</span>
          <span className="uppercase text-xs">secs</span>
        </div>
      </div>
      ) : (
        <div>Countdown has ended!</div>
      )}
    </div>
  );
};

export default Countdown;
