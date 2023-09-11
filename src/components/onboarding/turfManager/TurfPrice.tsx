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
import { Button } from "~/components/ui/button";

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

export function TurfPrice({
  continueToNextStep,
  updateUser,
  updateParentState,
}: IAppProps) {
  const [selectedStateId, setSelectedStateId] = React.useState(0);
  const [filteredCities, setFilteredCities] = React.useState<City[]>();
  const [price, setPrice] = React.useState(0);

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

  React.useEffect(() => {
    if (price > 1500) {
        setPrice(1500)
    }
  }, [price])


  return (
    <>
      <section className="w-11/12 md:w-10/12">
        <div className="rounded-sm bg-white p-4 shadow-lg">
          <div className="my-4">
            <h1 className="font-bold uppercase">Enter amount per turf games</h1>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="flex h-screen flex-col items-center justify-between p-4">
                <div className="w-full">
                  <div className="flex justify-between items-center mb-2">
                    <h1 className="font-bold uppercase">Enter price</h1>

                    <Button
                      variant={"ghost"}
                      className="text-blue-500 underline"
                      onClick={()=>setPrice(1500)}
                    >
                      Max NGN1500
                    </Button>
                  </div>

                  <div className="border rounded-md py-12 border-black">
                    <input type='text' value={`${String(price).startsWith('NGN') ? price : `NGN${price}`}`} className="outline-0 text-center text-4xl font-bold border-0 w-full ring-0 focus:outline-0 focus:ring-0 focus:border-0" onChange={(e)=>setPrice(e.target.value)} />
                  </div>

                  <p className='text-center font-semibold text-sm my-4'>
                  {String(price).startsWith('NGN') ? price : `NGN${price}`} per game
                  </p>
                </div>

                <div className='w-11/12 rounded bg-gray-200 text-center font-semibold text-xl text-gray-700 p-4'>
                    Note that <span className='font-bold text-black'>an inspection would be done on your turf</span> to determine that this price is worth the value you offer the players
                </div>
              </div>

              <SignUpProgress
                firstBtn="Back"
                secondBtn="Next"
                progressValue={100}
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
