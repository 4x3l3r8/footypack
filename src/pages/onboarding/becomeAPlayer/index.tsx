import { getCsrfToken, getProviders } from "next-auth/react";
// import Header from "../../components/header";
import type {
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from "next";
import OnBoardingLayout from "~/components/layouts/OnboardingLayouts";
import { getServerAuthSession } from "~/server/auth";
import { BasicInformation } from "~/components/onboarding/BasicInformation";

const BecomeAPlayer = ({
    csrfToken,
    providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    // console.log(providers);
    return (
        <OnBoardingLayout>
            <BasicInformation />
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
