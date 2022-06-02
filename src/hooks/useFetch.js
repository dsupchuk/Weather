import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setErr] = useState(undefined);

  async function fetchNow(url) {
    setLoading(true);
    try {
      let result = await fetch(url);
      let response = await result.json();
      setData(response);
    } catch (error) {
      setErr(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (url) {
      fetchNow(url);
    }
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
