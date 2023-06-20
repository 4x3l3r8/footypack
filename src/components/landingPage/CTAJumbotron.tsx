import { MapPin } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import field from "public/images/field.svg";

export interface ICTAJumbotronProps {}

export function CTAJumbotron(props: ICTAJumbotronProps) {
  return (
    <div className="min-h-fit bg-gradient-to-b from-[#EEF5E5]">
      <div className="max-w-screen flex min-h-fit flex-col items-center justify-center space-y-6 py-12">
        <div className="text-center">
          <h1 className="text-[50px] font-extrabold uppercase italic leading-[80px] text-black">
            the BEST way to
            <br /> <span className="text-primary"> Search & Book</span> Turfs
          </h1>
          <h5 className="font-graphik text-[28px] font-normal leading-[48px] text-neutral-500">
            We ease off the stress of finding football turfs located near you.
          </h5>
        </div>
        <div className="flex h-auto w-full flex-col">
          <div className="-ml-32 mb-1 flex w-2/5 content-between items-center justify-between self-center">
            <span className="-ml-10">Enter Preferred Location</span>
            <Button variant={"link"}>Use My current Location</Button>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <div className="flex h-auto w-2/5 rotate-[12deg] -skew-y-12 items-center justify-center border border-primary bg-white px-4 py-6">
              <MapPin className="mr-3 h-6 w-14 border-r" />
              <Input className="w-10/12 transform-none border-0 outline-none focus-visible:ring-0 focus-visible:ring-inset" />
            </div>
            <div className="h-auto w-auto ">
              <Button
                size={"lg"}
                className="mb-0 mt-0 h-full rotate-[12.5deg] -skew-y-12 px-9 py-6"
              >
                <span className="rotate-0 skew-y-0 text-xl">FIND TURFS</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Image
        alt="field image"
        className="w-screen"
        width={1080}
        src={field}
        height={720}
      />
    </div>
  );
}
