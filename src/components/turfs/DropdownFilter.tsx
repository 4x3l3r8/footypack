import * as React from "react";
// import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { CheckIcon, ChevronsUpDown, Circle, Filter } from "lucide-react";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";

const locations = [
  {
    value: "next.js",
    label: "4-a-side",
  },
  {
    value: "sveltekit",
    label: "5-a-side",
  },
  {
    value: "nuxt.js",
    label: "6-a-side",
  },
  {
    value: "remix",
    label: "7-a-side",
  },
  {
    value: "astro",
    label: "8-a-side",
  },
];

export function FilterDropdown() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <label className="relative ml-3 mr-auto w-1/6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Filter className="h-5 w-5 " />
          </span>
          <Input
            className="placeholder:font-italitc cursor-pointer border-slate-300 pl-12 focus-visible:ring-0 focus-visible:ring-inset"
            placeholder="Filter By"
            type="text"
            value={""}
            // disabled
          />
        </label>
      </PopoverTrigger>
      <PopoverContent
        className="portal:left-[50px] flex w-fit gap-3 p-4 md:w-[1000px]"
        sideOffset={5}
        alignOffset={10}
      >
        <Command>
          <CommandEmpty>No Location found.</CommandEmpty>
          <CommandGroup
            heading={
              <span className="text-xl font-semibold uppercase text-black">
                Pitches
              </span>
            }
          >
            {locations.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Circle
                  strokeWidth={"0.75px"}
                  className="mr-2"
                  fill={value === framework.value ? "green" : "transparent"}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
        <Command>
          <CommandEmpty>No Location found.</CommandEmpty>
          <CommandGroup
            heading={
              <span className="text-xl font-semibold uppercase text-black">
                Review
              </span>
            }
          >
            {locations.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Circle
                  strokeWidth={"0.75px"}
                  className="mr-2"
                  fill={value === framework.value ? "green" : "transparent"}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
        <Command>
          <CommandEmpty>No Location found.</CommandEmpty>
          <CommandGroup
            heading={
              <span className="text-xl font-semibold uppercase text-black">
                Location
              </span>
            }
          >
            {locations.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Circle
                  strokeWidth={"0.75px"}
                  className="mr-2"
                  fill={value === framework.value ? "green" : "transparent"}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
        <Command>
          <CommandEmpty>No Location found.</CommandEmpty>
          <CommandGroup
            heading={
              <span className="text-xl font-semibold uppercase text-black">
                Pricing
              </span>
            }
          >
            {locations.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Circle
                  strokeWidth={"0.75px"}
                  className="mr-2"
                  fill={value === framework.value ? "green" : "transparent"}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
