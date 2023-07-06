import { type NextPage } from "next";
import { TurfCard } from "~/components/common";
import { Layout } from "~/components/layouts";
import { FilterDropdown, LocationSearch } from "~/components/turfs";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";

const Turfs: NextPage = () => {
  return (
    <Layout>
      <Card className="mt-4 h-full w-full border-none shadow">
        <div className="flex flex-col space-y-4 p-4">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-lg font-semibold uppercase leading-none tracking-tight">
                explore turfs
              </span>
              <span className="flex items-center space-x-1 text-sm text-muted-foreground">
                Choose the turf you'll like to play on
              </span>
            </div>

            <Button className="rounded-none">view on map</Button>
          </div>
          <div className="flex w-full justify-between">
            <label className="relative w-1/3">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 fill-black"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
              </span>
              <Separator
                orientation="vertical"
                className="absolute inset-y-0 left-10 my-auto h-3/4"
              />
              <Input
                className="placeholder:font-italitc border-slate-300 pl-12 focus-visible:ring-0 focus-visible:ring-inset"
                placeholder="Enter your keyword to search"
                type="text"
              />
            </label>
            <FilterDropdown />

            <div className="inline self-end">
              <LocationSearch />
            </div>
          </div>
        </div>

        <CardContent className="grid grid-cols-4 gap-6">
          <TurfCard />
          <TurfCard />
          <TurfCard />
          <TurfCard />
          <TurfCard />
          <TurfCard />
          <TurfCard />
          <TurfCard />
          <TurfCard />
          <TurfCard />
          <TurfCard />
        </CardContent>
        <Separator className="mx-auto my-4 w-[95%]" />
        <CardFooter className="flex justify-between">
          <p className="text-xl text-muted-foreground">Showing 1 of 1</p>

          <div className="flex gap-2 text-black">
            <Button variant={"link"} disabled>
              Prev
            </Button>
            <Button variant={"link"}>1</Button>
            <Button variant={"link"} disabled>
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Layout>
  );
};

export default Turfs;
