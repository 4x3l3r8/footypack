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
import { SignUpForm } from "~/components/onboarding/SignupForm";
import { getServerAuthSession } from "~/server/auth";
import { api } from "~/utils/api";

export type updateUserType = typeof api.user.createUser

const BecomeAPlayer = () => {
  const [index, setIndex] = useState(1);
  const urlParams = useSearchParams();

  const auth = urlParams.get("auth");


  const updateUser = api.user.createUser

  const continueToNext = () => {
    // setProgressValue(progressValue + 33)
    if (index < 4) {
      setIndex((prev) => {
        if (prev === 1) {
          if (auth && auth !== "email") {
            return 3
          } else {
            return 2
          }
        } else {
          return (prev + 1)
        }
      });
    }
  }


  const onboarding = {
    1: <SignUpForm continueToNextStep={continueToNext} updateUser={updateUser} />,
    2: <Otp continueToNextStep={continueToNext} updateUser={updateUser} />,
    3: <BasicInformation continueToNextStep={continueToNext} updateUser={updateUser} />,
    4: <PreferredPosition continueToNextStep={continueToNext} updateUser={updateUser} />,
  };

  return (
    <OnBoardingLayout>
      {onboarding[index as keyof typeof onboarding]}

      {/* <SignUpProgress
        firstBtn="back"
        secondBtn="next"
        progressValue={progressValue}
        // onProceed={'ade'}
      /> */}
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
