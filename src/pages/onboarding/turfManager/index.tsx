import type {
    GetServerSidePropsContext
} from "next";
import { getCsrfToken, getProviders } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import OnBoardingLayout from "~/components/layouts/OnboardingLayouts";
import { BasicInformation } from "~/components/onboarding/BasicInformation";
import Otp from "~/components/onboarding/Otp";
import { PreferredPosition } from "~/components/onboarding/PreferredPosition";
import { TurfAddress } from "~/components/onboarding/turfManager";
import { TurfName } from "~/components/onboarding/turfManager/TurfName";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/utils/api";

export type updateUserType = typeof api.user.createUser

export interface IturfCreationDeets {
    turfName: string,
    turfDescription: string,
    turfStreet: string,
    turfCity: number,
    turfState: number,
    turfPrice: number
}

const TurfManager = () => {
    const [index, setIndex] = useState(1);

    const [turfCreationDeets, setTurfCreationDeets] = useState<IturfCreationDeets>({
        turfName: "",
        turfDescription: "",
        turfStreet: "",
        turfCity: 0,
        turfState: 0,
        turfPrice: 0,
    })

    const updateCreationDeets: (prop: keyof typeof turfCreationDeets, value: string | number) => void = (prop, value) => {
        setTurfCreationDeets((prev) => ({
            ...prev,
            [prop]: value
        }))
    }

    const urlParams = useSearchParams();

    const auth = urlParams.get("auth");


    const updateUser = api.user.createUser

    const continueToNext = () => {
        // setProgressValue(progressValue + 33)
        if (index < 4) {
            setIndex((prev) => (prev + 1))
        }
    }



    const onboarding = {
        1: <TurfName continueToNextStep={continueToNext} updateUser={updateUser} updateParentState={updateCreationDeets} />,
        2: <TurfAddress continueToNextStep={continueToNext} updateUser={updateUser} updateParentState={updateCreationDeets} />,
    };

    return (
        <OnBoardingLayout>
            {onboarding[index as keyof typeof onboarding]}
        </OnBoardingLayout>
    );
};

export default TurfManager;

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    // If the user is already logged in, redirect.
    // Note: Make sure not to redirect to the same page
    // To avoid an infinite loop!
    const session = await getServerAuthSession(context);
    if (session && session.user.userType) {
        return { redirect: { destination: "/dashboard" } };
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
