import { useCallback, useEffect, useRef, useState } from "react";
import { getFiles } from "../api";

export const useFiles = () => {
  const [data, setData] = useState<{ files: any[] } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);
  const acRef = useRef<AbortController | null>(null);

  const refetch = useCallback(async () => {
    acRef.current?.abort();
    const ac = new AbortController();
    acRef.current = ac;

    setLoading(true);
    setError(null);
    try {
      const res = await getFiles();
      if (!ac.signal.aborted) setData(res);
      return res;
    } catch (e) {
      if (!ac.signal.aborted) setError(e);
      throw e;
    } finally {
      if (!ac.signal.aborted) setLoading(false);
    }
  }, []);

  useEffect(() => {
    refetch();
    return () => acRef.current?.abort();
  }, [refetch]);

  return { data, uploadedFiles: data?.files ?? [], loading, error, refetch };
}
