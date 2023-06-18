import * as React from "react";

export interface ICTAJumbotronProps {}

export function CTAJumbotron(props: ICTAJumbotronProps) {
  return (
    <div className="max-w-screen flex min-h-fit items-center justify-center bg-slate-500 py-6">
      <div className="bg-yellow-200 text-center ">
        <h1 className="text-[60px] font-extrabold uppercase italic text-black">
          the BEST way to
          <br /> <span className="text-primary"> Search & Book</span> Turfs
        </h1>
        <h5>
          We ease off the stress of finding football turfs located near you.
        </h5>
      </div>
    </div>
  );
}
