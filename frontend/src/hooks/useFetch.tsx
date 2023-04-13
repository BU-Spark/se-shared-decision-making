import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

//template for teams to use in the future for collecting data for Strapi, please modify as needed

const useFetch = <T extends any>(url: string) => {
  const [data, setData] = useState<T>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = (await res.json()) as T;
      setData(json);
    };

    fetchData();
  }, [url]);

  return data;
};

export default useFetch;
