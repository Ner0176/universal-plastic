import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { FC, useState } from "react";
import { locationsData } from "../../utils/locations";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../shadcn/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../shadcn/components/ui/command";
import { Button } from "../../shadcn/components/ui/button";
import { cn } from "../../shadcn/lib/utils";

interface ISelector{
  locationId: number;
  handleChange: (id: number) => void;
}

const Selector: FC<ISelector> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-64 justify-between bg-cyan-50 text-cyan-700"
        >
          {!!props.locationId
            ? locationsData.find((location) => location.id === props.locationId)?.city
            : "Select location..."}
          <CaretSortIcon color="#0e7490" className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <Command className="bg-cyan-50">
          <CommandInput placeholder="Search location..." className="h-9" />
          <CommandEmpty>No location found.</CommandEmpty>
          <CommandGroup>
            {locationsData.map((location) => (
              <CommandItem
                key={location.id}
                onSelect={() => {
                  props.handleChange(location.id === props.locationId ? 0 : location.id);
                  setOpen(false);
                }}
              >
                {location.city}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    props.locationId === location.id ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Selector;
