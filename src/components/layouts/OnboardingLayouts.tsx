// import Header from "../../components/header";
import type { ReactNode } from "react";
import { NavBar } from "~/components/common";
import { Card } from "~/components/ui/card";

const OnBoardingLayout = ({
    children
}: { children: ReactNode }) => {
    // console.log(providers);
    return (
        <div className="h-auto w-screen overflow-x-hidden">
            <NavBar />

            <div className="flex min-h-[91vh] w-full">
                <div className="hidden w-1/2 bg-slate-400 md:block">e</div>
                <div className="flex md:w-1/2 items-center justify-center bg-slate-100 py-6">
                    {/* <Card> */}
                        {children}
                    {/* </Card> */}
                </div>
            </div>
        </div>
    );
};

export default OnBoardingLayout;