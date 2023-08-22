import { Label } from "@radix-ui/react-label";
import { AlertTriangle } from "lucide-react";
import React from "react";
import type { InputProps } from "~/components/ui/input";

interface signUpInputProps extends InputProps {
  title: string;
  idName: string;
  placeholder: string;
  inpType: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleBlur: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  handleTouch?: boolean;
  handleErrors?: string;
}

const SignUpTextBox = ({
  title,
  idName,
  placeholder,
  inpType,
  handleChange,
  value,
  handleTouch,
  handleBlur,
  handleErrors,
  ...props
}: signUpInputProps) => {
  return (
    <>
      <div className="mb-4 grid items-center gap-1.5 md:basis-1/2">
        <Label htmlFor={idName}>
          {title} <span className="text-red-500">*</span>
        </Label>
        <input
          className={`w-full rounded border p-2 outline-none focus:border-primary focus:outline-none ${handleTouch && handleErrors ? "border-red-700" : ""
            }`}
          type={inpType}
          id={idName}
          name={idName}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          {...props}
        />
        {handleTouch && handleErrors ? (
          <div className="flex items-center gap-2 text-xs text-red-700">
            <AlertTriangle size={10} />
            {handleErrors}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SignUpTextBox;
