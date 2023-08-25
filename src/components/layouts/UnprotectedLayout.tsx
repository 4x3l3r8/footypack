/* eslint-disable @typescript-eslint/restrict-template-expressions */
import Head from "next/head";
import type { FC, ReactNode } from "react";
import { Footer, NavBar } from "../common";
import DashNavBar from "../Player/Dashboard/DashNavBar";
import { useSession } from 'next-auth/react'

export const Layout: FC<{ children: ReactNode; rareOcassions?: boolean }> = ({
  children,
  rareOcassions,
}) => {
  const { data: UserData } = useSession();
  return (
    <>
      <Head>
        <title>FootyPack</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      {UserData ? <DashNavBar /> : <NavBar />}
      <div className={`w-full px-2 md:px-16 ${!rareOcassions && "py-5"} min-h-[30vh]`}>
        {children}
      </div>
      {/* <div className={`min-h-[30vh] w-full px-16 py-5`}>{children}</div> */}
      <Footer />
    </>
  );
};
