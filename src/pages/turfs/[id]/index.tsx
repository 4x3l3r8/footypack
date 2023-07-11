import { ChevronLeft, MapPin, ShareIcon } from "lucide-react";
import { type NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Carousel, Share } from "~/components/common";
import { Layout } from "~/components/layouts";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

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
              <h1 className="scroll-m-20 text-2xl font-extrabold uppercase tracking-tight lg:text-3xl">
                AOCOED Soccer field (Now LASUED Soccer Field)
              </h1>
              <div className="flex items-center text-xl uppercase">
                <MapPin />
                <Button variant={"link"}>Ojo 102101, Lagos</Button>
              </div>
            </div>
            <Share />
          </div>

          {/* <Image  /> */}
          <div className="mt-9 h-52 w-full rounded-lg bg-slate-500">
            <Carousel />
          </div>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default SingleTurf;
