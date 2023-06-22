import Image from "next/image";
import * as React from "react";
import netBall from "public/images/netBall.svg";
import { Button } from "../ui/button";

export interface IRegisterATurfProps {}

export function RegisterATurf(props: IRegisterATurfProps) {
  return (
    <section className="mx-auto flex w-full flex-row-reverse justify-between bg-[#FBFDF1] py-8 font-barlow lg:space-x-24 lg:px-44">
      <Image
        src={netBall}
        width={1080}
        className="hidden transition-all md:block md:h-[250px]  md:w-[250px] lg:h-[300px] lg:w-[300px]"
        height={720}
        alt=""
      />
      <div className="mt-12 flex flex-col space-y-3">
        <span className="text-3xl font-black uppercase italic">
          Register A turf
        </span>
        <p className="text-justify text-lg mr-7 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod enim
          repellat, saepe odio nesciunt libero rem quibusdam temporibus
          aspernatur tenetur facilis tempora voluptatibus tempore.
        </p>
        <Button
          size={"lg"}
          className="mb-0 mt-auto h-auto w-fit rotate-[12.5deg] -skew-y-12 px-9 py-6"
        >
          <span className="rotate-0 skew-y-0 text-xl uppercase">register now</span>
        </Button>
      </div>
    </section>
  );
}
