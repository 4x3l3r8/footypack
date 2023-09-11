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
import TurfTime from "./TurfTime";

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

export function TurfDays({
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
              <div className="h-[500px]">
                <FormField
                  control={form.control}
                  name="everyday"
                  render={({ field }) => (
                    <FormItem className="mb-2 flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-bold uppercase">
                          everyday
                        </FormLabel>
                      </div>

                      <TurfTime value={field.value} />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="monday"
                  render={({ field }) => (
                    <FormItem className="relative mb-2 flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-bold uppercase">
                          every monday
                        </FormLabel>
                      </div>

                      <TurfTime value={field.value} />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tuesday"
                  render={({ field }) => (
                    <FormItem className="relative mb-2 flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-bold uppercase">
                          every tuesday
                        </FormLabel>
                      </div>

                      <TurfTime value={field.value} />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="wednesday"
                  render={({ field }) => (
                    <FormItem className="relative mb-2 flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-bold uppercase">
                          every wednesday
                        </FormLabel>
                      </div>

                      <TurfTime value={field.value} />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="thursday"
                  render={({ field }) => (
                    <FormItem className="relative mb-2 flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-bold uppercase">
                          every thursday
                        </FormLabel>
                      </div>

                      <TurfTime value={field.value} />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="friday"
                  render={({ field }) => (
                    <FormItem className="relative mb-2 flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-bold uppercase">
                          every friday
                        </FormLabel>
                      </div>

                      <TurfTime value={field.value} />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="saturday"
                  render={({ field }) => (
                    <FormItem className="relative mb-2 flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-bold uppercase">
                          every saturday
                        </FormLabel>
                      </div>

                      <TurfTime value={field.value} />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="sunday"
                  render={({ field }) => (
                    <FormItem className="relative mb-2 flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="font-bold uppercase">
                          every sunday
                        </FormLabel>
                      </div>

                      <TurfTime value={field.value} />
                    </FormItem>
                  )}
                />
              </div>

              <SignUpProgress
                firstBtn="Back"
                secondBtn="Next"
                progressValue={70}
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
