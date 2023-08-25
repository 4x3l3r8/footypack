import { Search, X, ChevronDown, Filter } from "lucide-react";
import React from "react";
import FilterPopOver from "~/components/Games/FilterPopOver";
import GamesCardContainer from "~/components/Games/GamesCardContainer";
import Banner from "~/components/Player/Dashboard/Banner";
import DashNavBar from "~/components/Player/Dashboard/DashNavBar";
import { Footer } from "~/components/common";
import Pagination from "~/components/common/Pagination";
import {
  Popover,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Separator } from "~/components/ui/separator";

const index = () => {
  return (
    <>
      <DashNavBar />
      <section className="p-4 md:px-24 md:pt-12">
        <h1 className="py-4 text-xl font-bold uppercase">Your booked games</h1>
        <Banner />

        <div className="my-12 rounded bg-white px-4 py-8 shadow-lg">
          <div className="mb-6 px-2">
            <h1 className="text-xl font-bold uppercase">Your booked games</h1>
            <p className="text-gray-500">Ready to book your next game?</p>
          </div>

          <div className="flex gap-4 p-2">
            <div className="flex gap-2 border p-2">
              <Search /> <Separator orientation="vertical" />{" "}
              <input
                type="text"
                className="w-80 border-0 outline-0 focus:outline-0"
              />
            </div>
            <div className="flex gap-2 border p-2">
              <Filter /> <Separator orientation="vertical" /> <p>Filter By</p>
              <Popover>
                <PopoverTrigger>
                  <ChevronDown />
                </PopoverTrigger>
                <FilterPopOver />
              </Popover>
            </div>
          </div>

          <GamesCardContainer />

          <Separator />

          <Pagination />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default index;
