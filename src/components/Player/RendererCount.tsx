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
      <section className="flex gap-2 text-xs leading-4 text-white">
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">{days}</span>
          <span className="uppercase">Days</span>
        </div>{" "}
        :
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">{hours}</span>
          <span className="uppercase">Hrs</span>
        </div>{" "}
        :
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">{minutes}</span>
          <span className="uppercase">mins</span>
        </div>{" "}
        :
        <div className="flex flex-col items-center justify-center">
          <span className="font-bold">{seconds}</span>
          <span className="uppercase">secs</span>
        </div>
      </section>
    );
  } else {
    return <span className="text-white font-bold">Game is ongoing</span>
  }
};

export default renderer;
