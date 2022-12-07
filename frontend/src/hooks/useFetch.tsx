import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
//
const useFetch  = <T,>(url:string, initalState: T ) => {
    
    
    const [data, setData] = useState<T>(initalState);
    
    useEffect(() => {
        axios
        .get(url)
        .then(({ data }) => setData(data.data))
        .catch((error) => console.error(error))
    }, [url])
        
    return data
  
}
export default useFetch;