import { useState, useEffect } from "react";
import SignUpTextBox from "./SignUpTextBox";
import { Form, Formik } from "formik";
import SignUpProgress from "./SignUpProgress";
import { AlertTriangle, EyeIcon, EyeOffIcon } from "lucide-react";
import { Label } from "~/components/ui/label";
import { api, signUpValidation } from "~/utils/api";
import { useSession } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import type { User } from "~/types";


const FormMain = () => {
  // get current loggedin User
  const { data: SessionData, status } = useSession();

  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [loggedInUserData, setLoggedInUserData] = useState<User>();
  const urlParams = useSearchParams();

  const handlePasswordShow = () => {
    setIsPasswordOpen(!isPasswordOpen);
  };

  const auth = urlParams.get("auth");
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      setLoggedInUserData(SessionData.user);
      router.push("/player");
    }
  }, [SessionData, status, router]);

  // useEffect(() => {
  //   if (status === "authenticated") {
  //     const timeout = setTimeout(() => {
  //       router.push("/player");
  //     }, 10000);

  //     return () => clearTimeout(timeout); 
  //   }
  // }, [status]);

  // submit function
  const updateUser = api.user.updateUser.useMutation({
    onSuccess: () => {
      return true;
    },
  });

  return (
    <>
      {status === "authenticated" ? (
        <div>
          <div> You are already logged in to this platform, you will be redirected to your dashboard in few seconds</div>
        </div>
      ) : (
        <div>
          <Formik
            initialValues={{
              firstName: loggedInUserData?.firstname ?? "",
              lastName: loggedInUserData?.lastname ?? "",
              email: loggedInUserData?.email ?? "",
              password: "",
              phoneNumber: "",
            }}
            enableReinitialize
            validationSchema={signUpValidation}
            onSubmit={(values, { setSubmitting }) => {
              
              updateUser.mutate({
                firstname: values.firstName,
                lastname: values.lastName,
                email: values.email,
                phoneNumber: values.phoneNumber,
                userType: "PLAYER",
                emailVerified: new Date(),
                verified: true,
              });

              router.push('/onboarding/becomeAPlayer/Otp')
            }}
          >
            {(formik) => (
              <Form autoComplete="off" className="w-full">
                <div className="py-4">
                  <div className="items-start gap-3 md:flex">
                    <SignUpTextBox
                      title="First Name"
                      idName="firstName"
                      inpType="text"
                      placeholder="Damilola"
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      handleTouch={formik.touched.firstName}
                      handleErrors={formik.errors.firstName}
                      value={formik.values.firstName}
                      // disabled={auth !== "email"}
                    />

                    <SignUpTextBox
                      title="Last Name"
                      idName="lastName"
                      inpType="text"
                      placeholder="Onyekachi"
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      handleTouch={formik.touched.lastName}
                      handleErrors={formik.errors.lastName}
                      value={formik.values.lastName}
                    />
                  </div>

                  <div className="items-start gap-3 md:flex">
                    <SignUpTextBox
                      title="Email"
                      idName="email"
                      inpType="email"
                      placeholder="domain@gmail.com"
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      handleTouch={formik.touched.email}
                      handleErrors={formik.errors.email}
                      value={formik.values.email}
                      // disabled
                    />

                    <SignUpTextBox
                      title="Phone Number"
                      idName="phoneNumber"
                      inpType="text"
                      placeholder="080123456"
                      handleChange={formik.handleChange}
                      handleBlur={formik.handleBlur}
                      handleTouch={formik.touched.phoneNumber}
                      handleErrors={formik.errors.phoneNumber}
                      value={formik.values.phoneNumber}
                    />
                  </div>

                  <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="password">
                      Password <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <input
                        className={`w-full border p-2 outline-none focus:border-primary focus:outline-none ${
                          formik.touched.password && formik.errors.password
                            ? "border-red-700"
                            : ""
                        }`}
                        type={!isPasswordOpen ? "password" : "text"}
                        id="password"
                        name="password"
                        placeholder="************"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                      />

                      <div
                        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                        onClick={handlePasswordShow}
                      >
                        {!isPasswordOpen ? <EyeIcon /> : <EyeOffIcon />}
                      </div>
                    </div>
                    {formik.touched.password && formik.errors.password ? (
                      <div className="flex items-center gap-2 text-xs text-red-700">
                        <AlertTriangle size={10} />
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                </div>

                <SignUpProgress
                  firstBtn="Login Instead"
                  secondBtn="signup"
                  progressValue={33}
                  onProceed={formik.handleSubmit}
                />
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};
export default FormMain;
