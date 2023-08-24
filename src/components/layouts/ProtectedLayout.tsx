/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Head from "next/head";
import type { FC, ReactNode } from "react";
import { Footer, NavBar } from "../common";
import type { GetServerSidePropsContext } from "next";
import { getServerAuthSession } from "~/server/auth";
import { useSession } from "next-auth/react";
import Navigate from "~/utils/Navigate";

export const AuthLayout: FC<{ children: ReactNode; rareOcassions?: boolean }> = ({
    children,
    rareOcassions,
}) => {
    const { data: LoggedInUser, status } = useSession()
    switch (status) {
        case "authenticated":
            return (
                <>
                    <Head>
                        <title>FootyPack | Home</title>
                        <meta name="description" content="Generated by create-t3-app" />
                        <link rel="icon" href="/images/favicon.ico" />
                    </Head>
                    {/* <NavBar className="md:mx-36" />
                    <div className={`w-full px-16 ${!rareOcassions && "py-5"} min-h-[30vh]`}> */}
                    {children}
                    {/* </div>
                    <div className={`min-h-[30vh] w-full px-16 py-5`}>{children}</div>
                    <Footer /> */}
                </>
            );
            break
        case "loading":
            return <div className="h-screen flex justify-center items-center p-4 md:p-24 text-xl font-bold text-center">Imagine a loading screen here, Imagination wan wunjure me</div>
            break
        default:
            return (<Navigate to="/auth/login" replace />)
    }

};
