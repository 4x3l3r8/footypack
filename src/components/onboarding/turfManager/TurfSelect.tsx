/* eslint-disable @typescript-eslint/no-misused-promises */
import { zodResolver } from "@hookform/resolvers/zod";
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

export function TurfSelect({
  continueToNextStep,
  updateParentState,
}: IAppProps) {

  const { data: pitchSizes, isLoading } = api.utils.getAllPitchSizes.useQuery();

  const formSchema = z.object({
    pitchSize: z.array(z.number()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pitchSize: []
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    updateParentState("pitchSizes", values.pitchSize);
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
                {isLoading ?
                  <Skeleton className="h-80 w-full" />
                  :
                  <FormField
                    control={form.control}
                    name="pitchSize"
                    render={() => (
                      <FormItem>
                        {pitchSizes && pitchSizes?.map((pitchSize) => (
                          <FormField
                            key={pitchSize.id}
                            control={form.control}
                            name="pitchSize"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={pitchSize.id}
                                  className="flex flex-row mb-2 items-start space-x-3 space-y-0 rounded-md border p-4"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(pitchSize.id)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, pitchSize.id])
                                          : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== pitchSize.id
                                            )
                                          )
                                      }}
                                    />
                                  </FormControl>
                                  <div className="space-y-1 leading-none">
                                    <FormLabel className="font-bold uppercase">
                                      {pitchSize.name}
                                    </FormLabel>
                                    <FormDescription className="-ml-6">
                                      {pitchSize.description}
                                    </FormDescription>
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
                progressValue={25}
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
