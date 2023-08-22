// import Header from "../../components/header";
import type { ReactNode } from "react";
import { NavBar } from "~/components/common";
import { Card } from "~/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const OnBoardingLayout = ({
    children
}: { children: ReactNode }) => {
    // console.log(providers);
    return (
        <div className="h-auto w-screen overflow-x-hidden">
            <NavBar />

            <div className="flex min-h-[91vh] w-full">
                <div className="hidden w-1/2 bg-slate-400 md:block">e</div>
                <div className="flex flex-col md:w-1/2 items-center justify-center bg-slate-100 py-6">
                    <Button className="self-start md:ml-12" variant={"ghost"} asChild>
                        <Link href={"/"}>
                            <ChevronLeft className="mr-2 h-5 w-5" />
                            <h3 className="text-base font-semibold">Go back</h3>
                        </Link>
                    </Button>
                    {/* <Card> */}
                    {children}
                    {/* </Card> */}
                </div>
            </div>
        </div>
    );
};

export default OnBoardingLayout;