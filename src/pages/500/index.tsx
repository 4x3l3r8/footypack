import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative text-center">
        <Image src='/images/500.svg' width={600} height={400} alt='' className="mx-auto" />
        <p className="mt-8 font-bold uppercase">500 - Internal Server Error</p>
        <p className="mx-auto font-semibold text-gray-500 md:w-2/3">
          There is an internal error from either your network, reload the page when the network is stable
        </p>
      </div>
    </div>
  );
};

export default Index;
