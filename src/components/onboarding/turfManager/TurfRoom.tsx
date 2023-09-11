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
import Link from "next/link";

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

export function TurfRoom({
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
    defaultValues: {},
  });

  const mutationHandler = updateUser.useMutation({
    onSuccess: (data) => {
      if (data.status === "Ok") {
        continueToNextStep();
      }
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
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
              <div className="flex max-h-screen flex-wrap">
                <div className="basis-1/3 p-2">
                  <FormField
                    control={form.control}
                    name="changingRoom"
                    render={({ field }) => (
                      <FormItem className={`mb-2 flex ${
                        field.value ? 'border-green-600' : 'border-gray-300'
                      } flex-col items-center rounded-md border p-2 py-6`}>
                        <FormControl className="mb-8">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="">
                          <FormLabel className="font-bold uppercase">
                            changing room
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="basis-1/3 p-2">
                  <FormField
                    control={form.control}
                    name="lounge"
                    render={({ field }) => (
                      <FormItem className={`mb-2 flex ${
                        field.value ? 'border-green-600' : 'border-gray-300'
                      } flex-col items-center rounded-md border p-2 py-6`}>
                        <FormControl className="mb-8">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="">
                          <FormLabel className="font-bold uppercase">
                            lounge
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="basis-1/3 p-2">
                  <FormField
                    control={form.control}
                    name="restroom"
                    render={({ field }) => (
                      <FormItem className={`mb-2 flex ${
                        field.value ? 'border-green-600' : 'border-gray-300'
                      } flex-col items-center rounded-md border p-2 py-6`}>
                        <FormControl className="mb-8">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="">
                          <FormLabel className="font-bold uppercase">
                            restroom
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="basis-1/3 p-2">
                  <FormField
                    control={form.control}
                    name="outdoor"
                    render={({ field }) => (
                      <FormItem className={`mb-2 flex ${
                        field.value ? 'border-green-600' : 'border-gray-300'
                      } flex-col items-center rounded-md border p-1 py-6`}>
                        <FormControl className="mb-8">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="">
                          <FormLabel className="font-bold uppercase">
                            outdoor shower
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="basis-1/3 p-2">
                  <FormField
                    control={form.control}
                    name="indoor"
                    render={({ field }) => (
                      <FormItem className={`mb-2 flex ${
                        field.value ? 'border-green-600' : 'border-gray-300'
                      } flex-col items-center rounded-md border p-2 py-6`}>
                        <FormControl className="mb-8">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="">
                          <FormLabel className="font-bold uppercase">
                            indoor shower
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="basis-1/3 p-2">
                  <FormField
                    control={form.control}
                    name="firstaid"
                    render={({ field }) => (
                      <FormItem className={`mb-2 flex ${
                        field.value ? 'border-green-600' : 'border-gray-300'
                      } flex-col items-center rounded-md border p-2 py-6`}>
                        <FormControl className="mb-8">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="">
                          <FormLabel className="font-bold uppercase">
                            first aid kits
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="basis-1/3 p-2">
                  <FormField
                    control={form.control}
                    name="extinguisher"
                    render={({ field }) => (
                      <FormItem className={`mb-2 flex ${
                        field.value ? 'border-green-600' : 'border-gray-300'
                      } flex-col items-center rounded-md border p-2 py-6`}>
                        <FormControl className="mb-8">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="">
                          <FormLabel className="font-bold uppercase">
                            fire extinguisher
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="basis-1/3 p-2">
                  <FormField
                    control={form.control}
                    name="parking"
                    render={({ field }) => (
                      <FormItem className={`mb-2 flex ${
                        field.value ? 'border-green-600' : 'border-gray-300'
                      } flex-col items-center rounded-md border p-2 py-6`}>
                        <FormControl className="mb-8">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="">
                          <FormLabel className="font-bold uppercase">
                            parking space
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="basis-1/3 p-2">
                  <FormField
                    control={form.control}
                    name="wifi"
                    render={({ field }) => (
                      <FormItem className={`mb-2 flex ${
                        field.value ? 'border-green-600' : 'border-gray-300'
                      } flex-col items-center rounded-md border p-1 py-6`}>
                        <FormControl className="mb-8">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="">
                          <FormLabel className="font-bold uppercase">
                            Wifi
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <SignUpProgress
                firstBtn="Back"
                secondBtn="Next"
                progressValue={50}
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
