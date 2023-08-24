import { PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

import Countdown from "../common/Countdown";

import { useSession } from "next-auth/react";
const Hero = () => {
  const targetDate = new Date("2023-10-21 04:31:59").getTime();

  const { data: UserData } = useSession();

  return (
    <>
      <section className="p-4 md:px-24 md:py-8">
        <div className="justify-between md:flex">
          <div className="my-4 md:my-0">
            <h1 className="text-xl font-bold uppercase">
              welcome {UserData?.user.firstname},
            </h1>
            <p className="text-gray-500">Ready to book your next game?</p>
          </div>
          <div>
            <Button
              className="mr-4 rounded-sm border-[#F24822] text-[#F24822] hover:bg-[#F24822]"
              variant={"outline"}
            >
              create new game
            </Button>
            <Button className="rounded-sm">join game</Button>
          </div>
        </div>

        <div className="mt-4 gap-3 md:flex">
          <div className="relative my-4 h-36 basis-3/4 md:my-0">
            <div className="h-full w-full">
              <Image src={"/images/playerComp2.png"} fill alt="" />
            </div>

            <div className="absolute left-0 top-0 flex h-full w-full justify-between py-4">
              <div className="self-end px-4 font-bold uppercase text-white">
                <h1 className="mb-1 inline-block bg-primary p-2 px-4">Lagos</h1>
                <br />
                <h1 className="inline-block bg-primary p-2 px-4 ">
                  players comp
                </h1>
              </div>

              <div className="flex flex-col justify-between">
                <h1 className="inline-block bg-white p-2 font-bold uppercase text-primary ">
                  next game at ikeja
                </h1>

                {/* <Countdown date={targetDate} renderer={renderer} /> */}
                <Countdown targetDate={targetDate} />
              </div>
            </div>
          </div>

          <div className="flex basis-1/4 flex-col justify-between rounded border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-8">
              <p className="text-sm uppercase text-gray-500">Wallet Balance</p>

              <h1 className="text-3xl font-bold uppercase">N5,000.00</h1>
            </div>

            <Link
              href="#"
              className="flex items-center text-blue-500 underline"
            >
              <PlusCircle size={15} className="mr-1" />{" "}
              <span className="text-xs font-bold">Add money</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
