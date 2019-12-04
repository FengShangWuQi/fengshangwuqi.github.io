import { useState } from "react";

export const useToggle = (defaultValue?: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = () => {
    return setValue(!value);
  };

  return [value, toggle];
};
