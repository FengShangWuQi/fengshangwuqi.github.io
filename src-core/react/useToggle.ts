import { useState } from "react";

import { isBoolean } from "utils/object";

export const useToggle = (
  defaultValue: boolean,
): [boolean, (nextValue?: boolean) => void] => {
  const [value, setValue] = useState(defaultValue);

  const toggle = (nextValue?: boolean) => {
    return isBoolean(nextValue) ? setValue(nextValue!) : setValue(!value);
  };

  return [value, toggle];
};
