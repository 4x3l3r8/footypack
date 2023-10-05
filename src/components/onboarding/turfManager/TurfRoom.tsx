/* eslint-disable @typescript-eslint/no-misused-promises */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "~/components/ui/form";

import { Checkbox } from "~/components/ui/checkbox";
import { Skeleton } from "~/components/ui/skeleton";
import { type updateUserType } from "~/pages/onboarding/becomeaplayer";
import { type IturfCreationDeets } from "~/pages/onboarding/turfmanager";
import { api } from "~/utils/api";
import SignUpProgress from "../SignUp/SignUpProgress";

interface IAppProps {
  continueToNextStep: () => void;
  
  updateParentState: (
    prop: keyof IturfCreationDeets,
    value: string | number | number[]
  ) => void;
}

const formSchema = z.object({
  facilities: z.array(z.number()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

export function TurfRoom({
  continueToNextStep,
  updateParentState,
}: IAppProps) {


  const { data: facilities, isLoading } = api.utils.getAllPitchSizes.useQuery();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      facilities: []
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    updateParentState("turfFacilities", values.facilities)
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
                {isLoading ?
                  <Skeleton className="h-80 w-full" />
                  :
                  <FormField
                    control={form.control}
                    name="facilities"
                    render={() => (
                      <FormItem className="flex flex-wrap justify-center">
                        {facilities && facilities?.map((facility) => (
                          <FormField
                            key={facility.id}
                            control={form.control}
                            name="facilities"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={facility.id}
                                  // className="flex flex-row mb-2 items-start space-x-3 space-y-0 rounded-md border p-4"
                                  className={`m-1 basis-1/4 flex ${field.value ? 'border-green-600' : 'border-gray-300'
                                    } flex-col items-center rounded-md border p-2 py-6`}
                                >
                                  <FormControl className="mb-8">
                                    <Checkbox
                                      id={`check-${facility.id}`}
                                      checked={field.value?.includes(facility.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, facility.id])
                                          : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== facility.id
                                            )
                                          )
                                      }}
                                    />
                                  </FormControl>
                                  <div className="">
                                    <FormLabel htmlFor={`check-${facility.id}`} className="font-bold uppercase">
                                      changing room
                                    </FormLabel>
                                  </div>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                }
              </div>

              <SignUpProgress
                firstBtn="Back"
                secondBtn="Next"
                progressValue={50}
                canProceed={true}
                onProceed={() => null}
              />
            </form>
          </Form>
        </div>
      </section>
    </>
  );
}
