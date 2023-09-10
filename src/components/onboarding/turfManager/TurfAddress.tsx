import { zodResolver } from "@hookform/resolvers/zod";
import { City } from "@prisma/client";
import * as React from "react";
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
import { Input } from "~/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "~/components/ui/select";
import { Separator } from "~/components/ui/separator";
import { type updateUserType } from "~/pages/onboarding/becomeaplayer";
import { type IturfCreationDeets } from "~/pages/onboarding/turfmanager";
import { api } from "~/utils/api";
import SignUpProgress from "../SignUp/SignUpProgress";

interface IAppProps {
    continueToNextStep: () => void;
    updateUser: updateUserType;
    updateParentState: (prop: keyof IturfCreationDeets, value: string | number) => void
}

const formSchema = z.object({
    turfStreet: z.string().min(2, { message: "Name should have at least 2 characters" }).max(255, { message: "Name is too long" }),
    turfCity: z.number(),
    turfState: z.number(),
    turfZip: z.string().optional()
})

export function TurfAddress({ continueToNextStep, updateUser, updateParentState }: IAppProps) {
    const [selectedStateId, setSelectedStateId] = React.useState(0)
    const [filteredCities, setFilteredCities] = React.useState<City[]>()

    const { data: statesWithCityList, isLoading } = api.utils.getAllStates.useQuery({ includeCities: true })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            turfStreet: "",
            turfCity: 1,
            turfState: 1,
            turfZip: ""
        },
    })

    const mutationHandler = updateUser.useMutation({
        onSuccess: (data) => {
            if (data.status === "Ok") {
                continueToNextStep()
            }
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        updateParentState("turfStreet", values.turfStreet);
        updateParentState("turfCity", values.turfCity);
        updateParentState("turfState", values.turfState);
        continueToNextStep()
    }

    React.useEffect(() => {
        if (selectedStateId && !isLoading) {
            setFilteredCities(statesWithCityList?.filter((state) => state.id === selectedStateId)[0]?.cities)
        }
    }, [isLoading, selectedStateId, statesWithCityList])

    return (
        <>
            <section className="w-11/12 md:w-10/12">
                <div className="rounded-sm bg-white p-4 shadow-lg">
                    <div className="my-4">
                        <h1 className="font-extrabold uppercase">Turf Address</h1>
                        <p className="text-gray-500">Fill in the informationabout your turf&apos;s whereabouts</p>
                    </div>
                    <Separator />
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4">
                            <FormField
                                control={form.control}
                                name="turfStreet"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Turf address</FormLabel>
                                        <FormControl>
                                            <Input className="p-4" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="turfState"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>State</FormLabel>
                                        <Select onValueChange={(e: string) => { field.onChange(Number(e)); setSelectedStateId(Number(e)) }} value={field.value.toString()} defaultValue={field.value.toString()}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a state" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="max-h-64 overflow-y-auto">
                                                {statesWithCityList?.map((state) => (<SelectItem key={state.id} value={state.id.toString()}>{state.name}</SelectItem>))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="turfCity"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>City</FormLabel>
                                        <Select onValueChange={(e) => field.onChange(Number(e))} value={field.value.toString()} defaultValue={field.value.toString()}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a city" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="max-h-64 overflow-y-auto">
                                                {filteredCities?.map(city => (
                                                    <SelectItem key={city.id} value={city.id.toString()}>{city.name}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="turfZip"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Zip Code(Optional)</FormLabel>
                                        <FormControl>
                                            <Input className="p-4" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

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
