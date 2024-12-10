import { useState, useEffect } from "react";

/**
 * Custom hook to debounce a value after a delay.
 * @param value - The value to debounce.
 * @param delay - The debounce delay in milliseconds.
 * @returns The debounced value.
 */
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup the timeout if the value changes
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
