import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

import { ImagePlus } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { type IturfCreationDeets } from "~/pages/onboarding/turfmanager";
import { convertToBase64 } from "~/utils/helpers";
import SignUpProgress from "../SignUp/SignUpProgress";
import { ImgPreview } from "./ImgPreview";

interface IAppProps {
  continueToNextStep: () => void;
  updateParentState: (
    prop: keyof IturfCreationDeets,
    value?: any
  ) => void;
}


const MAX_FILE_SIZE = 5000000;


const formSchema = z.object({
  files: z.object({
    name: z.string(),
    size: z.number(),
    base64Url: z.any()
  }).array()
});

export function TurfImage({
  continueToNextStep,
  updateParentState,
}: IAppProps) {


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles, rejectedFile) => {
      form.clearErrors()

      // Set the uploaded files to the form field
      if (acceptedFiles.length > 0) {
        let processedCount = 0;

        const processedFiles: { name: string; size: number; base64Url?: any; }[] = []

        for (const image of acceptedFiles) {
          convertToBase64(image, (base64String) => {
            if (base64String !== null) {
              processedFiles.push({ name: image.name, size: image.size, base64Url: base64String });
            }

            // Check if all images have been processed
            processedCount++;
            if (processedCount === acceptedFiles.length) {
              // All images have been processed, you can use 'processedFiles' here
              form.setValue("files", processedFiles);
            }
          });
        }
      }

      if (rejectedFile.length > 0) {
        form.setError("files", { type: rejectedFile[0]?.errors[0]?.code, message: rejectedFile[0]?.errors[0]?.message });
      }
    },
    accept: {
      "image/*": [],
    },
    maxFiles: 5,
    maxSize: MAX_FILE_SIZE
  });


  const onSubmit = (values: z.infer<typeof formSchema>) => {
    updateParentState("turfImages", values.files);
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
              <FormField
                control={form.control}
                name="files"
                render={({ field, }) => {
                  return (
                    <FormItem>
                      <FormLabel {...getRootProps({ onClick: e => e.preventDefault() })} className={`relative flex ${acceptedFiles.length > 0 ? "h-[200px]" : "h-[500px]"} rounded-xl flex-col items-center justify-center border-2 border-dashed`}>
                        {acceptedFiles.length > 0 ? <div className="flex gap-2 flex-wrap">
                          {field?.value?.map((file, index) => {
                            return (<ImgPreview file={file} key={index} />)
                          })}
                        </div> : <>
                          <ImagePlus size={50} className="mb-4 text-gray-500" />
                          <h1 className="mb-2 font-bold uppercase">
                            drag images of your turfs here
                          </h1>
                          <p className="text-gray-500 capitalize">
                            Add at least 5 images of your turf here
                          </p>
                        </>
                        }

                        <div className="w-auto rounded-full max-w-sm items-center gap-1.5 absolute bottom-12">
                          <Input type="file" name="files" className={`${acceptedFiles.length > 0 ? "hidden" : "block"}`} {...getInputProps} multiple />
                        </div>
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )
                }}
              />
              {/* {acceptedFiles.map(file => file.name)} */}

              <SignUpProgress
                firstBtn="Back"
                secondBtn="Next"
                progressValue={60}
                canProceed={acceptedFiles.length > 0}
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