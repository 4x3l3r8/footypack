import * as React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import hiwNet from "public/images/HIW_net.svg";
import hiwLegBall from "public/images/HIW_legBall.svg";
import hiwField from "public/images/HIW_field.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";

export interface IGettingStartedProps {}

export function GettingStarted(props: IGettingStartedProps) {
  const [stepCounter, setStepCounter] = React.useState<number>(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Function logic to be executed repeatedly
      setStepCounter((prev) => (prev + 1) % 3);
    }, 4000); // Interval in milliseconds (e.g., 2000ms = 2 seconds)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const imgArray = [hiwField, hiwLegBall, hiwNet];
  return (
    <section className="mt-24 w-full items-center">
      <div className="flex h-auto w-full items-center justify-between px-10">
        <span className="font-barlow text-4xl font-extrabold uppercase italic text-black">
          How to get started on <br /> Footypack
        </span>
        <Separator className="w-3/6" />
      </div>
      <div className="mx-auto mt-8 flex w-5/6 justify-between space-x-24 px-20 font-barlow">
        <Image
          src={imgArray[stepCounter]}
          width={1080}
          className="h-[400px] w-[400px] transition-all"
          height={720}
          alt=""
        />
        <Tabs value={stepCounter.toString()} className="w-[400px]">
          <TabsList className="italics -pb-1 w-full justify-between rounded-none border-b-2 bg-transparent font-bold transition-all">
            <TabsTrigger
              className="rounded-none py-0 text-3xl font-bold data-[state=active]:border-b-4 data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              value="0"
            >
              Step 1
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none py-0 text-3xl font-bold data-[state=active]:border-b-4 data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              value="1"
            >
              Step 2
            </TabsTrigger>
            <TabsTrigger
              className="rounded-none py-0 text-3xl font-bold data-[state=active]:border-b-4 data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              value="2"
            >
              Step 3
            </TabsTrigger>
          </TabsList>
          <TabsContent value="0" className="transition-all">
            <div className="mt-12 flex flex-col space-y-3">
              <span className="text-lg font-semibold uppercase italic">
                Enter a location to find turfs nearby
              </span>
              <p className="text-justify text-lg text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                enim repellat, saepe odio nesciunt libero rem quibusdam
                temporibus aspernatur tenetur facilis tempora voluptatibus
                tempore.
              </p>
              <Button
                size={"lg"}
                className="mb-0 mt-7 h-full w-fit rotate-[12.5deg] -skew-y-12 px-9 py-6"
              >
                <span className="rotate-0 skew-y-0 text-xl">FIND TURFS</span>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="1" className="transition-all">
            <div className="mt-12 flex flex-col space-y-3">
              <span className="text-lg font-semibold uppercase italic">
                Pick game date and time
              </span>
              <p className="text-justify text-lg text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                enim repellat, saepe odio nesciunt libero rem quibusdam
                temporibus aspernatur tenetur facilis tempora voluptatibus
                tempore.
              </p>
              <Button
                size={"lg"}
                className="mb-0 mt-7 h-full w-fit rotate-[12.5deg] -skew-y-12 px-9 py-6"
              >
                <span className="rotate-0 skew-y-0 text-xl">FIND TURFS</span>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="2" className="transition-all">
            <div className="mt-12 flex flex-col space-y-3">
              <span className="text-lg font-semibold uppercase italic">
                Pay and get ticket
              </span>
              <p className="text-justify text-lg text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                enim repellat, saepe odio nesciunt libero rem quibusdam
                temporibus aspernatur tenetur facilis tempora voluptatibus
                tempore.
              </p>
              <Button
                size={"lg"}
                className="mb-0 mt-7 h-full w-fit rotate-[12.5deg] -skew-y-12 px-9 py-6"
              >
                <span className="rotate-0 skew-y-0 text-xl">FIND TURFS</span>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
