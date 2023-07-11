import { NextPage } from "next";
import { NavBar } from "~/components/common";
import { Card, CardContent, CardHeader } from "~/components/ui/card";

const OnboardingPage: NextPage = () => {
  return (
    <div className="h-auto w-screen overflow-x-hidden">
      <NavBar />

      <div className="flex min-h-[91vh] w-full">
        <Card className="mx-auto my-auto w-2/3 border-none shadow-2xl">
          <CardHeader className="text-center">
            <h3 className="scroll-m-20 font-barlow text-2xl font-bold uppercase italic tracking-tight">
              welcome superstar!
            </h3>
            <p className="text-base text-muted-foreground">
              How would you like to be identified on footypack?
            </p>
          </CardHeader>
          <CardContent className="flex justify-around gap-4 p-5 text-center">
            <Card className="h-52 w-52 hover:scale-105 transition-all cursor-pointer bg-slate-200 p-2">
              Player
            </Card>
            <Card className="h-52 w-52 hover:scale-105 transition-all cursor-pointer bg-slate-200 p-2">
              Turf Owner
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OnboardingPage;
