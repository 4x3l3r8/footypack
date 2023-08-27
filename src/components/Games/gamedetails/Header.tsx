import { ArrowLeft } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";

const Header = () => {
  return (
    <>
      <div className="sticky top-14 bg-white w-full p-4 md:px-24">
        <div className="flex w-full items-end justify-between border border-t-0 p-4">
          <Button variant={"ghost"} className="rounded-none bg-transparent border-0">
            <ArrowLeft size={18} /> Go Back
          </Button>

          <div className="flex gap-2">
            <Button
              variant={"ghost"}
              className="rounded-sm border border-blue-700 text-blue-700"
            >
              view match report
            </Button>
            <Button className="rounded-sm">Join Game</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
