import { getCsrfToken, getProviders, useSession } from "next-auth/react";
// import Header from "../../components/header";
import type {
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from "next";
import { useSearchParams } from "next/navigation";
import OnBoardingLayout from "~/components/layouts/OnboardingLayouts";
import { SignUpForm } from "~/components/onboarding/SignupForm";
import { getServerAuthSession } from "~/server/auth";
import Otp from "~/components/onboarding/Otp";
import { BasicInformation } from "~/components/onboarding/BasicInformation";
import { PreferredPosition } from "~/components/onboarding/PreferredPosition";
import { useState } from "react";

const BecomeAPlayer = ({
    csrfToken,
    providers,
    // session: SessionData
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    // get auth method for signup 
    const searchParams = useSearchParams()
    const method = searchParams.get("auth")
    const [index, setIndex] = useState(3)

    const onboarding = {
        1: <SignUpForm />,
        2: <Otp />,
        3: <BasicInformation />,
        4: <PreferredPosition />
    }

    // get session data
    const { data: SessionData, status } = useSession()

    return (
        <OnBoardingLayout>
            {onboarding[index as keyof typeof onboarding]}
        </OnBoardingLayout>
    );
};

export default BecomeAPlayer;

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    // If the user is already logged in, redirect.
    // Note: Make sure not to redirect to the same page
    // To avoid an infinite loop!
    const session = await getServerAuthSession(context);
    if (session && session.user.userType) {
        return { redirect: { destination: "/" } };
    }

    //   get list of configured providers
    const providers = await getProviders();
    const csrfToken = await getCsrfToken(context);
    return {
        props: {
            providers,
            csrfToken,
            // session
        },
    };
};
