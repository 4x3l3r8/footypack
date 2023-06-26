import { Button } from "../ui/button";

export interface IFootyFactsProps {}

export function FootyFacts(props: IFootyFactsProps) {
  return (
    <section className="flex w-full gap-4 py-28 font-barlow">
      <div className="pr relative grid w-1/2 grid-cols-2 grid-rows-2 gap-4 p-8 text-center uppercase">
        <div className="player absolute bottom-0 left-0 right-0 top-0 w-full opacity-25"></div>

        <div className=" z-50 flex flex-col">
          <span className="text-3xl font-bold text-primary">100</span>
          <span className="text-base font-semibold">Turfs</span>
        </div>
        <div className=" z-50 flex flex-col">
          <span className="text-3xl font-bold text-primary">113k</span>
          <span className="text-base font-semibold">Sessions</span>
        </div>
        <div className=" z-50 flex flex-col">
          <span className="text-3xl font-bold text-primary">2,000</span>
          <span className="text-base font-semibold">players</span>
        </div>
        <div className=" z-50 flex flex-col">
          <span className="text-3xl font-bold text-primary">300</span>
          <span className="text-base font-semibold">vendors</span>
        </div>
      </div>
      <div className="mt-12 flex w-1/2 flex-col space-y-3 pr-8">
        <span className="text-3xl font-black uppercase italic">
          Register A turf
        </span>
        <p className="mr-7 text-justify text-lg text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim
          repellat, saepe odio nesciunt libero rem quibusdam temporibus
          aspernatur tenetur facilis tempora voluptatibus tempore.
        </p>
        <Button
          size={"lg"}
          className="mb-0 mt-auto h-auto w-fit rotate-[12.5deg] -skew-y-12 px-9 py-6 rounded-none"
        >
          <span className="rotate-0 skew-y-0 text-xl uppercase">
            learn more
          </span>
        </Button>
      </div>
    </section>
  );
}
