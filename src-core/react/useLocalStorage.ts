import { useState, useEffect } from "react";

import { isFunction } from "utils/object";

export const useLocalStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = useState(initialValue);

  const setValue = (value: any) => {
    try {
      const valueToStore = isFunction(value) ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      item && setStoredValue(JSON.parse(item));
    } catch (err) {
      console.error(err);
    }
  }, []);

  return [storedValue, setValue];
};
