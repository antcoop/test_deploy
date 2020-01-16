import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      // Cancel the timeout if value or delay changes
      return () => {
        clearTimeout(handler);
      };
    },
    // Only call the effect if value or delay changes.
    [delay, value]
  );

  return debouncedValue;
};

export default useDebounce;
