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
