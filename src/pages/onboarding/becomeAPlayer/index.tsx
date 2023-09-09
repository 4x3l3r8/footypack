import { getCsrfToken, getProviders, useSession } from "next-auth/react";
// import Header from "../../components/header";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import OnBoardingLayout from "~/components/layouts/OnboardingLayouts";
import { SignUpForm } from "~/components/onboarding/SignupForm";
import { getServerAuthSession } from "~/server/auth";
import Otp from "~/components/onboarding/Otp";
import { BasicInformation } from "~/components/onboarding/BasicInformation";
import { PreferredPosition } from "~/components/onboarding/PreferredPosition";
import { useState } from "react";
import SignUpProgress from "~/components/onboarding/SignUp/SignUpProgress";
import { api, signUpValidation } from "~/utils/api";
import { useSearchParams, useRouter } from "next/navigation";
import type { User } from "~/types";

const BecomeAPlayer = ({
  csrfToken,
  providers,
}: // session: SessionData
InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [index, setIndex] = useState(1);
  const [progressValue, setProgressValue] = useState(0);

  const updateUser = api.user.updateUser.useMutation({
    onSuccess: () => {
      setProgressValue(progressValue+33)
    if (index < 4) {
      setIndex(index + 1);
    }
    },
  });


  // get auth method for signup
  const searchParams = useSearchParams();
  const method = searchParams.get("auth");

  const onboarding = {
    1: <SignUpForm />,
    2: <Otp />,
    3: <BasicInformation />,
    4: <PreferredPosition />,
  };

  // get session data
  const { data: SessionData, status } = useSession();

  return (
    <OnBoardingLayout>
      {onboarding[index as keyof typeof onboarding]}

      <SignUpProgress
        firstBtn="back"
        secondBtn="next"
        progressValue={progressValue}
        onProceed={'ade'}
      />
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
