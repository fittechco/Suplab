import {useSearchParams} from '@remix-run/react';
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
} from './ui/select';

type DropdownProps = {
  placeholder: string;
  param: string;
  options: Option[];
};

type Option = {
  value: string;
  label: string;
};

function Dropdown({placeholder, options, param}: DropdownProps) {
  const [searchParams, setSearchParams] = useSearchParams();

  const getOptionFromValue = (value: string | null) => {
    if (!value) return null;
    return options.find((option) => option.value === value);
  };

  return (
    <Select
      onValueChange={(value) => {
        setSearchParams(
          (prev) => {
            prev.set(param, value);
            return prev;
          },
          {
            replace: true,
          },
        );
      }}
    >
      {/* <SelectTrigger className="w-[180px]"> */}
      <SelectTrigger className="uppercase">
        <SelectValue
          placeholder={
            getOptionFromValue(searchParams.get(param))?.label ?? placeholder
          }
        />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
        {/* <SelectItem value="light">Light</SelectItem> */}
      </SelectContent>
    </Select>
  );
}

export default Dropdown;
