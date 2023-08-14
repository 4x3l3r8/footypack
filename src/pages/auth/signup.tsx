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
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const SignUp = ({
  csrfToken,
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  // console.log(providers);

  // get usertype from url
  const searchParams = useSearchParams()
  const type = searchParams.get('t');
  console.log(type)
  return (
    <div className="h-auto w-screen overflow-x-hidden">
      <NavBar />

      <div className="flex min-h-[91vh] w-full">
        <div className="hidden w-1/2 bg-slate-400 md:block">e</div>
        <div className="flex w-1/2 items-center justify-center bg-slate-100">
          <Card>
            <CardHeader className="text-center">
              <h3 className="scroll-m-20 font-barlow text-2xl font-bold uppercase italic tracking-tight">
                welcome to footypack
              </h3>
              <p className="text-base text-muted-foreground">
                Select your preferred sign up method to continue
              </p>
            </CardHeader>
            <CardContent className="flex flex-col justify-center">
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              {providers &&
                Object.values(providers).map((provider) => (
                  <Button
                    variant={"outline"}
                    key={provider.name}
                    className="rounded-none"
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onClick={() => signIn(provider.id, { callbackUrl: "" })}
                  >
                    Sign in with {provider.name}
                  </Button>
                ))}
              <div className="my-4 flex w-full items-center justify-evenly">
                <Separator className="w-2/5" />
                Or
                <Separator className="w-2/5" />
              </div>

              <Button disabled>Sign up with email (unavailable)</Button>

              <div className="flex flex-col items-center">
                <p className="text-center text-sm">Already have an account?</p>
                <Link href={"/auth/login"}>
                  <Button variant={"link"} className="text-xs p-0" size={"sm"}>
                    login instead
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

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
