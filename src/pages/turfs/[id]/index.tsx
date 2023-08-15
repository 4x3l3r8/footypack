import { ChevronLeft, MapPin, ShareIcon } from "lucide-react";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Carousel, Share } from "~/components/common";
import { Layout } from "~/components/layouts";
import { AboutTurfTab } from "~/components/turfs/AboutTab";
import { Review } from "~/components/turfs/BookingGame/Review";
import { TurfGames } from "~/components/turfs/TurfGames";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

const SingleTurf: NextPage = () => {
  const numberOfReviews = 8; // Number of times to repeat the Review component
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

{/* About tab content */}
            <TabsContent value="0" className="w-full transition-all">
              <AboutTurfTab />
            </TabsContent>

{/* Reviews tab content */}
            <TabsContent value="1" className="w-full transition-all">
              <div className='mx-10 grid lg:grid-cols-2 md:grid-cols-2 gap-4 mt-8'>
            {Array.from({ length: numberOfReviews }).map((_, index) => (
        <Review key={index} />
      ))}
      </div>

            </TabsContent>

{/* Games tab content */}
            <TabsContent value="2" className=" w-full transition-all">
              <div className=" flex items-center space-y-3 space-x-3">
                  <button className="  text-xl text-white uppercase bg-[#006716] rotate-[12.5deg] px-6 py-4 -skew-y-12">
                    <span className="rotate-0 skew-y-0"> upcoming</span>
                   </button>
                  <button className=" text-xl text-black uppercase bg-[#E0E0E0] rotate-[12.5deg] px-6 py-4 -skew-y-12">
                    <span className="rotate-0 skew-y-0">completed</span>
                    </button>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-4 grid-cols gap-4'>
                    {Array.from({ length: numberOfReviews }).map((_, index) => (
        <TurfGames key={index} />
      ))}
      </div>

            </TabsContent>
          </Tabs>

        </CardContent>
      </Card>
    </Layout>
  );
};

export default SingleTurf;
