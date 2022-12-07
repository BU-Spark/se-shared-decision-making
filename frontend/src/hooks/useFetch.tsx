import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch =<T,>(url:string, initialState: T) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState<T>(initialState);
    
    useEffect(() => {
        axios
        .get(url)
        .then(({ data }) => setData(data.data))
        .catch((error) => setError(error))
    }, [url])
        
    return {data, error}
  
}
export default useFetch;