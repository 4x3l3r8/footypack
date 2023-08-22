import { GetServerSidePropsContext } from "next";
import React from "react";
import NavBar from "~/components/Player/Dashboard/NavBar";
import Hero from "~/components/Player/Hero";
import PlayerEvent from "~/components/Player/PlayerEvent";
import PlayerScheduleGame from "~/components/Player/PlayerScheduleGame";
import TurfSect from "~/components/Player/TurfSect";
import { Footer, NavBar } from "~/components/common";
import { AuthLayout } from "~/components/layouts/ProtectedLayout";
import { getServerAuthSession } from "~/server/auth";


const index = () => {
  return (
    <AuthLayout>
      <div className="bg-slate-50">
        <NavBar />
        <Hero />
        <TurfSect />
        <PlayerScheduleGame />
        <PlayerEvent />
        <Footer />
      </div>
    </AuthLayout>
  );
};

export default index;

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   // If the user is already logged in, redirect.
//   // Note: Make sure not to redirect to the same page
//   // To avoid an infinite loop!
//   const session = await getServerAuthSession(context);
//   const { em } = session?.user
//   if (!session) {
//     return { redirect: { destination: "/" } };
//   } else {
//     return {
//       props: {
//         session
//       },
//     };
//   }
// };
