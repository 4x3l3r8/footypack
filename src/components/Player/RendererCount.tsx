interface countProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const renderer = ({ days, hours, minutes, seconds, completed }: countProps) => {
  if (!completed) {
    return (
      <div className="flex gap-2 font-bold leading-4 text-white px-2">
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">{days}</span>
          <span className="uppercase text-xs">Days</span>
        </div>{" "}
        :
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">{hours}</span>
          <span className="uppercase text-xs">Hrs</span>
        </div>{" "}
        :
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">{minutes}</span>
          <span className="uppercase text-xs">mins</span>
        </div>{" "}
        :
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">{seconds}</span>
          <span className="uppercase text-xs">secs</span>
        </div>
      </div>
    );
  } else {
    return <span className="text-white font-bold">Game is ongoing</span>
  }
};

export default renderer;
