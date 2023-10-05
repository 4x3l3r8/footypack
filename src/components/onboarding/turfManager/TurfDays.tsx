import { zodResolver } from "@hookform/resolvers/zod";
import { DayOfWeek } from "@prisma/client";
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
DayOfWeek

import { Checkbox } from "~/components/ui/checkbox";
import { type IturfCreationDeets } from "~/pages/onboarding/turfmanager";
import SignUpProgress from "../SignUp/SignUpProgress";
import TurfTime from "./TurfTime";

interface IAppProps {
  continueToNextStep: () => void;
  updateParentState: (
    prop: keyof IturfCreationDeets,
    value: any
  ) => void;
}

const formSchema = z.object({
  turfDays: z.object({
    dayOfWeek: z.string(),
    startTime: z.string(),
    endTime: z.string()
  }).array()
});

export function TurfDays({
  continueToNextStep,
  updateParentState,
}: IAppProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      turfDays: []
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const filteredArray = values.turfDays.filter(obj => {
      // Check if all properties have values and those values are not empty or null
      return Object.values(obj).every(prop => prop !== null && prop !== '');
    });

    updateParentState("turfDays", filteredArray);
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
                  name="turfDays"
                  render={() => (
                    <FormItem>
                      {Object.keys(DayOfWeek).map((weekday) => (
                        <FormField
                          key={weekday}
                          control={form.control}
                          name="turfDays"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={weekday}
                                className="relative mb-2 flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.some((value) => value.dayOfWeek === weekday)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, { dayOfWeek: weekday, endTime: "", startTime: "" }])
                                        : field.onChange(
                                          field.value?.filter(
                                            (value) => value.dayOfWeek !== weekday
                                          )
                                        )
                                    }}
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel className="font-bold uppercase">
                                    Every {weekday}
                                  </FormLabel>
                                </div>
                                <TurfTime fieldContext={field} value={{ startTime: field.value.find((value) => value.dayOfWeek === weekday)?.startTime || "", endTime: field.value.find((value) => value.dayOfWeek === weekday)?.endTime || "", dayOfWeek: field.value.find((value) => value.dayOfWeek === weekday)?.dayOfWeek || "" }} />
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                      <FormMessage />
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
              />
            </form>
          </Form>
        </div>
      </section>
    </>
  );
}
