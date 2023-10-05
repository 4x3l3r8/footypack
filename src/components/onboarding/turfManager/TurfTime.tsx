import { useState } from "react";
import { type ControllerRenderProps } from "react-hook-form";
import { Input } from "~/components/ui/input";
import { useToast } from "~/components/ui/use-toast";

interface iProps {
  // updateParentTimes: (startTime: string, endTime: string) => void;
  value: { startTime: string, endTime: string, dayOfWeek: string };
  fieldContext: ControllerRenderProps<{
    turfDays: {
      dayOfWeek: string;
      startTime: string;
      endTime: string;
    }[];
  }, "turfDays">
}

const TurfTime = ({ value, fieldContext }: iProps) => {
  const [startTime, setStartTime] = useState<string>(value.startTime !== "" ? value.startTime : new Date().toTimeString())
  const [endTime, setEndTime] = useState<string>(value.endTime !== "" ? value.endTime : new Date().toTimeString())
  const { toast } = useToast()

  return (
    <>
      <div className={`absolute right-2 gap-2 flex ${value.dayOfWeek !== "" ? "block" : "hidden"}`}>
        <Input onChange={({ target }) => {
          if (target.value < endTime) {
            setStartTime(target.value)
            const existingValuesWithoutThisDay = fieldContext.value.filter((existing) => existing.dayOfWeek !== value.dayOfWeek)
            fieldContext.onChange([...existingValuesWithoutThisDay, { dayOfWeek: value.dayOfWeek, startTime: target.value, endTime }])
          } else {
            toast({
              description: "Start time can't be after end time.",
              variant: "destructive"
            })
          }
        }} value={startTime} type="time" className="w-[120px] font-bold" />

        <Input onChange={({ target }) => {
          if (target.value > startTime) {
            setEndTime(target.value)
            const existingValuesWithoutThisDay = fieldContext.value.filter((existing) => existing.dayOfWeek !== value.dayOfWeek)
            fieldContext.onChange([...existingValuesWithoutThisDay, { dayOfWeek: value.dayOfWeek, startTime: startTime, endTime: target.value }])
          } else {
            toast({
              description: "Start time can't be after end time.",
              variant: "destructive"
            })
          }
        }} value={endTime} type="time" className="w-[120px] font-bold" />
      </div>
    </>
  );
};

export default TurfTime;
