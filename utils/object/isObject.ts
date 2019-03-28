import { isNull } from "utils/object";

export const isObject = (value: any) => {
  const type = typeof value;

  return (type == "object" || type == "function") && !isNull(value);
};
