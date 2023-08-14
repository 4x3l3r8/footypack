import { type NextPage } from "next";
import Link from "next/link";
import { NavBar } from "~/components/common";
import { Card, CardContent, CardHeader } from "~/components/ui/card";

const OnboardingPage: NextPage = () => {
  return (
    <div className="h-auto w-screen overflow-x-hidden">
      <NavBar />

      <div className="flex min-h-[91vh] w-full">
        <Card className="mx-auto my-auto w-1/2 h-[50vh] items-center justify-center border-none shadow-2xl flex flex-col">
          <CardHeader className="text-center">
            <h3 className="scroll-m-20 font-barlow text-2xl font-bold uppercase italic tracking-tight">
              welcome superstar!
            </h3>
            <p className="text-base text-muted-foreground">
              How would you like to be identified on footypack?
            </p>
          </CardHeader>
          <CardContent className="flex justify-around w-full gap-4 p-5 text-center">
            {/* player */}
            <Link href={'/auth/signup?t=1'}>
              <Card className="h-52 w-52 flex flex-col hover:scale-105 transition-all cursor-pointer bg-slate-200 p-2">
                <div className="mt-auto">
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Player
                  </h4>
                  <small className="text-sm font-thin leading-none text-center">
                    You want to book a sport turf to engage in games
                  </small>
                </div>
              </Card>
            </Link>
            {/* turf manager */}
            <Link href={'/auth/signup?t=2'}>
              <Card className="h-52 w-52 flex flex-col hover:scale-105 transition-all cursor-pointer bg-slate-200 p-2">
                <div className="mt-auto">
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    Turf Owner
                  </h4>
                  <small className="text-sm font-thin leading-none text-center">
                    You own a registered turf where players can play sport
                  </small>
                </div>
              </Card>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OnboardingPage;
