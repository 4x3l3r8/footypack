import { zodResolver } from "@hookform/resolvers/zod";
import { City } from "@prisma/client";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

import { type updateUserType } from "~/pages/onboarding/becomeaplayer";
import { type IturfCreationDeets } from "~/pages/onboarding/turfmanager";
import { api } from "~/utils/api";
import SignUpProgress from "../SignUp/SignUpProgress";
import { Checkbox } from "~/components/ui/checkbox";
import { ImagePlus } from "lucide-react";

interface IAppProps {
  continueToNextStep: () => void;
  updateUser: updateUserType;
  updateParentState: (
    prop: keyof IturfCreationDeets,
    value: string | number
  ) => void;
}

const formSchema = z.object({
  turfStreet: z
    .string()
    .min(2, { message: "Name should have at least 2 characters" })
    .max(255, { message: "Name is too long" }),
  turfCity: z.number(),
  turfState: z.number(),
  turfZip: z.string().optional(),
});

export function TurfImage({
  continueToNextStep,
  updateUser,
  updateParentState,
}: IAppProps) {
  const [selectedStateId, setSelectedStateId] = React.useState(0);
  const [filteredCities, setFilteredCities] = React.useState<City[]>();

  const { data: statesWithCityList, isLoading } =
    api.utils.getAllStates.useQuery({ includeCities: true });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      turfStreet: "",
      turfCity: 1,
      turfState: 1,
      turfZip: "",
    },
  });

  const mutationHandler = updateUser.useMutation({
    onSuccess: (data) => {
      if (data.status === "Ok") {
        continueToNextStep();
      }
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    updateParentState("turfStreet", values.turfStreet);
    updateParentState("turfCity", values.turfCity);
    updateParentState("turfState", values.turfState);
    continueToNextStep();
  };

  return (
    <>
      <section className="w-11/12 md:w-10/12">
        <div className="rounded-sm bg-white p-4 shadow-lg">
          <div className="my-4">
            <h1 className="font-bold uppercase">select one or more options</h1>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="relative flex h-[500px] rounded-xl flex-col items-center justify-center border-2 border-dashed">
                <ImagePlus size={50} className="mb-4 text-gray-500" />
                <h1 className="mb-2 font-bold uppercase">
                  drag images of your turfs here
                </h1>
                <p className="text-gray-500 capitalize">
                  add at least 5 images of your turf here
                </p>

                <div className="w-auto rounded-full max-w-sm items-center gap-1.5 absolute bottom-12">
                  <Input type="file" multiple />
                </div>
              </div>

              <SignUpProgress
                firstBtn="Back"
                secondBtn="Next"
                progressValue={60}
                canProceed={true}
                onProceed={() => null}
                // onProceed={() => {
                //   continueToNextStep()
                // }}
              />
            </form>
          </Form>
        </div>
      </section>
    </>
  );
}
