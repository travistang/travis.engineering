import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

const tagSearch = async (url: string) => {
  const response = await fetch(url);
  if (response.status !== 200) return null;
  return response.json() as Promise<string[]>;
};

const useDebounce = (value: string) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setDebounced(value);
    }, 300);
  }, [value]);
  return debounced;
};

export const useTagSearch = (searchString: string) => {
  const debouncedSearchString = useDebounce(searchString);
  const { data, isLoading } = useSWR(
    () =>
      searchString
        ? `/api/tags?query=${encodeURIComponent(debouncedSearchString)}`
        : null,
    tagSearch
  );
  return [data, isLoading] as const;
};
