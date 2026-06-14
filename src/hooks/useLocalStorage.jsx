import { useState, useEffect } from "react";

/**
 * Custom hook that syncs React state with localStorage.
 * Reads the stored value on mount and writes back on every change.
 *
 * @param {string} key          - localStorage key
 * @param {any}    initialValue - fallback if key doesn't exist yet
 * @returns {[any, Function]}   - same API as useState
 */

export default function useLocalStorage(key, initialValue) {
  // Lazy initializer – runs only on the first render
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    // If the key already exists in localStorage, use that value
    if (jsonValue != null) return JSON.parse(jsonValue);
    // Otherwise fall back to the provided initial value
    // (support both plain values and lazy functions)
    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  // Persist to localStorage every time the state or key changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
