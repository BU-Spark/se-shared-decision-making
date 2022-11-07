import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch =(url) => {
  const [error, setError] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => setQuestions(data.data))
      .catch((error) => setError(error))
  }, [])
      
  return {questions, error}
  
}
export default useFetch;