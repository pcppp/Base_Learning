import { useState, useRef, useEffect, useCallback } from 'react';

function useFetch(url, option = {}, retryCount = 3, retryDelay = 1000) {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const abortRef = useRef(null);

  const fetchData = useCallback(async () => {
    if (!url) return;
    // 取消上一个请求
    if (abortRef.current) {
      abortRef.current.abort();
    }
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError(null);

    let attempt = 0;
    while (attempt <= retryCount) {
      try {
        const res = await fetch(url, { ...option, signal: controller.signal });

        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }

        setData(await res.json());
        setError(null);
        return res;
      } catch (err) {
        // 如果是手动中止，直接抛出不中断外层
        if (controller.signal.aborted) {
          setLoading(false);
          return;
        }
        attempt++;
        if (attempt > retryCount) {
          setError(err);
          setData(null);
          setLoading(false);
          return Promise.reject(err);
        }
      }
    }
  }, [url, JSON.stringify(option), retryCount, retryDelay]);

  useEffect(() => {
    fetchData();
    return () => {
      if (abortRef.current) {
        abortRef.current.abort();
      }
    };
  }, [fetchData]);

  const retry = useCallback(() => {
    return fetchData();
  }, [fetchData]);

  const abort = useCallback(() => {
    if (abortRef.current) abortRef.current.abort();
  }, []);

  return { data, error, loading, retry, abort };
}

export default useFetch;
