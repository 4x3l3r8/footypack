import { DayOfWeek, GameTime } from "@prisma/client";
import type {
    GetServerSidePropsContext
} from "next";
import { getCsrfToken, getProviders } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import OnBoardingLayout from "~/components/layouts/OnboardingLayouts";
import { TurfAddress, TurfDays, TurfImage, TurfName, TurfPrice, TurfRoom, TurfSelect } from "~/components/onboarding/turfManager";
import { toast } from "~/components/ui/use-toast";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/utils/api";


export type updateUserType = typeof api.user.createUser


export interface IturfCreationDeets {
    turfName: string,
    turfDescription: string,
    turfStreet: string,
    turfCity: number,
    turfState: number,
    turfPrice: string,
    pitchSizes: number[],
    turfFacilities: number[],
    turfDays: {
        day: DayOfWeek;
        startTime: string;
        stopTime: string
    }[],
    turfImages: {
        name: string,
        size: number,
        base64Url: string
    }[]
}

const TurfManager = () => {
    const [index, setIndex] = useState(1);

    const [turfCreationDeets, setTurfCreationDeets] = useState<IturfCreationDeets>({
        turfName: "",
        turfDescription: "",
        turfStreet: "",
        turfCity: 0,
        turfState: 0,
        pitchSizes: [],
        turfFacilities: [],
        turfDays: [],
        turfImages: [],
        turfPrice: "0",
    })

    const updateCreationDeets: (prop: keyof typeof turfCreationDeets, value: string | number | number[]) => void = (prop, value) => {
        setTurfCreationDeets((prev) => ({
            ...prev,
            [prop]: value
        }))
    }

    const urlParams = useSearchParams();

    const auth = urlParams.get("auth");


    const updateUser = api.user.createUser.useMutation({
        onSuccess(data, variables, context) {
            toast({
                description: data.message as string
            })
        },
    })

    const continueToNext = () => {
        if (index < 8) {
            setIndex((prev) => (prev + 1))
        }
    }

    useEffect(() => {
        if (index === 8) {
            debugger
            updateUser.mutate({
                userType: "TURF_OWNER",
                turfName: turfCreationDeets.turfName,
                turfDescription: turfCreationDeets.turfDescription,
                turfCity: turfCreationDeets.turfCity,
                turfFacilites: turfCreationDeets.turfFacilities,
                turfLocation: turfCreationDeets.turfStreet,
                turfPitches: turfCreationDeets.pitchSizes,
                turfPrice: turfCreationDeets.turfPrice,
                turfState: turfCreationDeets.turfState,
                turfGameDays: [...turfCreationDeets.turfDays.map((time) => ({
                    day: time.day,
                    stopTime: time.stopTime,
                    startTime: time.startTime
                }))]
                // turfImage: turfCreationDeets.turfImages.map(image => image.base64Url)
            })
        }
    }, [index])



    const onboarding = {
        1: <TurfName continueToNextStep={continueToNext} updateParentState={updateCreationDeets} />,
        2: <TurfAddress continueToNextStep={continueToNext} updateParentState={updateCreationDeets} />,
        3: <TurfSelect continueToNextStep={continueToNext} updateParentState={updateCreationDeets} />,
        4: <TurfRoom continueToNextStep={continueToNext} updateParentState={updateCreationDeets} />,
        5: <TurfImage continueToNextStep={continueToNext} updateParentState={updateCreationDeets} />,
        6: <TurfDays continueToNextStep={continueToNext} updateParentState={updateCreationDeets} />,
        7: <TurfPrice continueToNextStep={continueToNext} updateParentState={updateCreationDeets} />,
        8: <div className="flex flex-col items-center">
            <div className="border-t-transparent border-solid animate-spin  rounded-full border-primary border-4 h-24 w-24"></div>
            <span className="mt-3 font-medium text-xl text-center">Creating your Account...</span>
        </div>,
    };

    return (
        <OnBoardingLayout hideBackButton={index >= 8}>
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
    if (!session) {
        return { redirect: { destination: "/onboarding" } }
    }
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
