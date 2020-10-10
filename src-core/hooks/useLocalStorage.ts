import { useState } from "react";
import { isFunction } from "lodash";

export const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
): [T, (value: any) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = globalThis.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  const updateStoredValue = (value: any) => {
    try {
      const newStoredValue = isFunction(value) ? value(storedValue) : value;
      setStoredValue(newStoredValue);
      globalThis.localStorage.setItem(key, JSON.stringify(newStoredValue));
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, updateStoredValue];
};
