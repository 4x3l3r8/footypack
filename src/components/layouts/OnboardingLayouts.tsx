// import Header from "../../components/header";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { NavBar } from "~/components/common";
import { Button } from "../ui/button";

const OnBoardingLayout = ({
    children,
    hideBackButton
}: { children: ReactNode; hideBackButton?: boolean }) => {
    // console.log(providers);
    return (
        <div className="h-auto w-screen overflow-x-hidden">
            <NavBar />

            <div className="flex min-h-[91vh] w-full">
                <div className="hidden w-1/2 bg-slate-400 md:block">e</div>
                <div className="flex flex-col md:w-1/2 items-center justify-center bg-slate-100 py-6">
                    <Button className={`${hideBackButton ? "hidden" : ""} self-start md:ml-12`} variant={"ghost"} asChild>
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