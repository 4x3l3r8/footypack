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

export function TurfSelect({
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
              <div className="max-h-80 overflow-y-scroll">
              <FormField
                control={form.control}
                name="five"
                render={({ field }) => (
                  <FormItem className="flex flex-row mb-2 items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-bold uppercase">
                        5-a-side
                      </FormLabel>
                      <FormDescription className="-ml-6">
                        This pitch allow 5 players on each side, can accommodate
                        a total of 10 players for a match
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="six"
                render={({ field }) => (
                  <FormItem className="flex flex-row mb-2 items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-bold uppercase">
                        6-a-side
                      </FormLabel>
                      <FormDescription className="-ml-6">
                        This pitch allow 5 players on each side, can accommodate
                        a total of 10 players for a match
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="seven"
                render={({ field }) => (
                  <FormItem className="flex flex-row mb-2 items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-bold uppercase">
                        7-a-side
                      </FormLabel>
                      <FormDescription className="-ml-6">
                        This pitch allow 5 players on each side, can accommodate
                        a total of 10 players for a match
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="eight"
                render={({ field }) => (
                  <FormItem className="flex flex-row mb-2 items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-bold uppercase">
                        8-a-side
                      </FormLabel>
                      <FormDescription className="-ml-6">
                        This pitch allow 5 players on each side, can accommodate
                        a total of 10 players for a match
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="eleven"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="font-bold uppercase">
                        11-a-side
                      </FormLabel>
                      <FormDescription className="-ml-6">
                        This pitch allow 5 players on each side, can accommodate
                        a total of 10 players for a match
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              </div>

              <SignUpProgress
                firstBtn="Back"
                secondBtn="Next"
                progressValue={40}
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
