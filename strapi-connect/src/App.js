import axios from 'axios';
import { useEffect, useState } from 'react';

 function App  ()  {
  const [error, setError] = useState(null);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/home-page-questions')
      .then(({ data }) => setQuestions(data.data))
      .catch((error) => setError(error))
  }, [])
      
  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }
  console.log(questions)
  return (
    <div className="App">
      <ul>
        {questions.map(({ id, attributes }) => <li key={id}><h1>{attributes.Question}</h1><p>{attributes.Answer}</p></li>)}
      </ul>
    </div>
  );
};

export default App;