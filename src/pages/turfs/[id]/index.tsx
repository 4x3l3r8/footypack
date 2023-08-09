import { ChevronLeft, MapPin, ShareIcon } from "lucide-react";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Carousel, Share } from "~/components/common";
import { Layout } from "~/components/layouts";
import { AboutTurfTab } from "~/components/turfs/AboutTab";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

const SingleTurf: NextPage = () => {
  return (
    <Layout rareOcassions>
      <Card className="mb-4 rounded-t-none border-t-0">
        <CardContent className="py-3">
          <Button variant={"ghost"} asChild>
            <Link href={"/turfs"}>
              <ChevronLeft className="mr-2 h-5 w-5" />
              <h3 className="text-base font-semibold">Go back</h3>
            </Link>
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="pt-4">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1 className="ft-maga scroll-m-20 text-2xl font-extrabold uppercase tracking-tight lg:text-3xl">
                AOCOED Soccer field (Now LASUED Soccer Field)
              </h1>
              <div className="flex items-center text-xl uppercase">
                <MapPin />
                <Button variant={"link"}>Ojo 102101, Lagos</Button>
              </div>
            </div>
            <Share />
          </div>

          {/* Image carousel  */}
          <div className="my-9 h-52 w-full rounded-lg">
            <Carousel />
          </div>

          <Tabs defaultValue="0" className="w- w-full">
            <TabsList className="italics -pb-1 w-full justify-start gap-10 rounded-none border-b-2 bg-transparent font-bold transition-all">
              <TabsTrigger
                className="rounded-none py-0 text-2xl font-medium italic data-[state=active]:border-b-4 data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                value="0"
              >
                About
              </TabsTrigger>
              <TabsTrigger
                className="rounded-none py-0 text-2xl font-medium italic data-[state=active]:border-b-4 data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                value="1"
              >
                Reviews
              </TabsTrigger>
              <TabsTrigger
                className="rounded-none py-0 text-2xl font-medium italic data-[state=active]:border-b-4 data-[state=active]:border-b-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                value="2"
              >
                Games
              </TabsTrigger>
            </TabsList>
            <TabsContent value="0" className="w-full transition-all">
              <AboutTurfTab />
            </TabsContent>
            <TabsContent value="1" className="w-full transition-all">
              <div className="mt-12 flex flex-col space-y-3">
                <span className="text-lg font-medium uppercase italic">
                  Pick game date and time
                </span>
                <p className="text-justify text-lg text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  enim repellat, saepe odio nesciunt libero rem quibusdam
                  temporibus aspernatur tenetur facilis tempora voluptatibus
                  tempore.
                </p>
                <Button
                  size={"lg"}
                  className="mb-0 mt-7 h-full w-fit rotate-[12.5deg] -skew-y-12 px-9 py-6"
                >
                  <span className="rotate-0 skew-y-0 text-xl">FIND TURFS</span>
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="2" className=" w-full transition-all">
              <div className="mt-12 flex flex-col space-y-3">
                <span className="text-lg font-medium uppercase italic">
                  Pay and get ticket
                </span>
                <p className="text-justify text-lg text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  enim repellat, saepe odio nesciunt libero rem quibusdam
                  temporibus aspernatur tenetur facilis tempora voluptatibus
                  tempore.
                </p>
                <Button
                  size={"lg"}
                  className="mb-0 mt-7 h-full w-fit rotate-[12.5deg] -skew-y-12 px-9 py-6"
                >
                  <span className="rotate-0 skew-y-0 text-xl">FIND TURFS</span>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default SingleTurf;
