import { useEffect, useState } from "react";

export default function useDomLoaded() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return loaded;
}
