import { useNavigation, useSearchParams } from '@remix-run/react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './ui/Select';

type DropdownProps = {
  placeholder: string;
  param: string;
  options: Option[];
};

type Option = {
  value: string;
  label: string;
};

function Dropdown({ placeholder, options, param }: DropdownProps) {
  const [currentSearchParams, setSearchParams] = useSearchParams();
  const navigation = useNavigation();
  // const navigate = useNavigate();

  // const {pathname, search} = useLocation();

  // const linkParams = new URLSearchParams(search);


  const getOptionFromValue = (value: string | null) => {
    if (value == null) return null;
    return options.find((option) => option.value === value);
  };

  // const fetcher = useFetcher();

  const defaultParams = new URLSearchParams(currentSearchParams);

  const searchParams = navigation.location
    ? new URLSearchParams(navigation.location.search)
    : defaultParams;

  return (
    <Select
      onValueChange={(value) => {
        // const linkParams = new URLSearchParams(search);
        // linkParams.set(param, value);
        // const url = `${pathname}?${linkParams.toString()}`;
        // fetcher.load(url);
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
      </SelectContent>
    </Select>
  );
}

export default Dropdown;
