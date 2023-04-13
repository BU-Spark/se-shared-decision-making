import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

//template for teams to use in the future for collecting data for Strapi, please modify as needed

const useFetch = <T extends any>(url: string) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = (await res.json()) as T;

        setData(json);
        setLoading(false);
      } catch (error: unknown) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { loading, error, data };
};

export default useFetch;
