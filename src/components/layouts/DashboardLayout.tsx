import React from "react";
import type { ReactNode } from "react";
import TurfNavBar from "../turfManager/TurfNavBar";
import SideBar from "../turfManager/SideBar";


const DashboardLayout = ({ children }: { children: ReactNode }) => {
  
  return (
    <>
      <section className="flex">
        <SideBar />

        <div className="basis-4/5 max-h-screen">
          <TurfNavBar />

          <div className="bg-gray-100 p-8 h-full overflow-y-scroll">
          {children}
          </div>
        </div>
      </section>
      
    </>
  );
};

export default DashboardLayout;
