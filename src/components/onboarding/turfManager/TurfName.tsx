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
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";
import { Textarea } from "~/components/ui/textarea";
import { type IturfCreationDeets } from "~/pages/onboarding/turfmanager";
import SignUpProgress from "../SignUp/SignUpProgress";

export interface IAppProps {
    continueToNextStep: () => void;
    updateParentState: (prop: keyof IturfCreationDeets, value: string | number) => void
}

const formSchema = z.object({
    name: z.string().min(2, { message: "Name should have at least 2 characters" }).max(255, { message: "Name is too long" }),
    description: z.string().max(500)
})

export function TurfName({ continueToNextStep, updateParentState }: IAppProps) {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: ""
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        updateParentState("turfName", values.name);
        updateParentState("turfDescription", values.description)
        continueToNextStep()
    }

    return (
        <>
            <section className="w-11/12 md:w-10/12">
                <div className="rounded-sm bg-white p-4 shadow-lg">
                    <div className="my-4">
                        <h1 className="font-extrabold uppercase">basic information</h1>
                        <p className="text-gray-500">Select options that describes you.</p>
                    </div>
                    <Separator />
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name of Turf</FormLabel>
                                        <FormControl>
                                            <Input className="p-4" placeholder="e.g. Teslim Balogun Stadium" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                rows={6}
                                                placeholder="Describe your Turf"
                                                className="resize-none"
                                                {...field}
                                            />
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
