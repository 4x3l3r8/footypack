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
import { CheckIcon, ChevronsUpDown } from "lucide-react";

const locations = [
  {
    value: "next.js",
    label: "Mainland",
  },
  {
    value: "sveltekit",
    label: "Agbara",
  },
  {
    value: "nuxt.js",
    label: "Surulere",
  },
  {
    value: "remix",
    label: "VI",
  },
  {
    value: "astro",
    label: "Lekki",
  },
];

export function LocationSearch() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="link"
          role="combobox"
          aria-expanded={open}
          className="w-fit justify-between"
        >
          {value
            ? locations.find((framework) => framework.value === value)?.label
            : "Select Location..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search location..." className="h-9" />
          <CommandEmpty>No Location found.</CommandEmpty>
          <CommandGroup>
            {locations.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {framework.label}

                <span className="text-slate-400 italics ml-auto"> 2 turfs</span>
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
