import React, { useState, useRef } from 'react';

interface OtpInputProps {
  length: number;
  onChange: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length, onChange }) => {
  const [otpValues, setOtpValues] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (index: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (index < length - 1 && value !== '') {
      inputRefs.current[index + 1].focus();
    }

    onChange(newOtpValues.join(''));
  };

  const handleInputPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = event.clipboardData.getData('text');
    const otpArray = pastedData.slice(0, length).split('');
    otpArray.forEach((value, index) => {
      handleInputChange(index, value);
    });
    event.preventDefault();
  };

  return (
    <div className="flex space-x-4">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref!)}
          className="w-12 h-12 text-center border rounded focus:ring focus:ring-[#F18322] focus:border-[#F18322]"
          type="text"
          maxLength={1}
          value={otpValues[index]}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onPaste={handleInputPaste}
        />
      ))}
    </div>
  );
};

export default OtpInput;
