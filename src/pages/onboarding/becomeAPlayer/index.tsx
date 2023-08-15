import { getCsrfToken, getProviders, signIn } from "next-auth/react";
import Image from "next/image";
// import Header from "../../components/header";
import type {
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from "next";
import { getServerAuthSession } from "~/server/auth";
import { NavBar } from "~/components/common";
import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import OnBoardingLayout from "~/components/layouts/OnboardingLayouts";

const Login = ({
    csrfToken,
    providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    // console.log(providers);
    return (
        <OnBoardingLayout>
            stuff
        </OnBoardingLayout>
    );
};

export default Login;

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    // If the user is already logged in, redirect.
    // Note: Make sure not to redirect to the same page
    // To avoid an infinite loop!
    const session = await getServerAuthSession(context);
    if (session) {
        return { redirect: { destination: "/" } };
    }

    //   get list of configured providers
    const providers = await getProviders();
    const csrfToken = await getCsrfToken(context);
    return {
        props: {
            providers,
            csrfToken,
        },
    };
};
