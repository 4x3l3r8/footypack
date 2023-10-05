import React from "react";
import type { ReactNode } from "react";
import TurfNavBar from "../turfManager/TurfNavBar";
import SideBar from "../turfManager/SideBar";

const DashboardLayout = ({
  children,
  setIndex,
  index,
}: {
  children: ReactNode;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}) => {
  return (
    <>
      <section className="flex max-h-screen overflow-hidden">
        <SideBar setIndex={setIndex} index={index} />

        <div className="max-h-screen basis-4/5">
          <TurfNavBar />

          <div className="h-full overflow-y-scroll bg-gray-100 p-8">
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardLayout;
