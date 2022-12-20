import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch =(url) => {
  
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => setQuestions(data.data))
      .catch((error) => {
          if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
          } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
          }
        }
      )
    
  }, [])
      
  return questions
  
}
export default useFetch;