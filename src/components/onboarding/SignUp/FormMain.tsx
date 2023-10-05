import { configuredAuths } from "constants/appConstants";
import { Form, Formik } from "formik";
import { AlertTriangle, EyeIcon, EyeOffIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { Label } from "~/components/ui/label";
import { type updateUserType } from "~/pages/onboarding/becomeaplayer";
import { signUpValidation } from "~/utils/api";
import SignUpProgress from "./SignUpProgress";
import SignUpTextBox from "./SignUpTextBox";


const FormMain: React.FC<{ continueToNextStep: () => void; updateUser: updateUserType }> = ({ continueToNextStep, updateUser }) => {
  // get current loggedin User
  const { data: SessionData } = useSession();

  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const urlParams = useSearchParams();

  const handlePasswordShow = () => {
    setIsPasswordOpen(!isPasswordOpen);
  };

  const auth = urlParams.get("auth");

  // submit function
  const submit = updateUser.useMutation({
    onSuccess: (data) => {
      if (data.status === "Ok")
        continueToNextStep()
    },
  })

  return (
    <>
      <div>
        <Formik
          initialValues={{
            firstName: SessionData?.user?.firstname ?? "",
            lastName: SessionData?.user?.lastname ?? "",
            email: SessionData?.user?.email ?? "",
            password: "",
            phoneNumber: "",
          }}
          enableReinitialize
          validationSchema={signUpValidation}
          onSubmit={(values) => {
            submit.mutate({
              firstname: values.firstName,
              lastname: values.lastName,
              email: values.email,
              phoneNumber: values.phoneNumber,
              // userType: "PLAYER",
              verified: (auth !== null && configuredAuths.includes(auth)) ? true : false,
            });

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
                    disabled={configuredAuths.includes(auth as string)}
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
                    disabled={configuredAuths.includes(auth as string)}
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
                    disabled
                  />

                  <SignUpTextBox
                    title="Phone Number"
                    idName="phoneNumber"
                    inpType="text"
                    placeholder="08012345678"
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
                      className={`w-full border p-2 outline-none focus:border-primary focus:outline-none ${formik.touched.password && formik.errors.password
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
                progressValue={25}
                canProceed
                onProceed={formik.handleSubmit}
              // onProceed={() => {
              //   continueToNextStep()
              // }}
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
export default FormMain;
